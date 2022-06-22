import useModal from "hooks/useModal";
import VoucherModal from "../modals/voucher/VoucherModal";
import "./Voucher.scss";

export default function Voucher() {
  const {isShown, toggle} = useModal();
  return (
    <>
      <p className="voucher" onClick={toggle}>
        GET 10% DISCOUNT VOUCHER NOW
      </p>
      {isShown && (
        <>
          <VoucherModal toggle={toggle} />
        </>
      )}
    </>
  );
}
