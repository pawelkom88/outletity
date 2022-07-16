import Modal from "../modal/Modal";
import {star, emptyStar as empty} from "utilities/images";
import Button from "components/UI/button/Button";
import "./CommentModal.scss";

export default function CommentModal({toggle, setNumberOfStars, numberOfStars, setReview}) {
  function handleFirebase() {
    console.log("hej");
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
        <Button content="Add" id="dark-background" onClick={handleFirebase} />
        {/* on click toggle ? */}
      </label>
    </Modal>
  );
}
