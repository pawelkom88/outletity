import {useState, useEffect} from "react";
import {user as userIcon} from "utilities/images";
import LoginModal from "../modals/login/LoginModal";
import SignupModal from "../modals/signup/SignupModal";
import useAuthContext from "hooks/useAuthContext";
import {getDownloadURL, ref} from "firebase/storage";
import {storage} from "../../../firebase/config";

import "./UserPanel.scss";

export default function UserPanel({isShown, toggle}) {
  const {user} = useAuthContext();
  const [avatar, setAvatar] = useState(null);
  const [isUploaded, setIsUploaded] = useState(false);
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  function handleTransitionBetweenModals() {
    setIsSignedIn(prevState => !prevState);
    setIsLoggedIn(prevState => !prevState);
  }

  // if user is logged in, download his avatar from firebase storage
  useEffect(() => {
    async function getUserAvatar(id) {
      const userAvatar = await getDownloadURL(ref(storage, id));

      try {
        setAvatar(userAvatar);
      } catch (error) {
        if (error.code === "storage/object-not-found") {
          return;
        }
      }
    }
    if (user) {
      getUserAvatar(user.uid);
    }
  }, [isUploaded, user]);

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
      {isShown && isLoggedIn && (
        <LoginModal
          setIsUploaded={setIsUploaded}
          avatar={avatar}
          setAvatar={setAvatar}
          user={user}
          isShown={isShown}
          toggle={toggle}
          handleTransition={handleTransitionBetweenModals}
        />
      )}
      <button onClick={toggle} aria-label="show user-profile" className="user no-styles">
        <img className="user-avatar" src={avatar ? avatar : userIcon} alt="User icon" />
      </button>

      {isShown && isSignedIn && (
        <SignupModal
          isShown={isShown}
          toggle={toggle}
          handleTransition={handleTransitionBetweenModals}
        />
      )}
    </>
  );
}
