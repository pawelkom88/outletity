import {useState} from "react";
import useCollection from "hooks/useCollection";
import useAuthContext from "hooks/useAuthContext";
import useModal from "hooks/useModal";
import Button from "../button/Button";
import UserComments from "../user-comments/userComments";
import CommentModal from "../modals/comment-modal/CommentModal";
import "./Comments.scss";

export default function Comments({title}) {
  const {user} = useAuthContext();
  const {isShown, toggle} = useModal();
  const [review, setReview] = useState("");
  const {data: comments} = useCollection("COMMENTS");

  return (
    <div className="comments-container">
      {<h2 className="comment-heading">Customers comments: {comments && comments.length}</h2>}
      {comments &&
        comments.map(comment => {
          if (comment.id.includes(title.substring(0, 30))) {
            return (
              <UserComments
                key={comment.id}
                timeStamp={comment.timestamp}
                content={comment.content}
                rating={comment.rating}
                email={user?.email}
              />
            );
          }
          return null;
        })}
      {user && <Button onClick={toggle} content="Add comment" id="dark-background" />}
      {isShown && (
        <CommentModal title={title} review={review} setReview={setReview} toggle={toggle} />
      )}
    </div>
  );
}
