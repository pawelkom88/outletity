import UseUserAvatar from "hooks/useUserAvatar";
import {star} from "utilities/images";
import "./userComments.scss";

export default function userComments({email, timeStamp, rating, content}) {
  const {avatar} = UseUserAvatar(true);

  return (
    <div className="comments-bubble">
      <div className="user-details">
        <img className="comment-avatar" src={avatar} alt="" />
        <p className="user-email">{email}</p>
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
