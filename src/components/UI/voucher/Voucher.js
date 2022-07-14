import useModal from "hooks/useModal";
import useOverflow from "hooks/useOverflow";
import VoucherModal from "../modals/voucher/VoucherModal";
import {discount} from "utilities/helpers";
import "./Voucher.scss";

export default function Voucher() {
  const {isShown, toggle} = useModal();
  useOverflow(isShown);

  return (
    <>
      <p className="voucher" onClick={toggle}>
        GET {discount}% DISCOUNT VOUCHER NOW
      </p>
      {isShown && (
        <>
          <VoucherModal toggle={toggle} />
        </>
      )}
    </>
  );
}
