import {user} from "utilities/images";
import "./UserPanel.scss";

export default function UserPanel() {
  return <img className='user' src={user} alt="User icon" />;
}
