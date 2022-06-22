import useModal from "hooks/useModal";
import Modal from "../modal/Modal";

export default function ErrorModal({error}) {
  const {toggle} = useModal();

  return <Modal toggle={toggle}>{error}</Modal>;
}
