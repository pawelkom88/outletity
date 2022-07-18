import {useState, useEffect} from "react";
import UseUserAvatar from "hooks/useUserAvatar.js";
import {user as userIcon} from "utilities/images";
import LoginModal from "../modals/login/LoginModal";
import SignupModal from "../modals/signup/SignupModal";
import "./UserPanel.scss";

export default function UserPanel({isShown, toggle}) {
  const [isUploaded, setIsUploaded] = useState(false);
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const {user, avatar, setAvatar} = UseUserAvatar(isUploaded);

  function handleTransitionBetweenModals() {
    setIsSignedIn(prevState => !prevState);
    setIsLoggedIn(prevState => !prevState);
  }

  // back to default value after every modal close
  useEffect(() => {
    if (!isShown) {
      setIsSignedIn(false);
      setIsLoggedIn(true);
    }
  }, [isShown]);

  return (
    // if user is logged in
    <>
      <button onClick={toggle} aria-label="show user-profile" className="user no-styles">
        <img className="user-avatar" src={avatar ? avatar : userIcon} alt="User icon" />
      </button>
      {isShown && isLoggedIn && (
        <LoginModal
          setIsUploaded={setIsUploaded}
          avatar={avatar}
          setAvatar={setAvatar}
          user={user}
          toggle={toggle}
          handleTransition={handleTransitionBetweenModals}
        />
      )}
      {isShown && isSignedIn && (
        <SignupModal toggle={toggle} handleTransition={handleTransitionBetweenModals} />
      )}
    </>
  );
}
