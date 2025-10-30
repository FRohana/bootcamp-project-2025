import style from "./project.module.css";
import Image from "next/image";

type ProjectProps = {
  name: string;
  description: string;
  imageUrl: string;
  projectUrl: string;
  linkText?: string;
};

export default function Project({
  name,
  description,
  imageUrl,
  projectUrl,
  linkText = "Learn More",
}: ProjectProps) {
  return (
    <div className={style.project}>
      <a href={projectUrl} target="_blank" rel="noopener noreferrer">
        <Image 
          src={imageUrl} 
          alt={name} 
          width={300} 
          height={300}
          className={style.projectImage}
        />
      </a>
      <div className={style.projectDetails}>
        <p className={style.projectName}>
          <strong>{name}</strong>
        </p>
        <p className={style.projectDescription}>{description}</p>
        <a 
          href={projectUrl} 
          target="_blank" 
          rel="noopener noreferrer"
          className={style.projectLink}
        >
          {linkText}
        </a>
      </div>
    </div>
  );
}