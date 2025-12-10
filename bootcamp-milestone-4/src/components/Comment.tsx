type IComment = {
  user: string;
  comment: string;
  time: Date | string;
};

type CommentProps = {
  comment: IComment;
};

function parseCommentTime(time: Date | string) {
  if (!time) return "Invalid date";
  
  const date = typeof time === "string" ? new Date(time) : new Date(time);
  
  // Check if date is valid
  if (isNaN(date.getTime())) {
    return "Invalid date";
  }

  // Get month name
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const month = months[date.getMonth()];

  // Get day
  const day = date.getDate();

  // Get year
  const year = date.getFullYear();

  // Get hours and minutes
  let hours = date.getHours();
  const minutes = date.getMinutes();
  const ampm = hours >= 12 ? "PM" : "AM";
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  const minutesStr = minutes < 10 ? `0${minutes}` : minutes;

  return `${month} ${day} ${year} ${hours}:${minutesStr}${ampm}`;
}

function Comment({ comment }: CommentProps) {
  // Validate comment data
  if (!comment || typeof comment !== "object") {
    return null;
  }
  
  const user = comment.user || "Anonymous";
  const commentText = comment.comment || "";
  const time = comment.time || new Date();

  // Don't render if comment is empty
  if (!commentText.trim()) {
    return null;
  }

  return (
    <div className="comment-container">
      <h4 className="comment-user">{user}</h4>
      <p className="comment-text">{commentText}</p>
      <span className="comment-time">{parseCommentTime(time)}</span>
    </div>
  );
}

export default Comment;
