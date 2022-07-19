import {useState} from "react";
import useCollection from "hooks/useCollection";
import useAuthContext from "hooks/useAuthContext";
import useModal from "hooks/useModal";
import Button from "../UI/button/Button";
import UserComments from "../user-comments/userComments";
import CommentModal from "../UI/modals/comment-modal/CommentModal";
import "./Comments.scss";

export default function Comments({title}) {
  const {user} = useAuthContext();
  const {isShown, toggle} = useModal();
  const [review, setReview] = useState("");
  const {data: comments} = useCollection("COMMENTS");
  const commentExists = comments && comments.some(({id}) => id.includes(title.substring(0, 30)));

  return (
    <div className="comments-container">
      <h2 className="comment-heading">Customers comments:</h2>
      {comments &&
        comments.map(comment => {
          if (comment.id.includes(title.substring(0, 30))) {
            return (
              <UserComments
                key={comment.id}
                timeStamp={comment.timestamp}
                content={comment.content}
                rating={comment.rating}
                email={comment.email}
                avatar={comment.url}
              />
            );
          }
          return null;
        })}
      {!commentExists && (
        <h3 className="first-comment">
          Be the first who comment this product ! Login to your account.
        </h3>
      )}
      {user && <Button onClick={toggle} content="Add comment" id="dark-background" />}
      {isShown && (
        <CommentModal title={title} review={review} setReview={setReview} toggle={toggle} />
      )}
    </div>
  );
}
