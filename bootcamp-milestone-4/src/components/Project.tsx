import style from "./project.module.css";
import Image from "next/image";
import Comment from "./Comment";
import PortfolioCommentForm from "./PortfolioCommentForm";

type IComment = {
  user: string;
  comment: string;
  time: Date | string;
};

type ProjectProps = {
  name: string;
  description: string;
  imageUrl: string;
  projectUrl: string;
  linkText?: string;
  comments?: IComment[];
};

export default function Project({
  name,
  description,
  imageUrl,
  projectUrl,
  linkText = "Learn More",
  comments,
}: ProjectProps) {
  // Ensure comments is an array
  const projectComments = comments && Array.isArray(comments) ? comments : [];

  return (
    <div className={style.projectWrapper}>
      {/* Project Card */}
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

      {/* Comments Sidebar */}
      <aside className={style.commentsSidebar}>
        <h3 className={style.commentsTitle}>
          {projectComments.length > 0
            ? `${projectComments.length} ${
                projectComments.length === 1 ? "COMMENT" : "COMMENTS"
              }`
            : "COMMENTS"}
        </h3>
        <div className={style.commentsList}>
          {projectComments.length > 0 ? (
            projectComments.map((comment, index) => (
              <Comment key={index} comment={comment} />
            ))
          ) : (
            <p className={style.noComments}>
              No comments yet. Be the first to comment!
            </p>
          )}
        </div>
        <PortfolioCommentForm projectName={name} />
      </aside>
    </div>
  );
}
