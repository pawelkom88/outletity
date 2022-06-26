import {useState, useEffect} from "react";
import {user} from "utilities/images";
import LoginModal from "../modals/login/LoginModal";
import SignupModal from "../modals/signup/SignupModal";
import "./UserPanel.scss";

export default function UserPanel({isShown, toggle}) {
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(true);

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
    <>
      {isShown && isLoggedIn && (
        <LoginModal
          isShown={isShown}
          toggle={toggle}
          handleTransition={handleTransitionBetweenModals}
        />
      )}
      <button onClick={toggle} aria-label="show user-profile" className="user no-styles">
        <img src={user} alt="User icon" />
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
