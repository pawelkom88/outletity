import {useState} from "react";
import useAuthContext from "hooks/useAuthContext";
import useModal from "hooks/useModal";
import Button from "../button/Button";
import CommentModal from "../modals/comment-modal/CommentModal";
import {user as x, star} from "utilities/images";
import "./Comments.scss";

export default function Comments() {
  const {user} = useAuthContext();
  const {isShown, toggle} = useModal();
  const [numberOfStars, setNumberOfStars] = useState(0);
  const [review, setReview] = useState("");

  // 1. If user is logged in he/she can add comments

  //user photo ? email

  //   random color border firebase timestamp , new collections
  // if user logged on can add comments - certain product certain ID !!!

  // all users see comments

  return (
    <div className="comments-container">
      <h2 className="comment-heading">Customers comments</h2>
      <div className="comments-bubble">
        <div className="user-details">
          <img className="user" src={x} alt="" />
          <p>User email</p>
          <p>Added : 2022</p>
          <img src={star} alt="star" />
        </div>
        <p className="comment-content">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus maiores, distinctio at
          exercitationem veniam cupiditate ab natus similique hic vero tempora autem corporis
          officiis iure architecto, recusandae quo magni excepturi.
        </p>
      </div>
      {user && <Button onClick={toggle} content="Add comment" id="dark-background" />}
      {isShown && (
        <CommentModal
          setReview={setReview}
          numberOfStars={numberOfStars}
          setNumberOfStars={setNumberOfStars}
          toggle={toggle}
        />
      )}
    </div>
  );
}
