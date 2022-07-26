import {useState, useEffect} from "react";
import UseUserAvatar from "hooks/useUserAvatar.js";
import {user as userIcon} from "utilities/images";
import SignupModal from "../UI/modals/signup/SignupModal";
import UserSettings from "components/UI/modals/logout/UserSettings";
import Modal from "components/UI/modals/modal/Modal";
import LoginModal from "components/UI/modals/login/LoginModal";
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
        <>
          {user ? (
            <UserSettings
              setIsUploaded={setIsUploaded}
              avatar={avatar}
              setAvatar={setAvatar}
              user={user}
              toggle={toggle}
            />
          ) : (
            <Modal toggle={toggle} heading={"Log in to your account"}>
              <LoginModal handleTransition={handleTransitionBetweenModals} />
            </Modal>
          )}
        </>
      )}
      {isShown && isSignedIn && (
        <Modal toggle={toggle} heading={"Creating a new account"}>
          <SignupModal toggle={toggle} handleTransition={handleTransitionBetweenModals} />
        </Modal>
      )}
    </>
  );
}
