import {star} from "utilities/images";
import "./userComments.scss";

export default function userComments({email, avatar, timeStamp, rating, content}) {
  const userName = email.split("@");
  return (
    <div className="comments-bubble">
      <div className="user-details">
        <img className="comment-avatar" src={avatar} alt="user avatar" />
        <p className="user-email">{userName[0]}</p>
        <p className="timestamp">Added : {timeStamp ? timeStamp.toDate().toLocaleString() : ""}</p>
        <div className="rating">
          {[...new Array(rating)].map((_, i) => (
            <img key={i} className="rating-star" src={star} alt="" />
          ))}
        </div>
      </div>
      <p className="comment-content">' {content} '</p>
    </div>
  );
}
