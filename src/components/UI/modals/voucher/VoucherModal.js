import Button from "components/UI/button/Button";
import Modal from "../modal/Modal";
import "./VoucherModal.scss";
import {CopyToClipboard} from "react-copy-to-clipboard";
import toast, {Toaster} from "react-hot-toast";

export default function VoucherModal({toggle}) {
  const voucherCode = "HX10TZ6";

  function notifyUser() {
    toast.success("Code has been copied to cliboard");
  }

  return (
    <>
      <Toaster position="top-center" />
      <Modal heading={"Your voucher code:"} toggle={toggle}>
        <span className="voucher-code">{voucherCode}</span>
        <CopyToClipboard text={voucherCode}>
          <Button onClick={notifyUser} className="background" content="Copy code" />
        </CopyToClipboard>
      </Modal>
    </>
  );
}
