import Button from "components/UI/button/Button";
import Modal from "../modal/Modal";
import toast, {Toaster} from "react-hot-toast";
import Input from "components/UI/input/Input";

function notifyUser() {
  toast.success("Thank you for subscribing !");
  // // future use
  // toast.promise(
  //   Promise,
  //    {
  //      loading: 'Saving...',
  //      success: <b>Thank you for subscribing !</b>,
  //      error: <b>Something went wrong...Try again</b>,
  //    }
  //  );
  // setTimeout(toggle, 3000);
}
export default function NewsletterModal({toggle}) {
  return (
    <>
      <Modal heading={"Don’t miss out !"} toggle={toggle}>
        <p style={{fontSize: "clamp(2vmin,1.2rem,3vmin)"}}>
          Sign up for our newsletter to stay in the loop.
        </p>
        <Input
          labelFor="email"
          id="email"
          for="email"
          name="email"
          type="email"
          placeholder="Enter e-mail"
          ariaLabel="Press enter to submit"
        />
        <Button onClick={notifyUser} content="Send" className="background" />
      </Modal>
      <Toaster position="top-center" />
    </>
  );
}
