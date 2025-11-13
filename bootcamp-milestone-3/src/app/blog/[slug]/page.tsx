import { notFound } from "next/navigation";
import connectDB from "@/database/db";
import Blog from "@/database/blogSchema";

type Props = {
  params: Promise<{
    slug: string;
  }>;
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
};

async function getBlog(slug: string): Promise<BlogPost | null> {
  await connectDB();

  try {
    const blog = await Blog.findOne({ slug }).lean().orFail();
    return blog as unknown as BlogPost;
  } catch (err) {
    return null;
  }
}

export default async function BlogPost({ params }: Props) {
  const { slug } = await params;
  const blog = await getBlog(slug);

  if (!blog) {
    notFound();
  }

  return (
    <main>
      <h1 className="page-title">{blog.title}</h1>

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
    </main>
  );
}
