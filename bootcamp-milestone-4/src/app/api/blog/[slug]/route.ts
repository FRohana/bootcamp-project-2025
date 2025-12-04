import { NextRequest, NextResponse } from 'next/server';
import connectDB from '@/database/db';
import Blog from '@/database/blogSchema';

type IParams = {
	params: Promise<{
		slug: string
	}>
}

export async function GET(req: NextRequest, { params }: IParams) {
	await connectDB();
	const { slug } = await params;

	try {
		const blog = await Blog.findOne({ slug });
		if (!blog) {
			return NextResponse.json('Blog not found.', { status: 404 });
		}

		// Handle comments if it's stored as a string (JSON string) instead of an array
		if (blog.comments && typeof blog.comments === 'string') {
			try {
				blog.comments = JSON.parse(blog.comments);
				// Save the fixed version back to the database
				blog.markModified('comments');
				await blog.save();
			} catch (parseError) {
				console.error('Error parsing comments JSON:', parseError);
				blog.comments = [];
			}
		}

		return NextResponse.json(blog);
	} catch (err) {
		console.error('Error fetching blog:', err);
		return NextResponse.json('Blog not found.', { status: 404 });
	}
}

