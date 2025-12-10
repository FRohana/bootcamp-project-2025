"use client";

import { useState } from "react";
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
  const [showComments, setShowComments] = useState(false);

  return (
    <div className={style.projectCard}>
      <div className={style.projectContent}>
        <a href={projectUrl} target="_blank" rel="noopener noreferrer" className={style.imageLink}>
          <Image
            src={imageUrl}
            alt={name}
            width={320}
            height={220}
            className={style.projectImage}
          />
        </a>
        <div className={style.projectInfo}>
          <h3 className={style.projectName}>{name}</h3>
          <p className={style.projectDescription}>{description}</p>
          <div className={style.projectActions}>
            <a
              href={projectUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={style.projectLink}
            >
              {linkText}
            </a>
            <button
              onClick={() => setShowComments(!showComments)}
              className={style.commentsToggle}
            >
              {projectComments.length > 0
                ? `${projectComments.length} ${projectComments.length === 1 ? "Comment" : "Comments"}`
                : "Comments"}
            </button>
          </div>
        </div>
      </div>

      {/* Comments Section - Collapsible */}
      {showComments && (
        <div className={style.commentsSection}>
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
        </div>
      )}
    </div>
  );
}
