"use client";

import { useState } from "react";

type CommentFormProps = {
  slug: string;
};

export default function CommentForm({ slug }: CommentFormProps) {
  const [user, setUser] = useState("");
  const [comment, setComment] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState<{
    type: "success" | "error";
    text: string;
  } | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setMessage(null);

    try {
      console.log("Submitting comment for slug:", slug);
      console.log("User:", user);
      console.log("Comment:", comment);

      const response = await fetch(`/api/blog/${slug}/comment`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          user: user.trim(),
          comment: comment.trim(),
        }),
      });

      console.log("Response status:", response.status);
      
      if (!response.ok) {
        let errorMessage = "Failed to submit comment";
        try {
          const errorData = await response.json();
          errorMessage = errorData.error || errorData.details || errorMessage;
        } catch (parseError) {
          // If response isn't JSON, use status text
          errorMessage = response.statusText || errorMessage;
        }
        throw new Error(errorMessage);
      }

      const responseData = await response.json();
      console.log("Response data:", responseData);

      setMessage({ type: "success", text: "Comment submitted successfully!" });
      setUser("");
      setComment("");

      // Refresh the page after a short delay to show the new comment
      setTimeout(() => {
        window.location.reload();
      }, 1000);
    } catch (err) {
      console.error("Error submitting comment:", err);
      setMessage({
        type: "error",
        text:
          err instanceof Error
            ? err.message
            : "Failed to submit comment. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form className="comment-form" onSubmit={handleSubmit}>
      <h4 className="comment-form-title">Leave a Comment</h4>

      <label htmlFor="comment-user">Your name:</label>
      <input
        type="text"
        id="comment-user"
        name="user"
        value={user}
        onChange={(e) => setUser(e.target.value)}
        placeholder="Your name..."
        required
      />

      <label htmlFor="comment-text">Add your comment:</label>
      <textarea
        id="comment-text"
        name="comment"
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        placeholder="Add your comment..."
        required
        rows={4}
      />

      {message && (
        <p className={`comment-message ${message.type}`}>{message.text}</p>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className="comment-submit-btn"
      >
        {isSubmitting ? "Submitting..." : "Send"}
      </button>
    </form>
  );
}
