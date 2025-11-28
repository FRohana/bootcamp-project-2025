import { NextRequest, NextResponse } from 'next/server';
import connectDB from '@/database/db';
import Blog from '@/database/blogSchema';

type IParams = {
	params: Promise<{
		slug: string
	}>
}

export async function POST(req: NextRequest, { params }: IParams) {
	try {
		await connectDB();
		const { slug } = await params;
		console.log('POST /api/blog/[slug]/comment - Slug:', slug);

		const body = await req.json();
		console.log('Request body:', body);
		const { user, comment } = body;

		if (!user || !comment) {
			console.log('Missing user or comment');
			return NextResponse.json(
				{ error: 'User and comment are required' },
				{ status: 400 }
			);
		}

		const newComment = {
			user: user.trim(),
			comment: comment.trim(),
			time: new Date(),
		};
		console.log('New comment to add:', newComment);

		// Find the blog document (don't use .lean() so we can modify and save it)
		const blog = await Blog.findOne({ slug }).orFail();
		console.log('Blog found:', blog.title);
		console.log('Current comments:', blog.comments);
		
		// Initialize comments array if it doesn't exist
		if (!blog.comments || !Array.isArray(blog.comments)) {
			console.log('Initializing comments array');
			blog.comments = [];
		}

		// Add the new comment to the array
		blog.comments.push(newComment);
		console.log('Comments after push:', blog.comments);
		
		// Mark the comments field as modified to ensure it gets saved
		blog.markModified('comments');
		
		// Save the document
		const savedBlog = await blog.save();
		console.log('Blog saved successfully. Comments count:', savedBlog.comments?.length);

		return NextResponse.json({ success: true, comment: newComment });
	} catch (err) {
		console.error('Error adding comment:', err);
		if (err instanceof Error) {
			console.error('Error message:', err.message);
			console.error('Error stack:', err.stack);
		}
		return NextResponse.json(
			{ error: 'Failed to add comment', details: err instanceof Error ? err.message : 'Unknown error' },
			{ status: 500 }
		);
	}
}

