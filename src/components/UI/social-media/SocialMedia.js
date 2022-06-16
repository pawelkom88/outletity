import {facebook, twitter, instagram} from "utilities/images";
import "./SocialMedia.scss";

export default function SocialMedia() {
  return (
    <div className="footer-social-media">
      <span>follow us</span>
      <div className="social-media__icons">
        <a href="https://en-gb.facebook.com/" target="_blank" rel="noreferrer">
          <img src={facebook} alt="Facebook icon" />
        </a>
        <a href="https://twitter.com/" target="_blank" rel="noreferrer">
          <img src={twitter} alt="Twitter icon" />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noreferrer">
          <img src={instagram} alt="Instagram icon" />
        </a>
      </div>
      <hr />
      <time>&copy; Outletity {new Date().getFullYear()}</time>
    </div>
  );
}
