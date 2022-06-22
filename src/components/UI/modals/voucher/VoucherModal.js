import Button from "components/UI/button/Button";
import Modal from "../modal/Modal";
import "./VoucherModal.scss";
import {CopyToClipboard} from "react-copy-to-clipboard";
import toast, {Toaster} from "react-hot-toast";

export default function VoucherModal({toggle}) {

  function notifyUser() {
    toast.success("Code has been copied");
  }
  
  return (
    <>
      <Toaster position="top-center" />
      <Modal heading={"Your voucher code:"} toggle={toggle}>
        <span className="voucher-code">HX10TZ6</span>
        <CopyToClipboard text="HX10TZ6" onCopy={notifyUser}>
          <Button className="background" content="Copy" />
        </CopyToClipboard>
      </Modal>
    </>
  );
}
