import useModal from "hooks/useModal";
import useOverflow from "hooks/useOverflow";
import VoucherModal from "../modals/voucher/VoucherModal";
import "./Voucher.scss";

export default function Voucher() {
  const discount = "10%";
  const {isShown, toggle} = useModal();
  useOverflow(isShown);

  return (
    <>
      <p className="voucher" onClick={toggle}>
        GET {discount} DISCOUNT VOUCHER NOW
      </p>
      {isShown && (
        <>
          <VoucherModal toggle={toggle} />
        </>
      )}
    </>
  );
}
