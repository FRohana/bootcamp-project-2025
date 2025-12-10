import { notFound } from "next/navigation";
import Comment from "@/components/Comment";
import CommentForm from "@/components/CommentForm";
import connectDB from "@/database/db";
import Blog from "@/database/blogSchema";

// Force dynamic rendering since we're fetching from database
export const dynamic = "force-dynamic";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

type IComment = {
  user: string;
  comment: string;
  time: Date | string;
};

type BlogPost = {
  title: string;
  date: string;
  description: string;
  content?: string;
  image: string;
  imageAlt: string;
  slug: string;
  additionalImages?: Array<{
    src: string;
    alt: string;
    caption: string;
  }>;
  comments?: IComment[];
};

async function getBlog(slug: string): Promise<BlogPost | null> {
  try {
    await connectDB();
    const blog = await Blog.findOne({ slug }).lean();

    if (!blog) {
      return null;
    }

    // Handle comments if it's stored as a string (JSON string) instead of an array
    let comments = blog.comments;
    if (comments && typeof comments === "string") {
      try {
        comments = JSON.parse(comments);
      } catch (parseError) {
        console.error("Error parsing comments JSON:", parseError);
        comments = [];
      }
    }

    // Ensure comments is an array
    if (!comments || !Array.isArray(comments)) {
      comments = [];
    }

    return {
      ...blog,
      comments,
    } as BlogPost;
  } catch (err: unknown) {
    console.error(`Error fetching blog: ${err}`);
    return null;
  }
}

export default async function BlogPost({ params }: Props) {
  const { slug } = await params;
  const blog = await getBlog(slug);

  if (!blog) {
    notFound();
  }

  // Ensure comments is an array
  if (blog.comments && !Array.isArray(blog.comments)) {
    blog.comments = [];
  }

  return (
    <main>
      <h1 className="page-title">{blog.title}</h1>

      <div className="blog-layout">
        {/* Comments Sidebar */}
        <aside className="comments-sidebar">
          <h3 className="comments-title">
            {blog.comments &&
            Array.isArray(blog.comments) &&
            blog.comments.length > 0
              ? `${blog.comments.length} ${
                  blog.comments.length === 1 ? "COMMENT" : "COMMENTS"
                }`
              : "COMMENTS"}
          </h3>
          <div className="comments-list">
            {blog.comments &&
            Array.isArray(blog.comments) &&
            blog.comments.length > 0 ? (
              blog.comments.map((comment, index) => (
                <Comment key={index} comment={comment} />
              ))
            ) : (
              <p className="no-comments">
                No comments yet. Be the first to comment!
              </p>
            )}
          </div>

          <CommentForm slug={slug} />
        </aside>

        {/* Main Blog Content */}
        <div className="blog-post-container">
          {blog.additionalImages && blog.additionalImages.length > 0 ? (
            <div className="image-row">
              <img src={blog.image} alt={blog.imageAlt} />
              {blog.additionalImages.map(
                (
                  img: { src: string; alt: string; caption: string },
                  index: number
                ) => (
                  <img key={index} src={img.src} alt={img.alt} />
                )
              )}
            </div>
          ) : (
            <img src={blog.image} alt={blog.imageAlt} />
          )}

          <h2>{blog.title}</h2>
          <p>{blog.date}</p>
          <p>{blog.content || blog.description}</p>
        </div>
      </div>
    </main>
  );
}
