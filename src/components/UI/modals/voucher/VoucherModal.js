import Button from "components/UI/button/Button";
import Modal from "../modal/Modal";
import {CopyToClipboard} from "react-copy-to-clipboard";
import {notifyUser} from "utilities/helpers";
import toast, {Toaster} from "react-hot-toast";
import "./VoucherModal.scss";

export default function VoucherModal({toggle}) {
  const voucherCode = "HX10TZ6";
  return (
    <>
      <Modal heading={"Your voucher code:"} toggle={toggle}>
        <span className="voucher-code">{voucherCode}</span>
        <CopyToClipboard text={voucherCode}>
          <Button
            onClick={() => notifyUser(toast.success, "Code has been copied to cliboard")}
            id="dark-background"
            content="Copy code"
          />
        </CopyToClipboard>
      </Modal>
      <Toaster position="top-center" />
    </>
  );
}
