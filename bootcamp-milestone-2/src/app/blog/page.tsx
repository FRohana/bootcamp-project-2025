import Blogs from "@/components/Blogs";
import blogs from "@/app/blogData";

export default function BlogPage() {
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