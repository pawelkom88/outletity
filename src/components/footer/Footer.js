import useMatchMedia from "hooks/useMatchMedia";
import useModal from "hooks/useModal";
import FooterMobile from "./footer-mobile/FooterMobile";
import FooterDesktop from "./footer-desktop/FooterDesktop";
import useOverflow from "hooks/useOverflow";

export default function Footer() {
  const {matches} = useMatchMedia("(max-width: 450px)");
  const {isShown, toggle} = useModal();
  useOverflow(isShown);

  return (
    <>
      {matches ? (
        <FooterMobile isShown={isShown} toggle={toggle} />
      ) : (
        <FooterDesktop isShown={isShown} toggle={toggle} />
      )}
    </>
  );
}
