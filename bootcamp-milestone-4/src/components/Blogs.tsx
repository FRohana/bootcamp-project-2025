import Link from "next/link";


type BlogProps = {
  title: string;
  date: string;
  description: string;
  image: string;
  imageAlt: string;
  slug: string;
  additionalImages?: Array<{
    src: string;
    alt: string;
    caption: string;
  }>;
};

export default function Blogs({
  title,
  date,
  description,
  image,
  imageAlt,
  slug,
  additionalImages,
}: BlogProps) {
    let additionalImagesElement;

    if(additionalImages) {
        additionalImagesElement = additionalImages.map((img, index) => (
            <img key={index} src={img.src} alt={img.alt} />
        ))
    }

    return(
    <div className="blog-post-container">
        <div className="image-row">
      <img src={image} alt={imageAlt} />
      {additionalImagesElement}
        </div>
      <h2>{title}</h2>
      <p>{date}</p>
      <p>{description}</p>
      <Link href={`/blog/${slug}`} className="readmore-button">
        Read More
      </Link>
    </div>
  );
}
