import {useState} from "react";
import Modal from "../modal/Modal";
import Button from "components/UI/button/Button";
import UseUserAvatar from "hooks/useUserAvatar";
import {db} from "../../../../firebase/config";
import {setDoc, doc, serverTimestamp} from "firebase/firestore";
import {star, emptyStar as empty} from "utilities/images";
import {v4 as uuidv4} from "uuid";
import "./CommentModal.scss";

export default function CommentModal({toggle, review, setReview, title}) {
  const [numberOfStars, setNumberOfStars] = useState(0);
  const {user, avatar} = UseUserAvatar(true);

  async function addComment(title) {
    const commentObj = {
      rating: numberOfStars,
      content: review,
      timestamp: serverTimestamp(),
      url: avatar,
      email: user.email,
    };

    await setDoc(doc(db, "COMMENTS", `${title + uuidv4()}`), commentObj);
  }

  return (
    <Modal heading="Add comment" toggle={toggle}>
      <div className="rating-stars">
        {[...new Array(5)].map((_, index) => {
          return (
            <img
              data-value={index + 1}
              onMouseOver={e => setNumberOfStars(e.target.dataset.value)}
              key={index}
              className={index + 1 <= numberOfStars ? "rating-star star" : "rating-star empty star"}
              src={index + 1 <= numberOfStars ? star : empty}
              alt={index + 1 <= numberOfStars ? "star" : "empty star"}
              onClick={() => setNumberOfStars(index + 1)}
            />
          );
        })}
      </div>
      <label className="comment-label" htmlFor="texarea">
        <textarea
          className="contact-form__textarea"
          name="textarea"
          id="message"
          rows="6"
          placeholder="Enter message"
          onChange={e => setReview(e.target.value)}
        />
        <Button
          content="Add"
          id="dark-background"
          onClick={() => {
            addComment(title);
            toggle();
          }}
        />
      </label>
    </Modal>
  );
}
