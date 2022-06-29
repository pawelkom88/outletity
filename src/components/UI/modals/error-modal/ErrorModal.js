import useModal from "hooks/useModal";
import Modal from "../modal/Modal";
import "./ErrorModal.scss";

export default function ErrorModal({error}) {
  const {isShown, toggle} = useModal();

  return (
    <Modal heading="Something went wrong..." isShown={isShown} toggle={toggle}>
      <p className="fetch-msg">{error}</p>
    </Modal>
  );
}
