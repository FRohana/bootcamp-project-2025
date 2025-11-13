import Blogs from "@/components/Blogs";
import connectDB from "@/database/db";
import Blog from "@/database/blogSchema";

async function getBlogs() {
  await connectDB();
  try {
    const blogs = await Blog.find().sort({ date: -1 }).orFail();
    return blogs;
  } catch (err) {
    return null;
  }
}

export default async function BlogPage() {
  const blogs = await getBlogs();
  if (!blogs || blogs.length === 0) {
    return (
      <main>
        <h1 className="page-title">My Blog</h1>
        <p>No blogs found.</p>
      </main>
    );
  }
  
  return (
    <main>
      <h1 className="page-title">My Blog</h1>
      <div id="blog-container">
        {blogs.map((blog) => (
          <Blogs
            key={blog.slug}
            title={blog.title}
            date={blog.date}
            description={blog.description}
            image={blog.image}
            imageAlt={blog.imageAlt}
            slug={blog.slug}
            additionalImages={blog.additionalImages}
          />
        ))}
      </div>
    </main>
  );
}