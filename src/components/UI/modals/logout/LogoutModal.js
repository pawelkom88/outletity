import Modal from "../modal/Modal";

export default function LogoutModal({isShown, toggle}) {

  return (
    <>
      {/* {!isLoggedOut && ( */}
        <Modal isShown={isShown} toggle={toggle} heading={"Click to log out"}>
          {/* <button onClick={logUserOut}>Log out</button> */}
        </Modal>
      {/* )} */}
    </>
  );
}
