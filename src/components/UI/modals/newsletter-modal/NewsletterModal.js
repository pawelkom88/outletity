import Modal from "../modal/Modal";
import toast, {Toaster} from "react-hot-toast";
import MailchimpSubscribe from "react-mailchimp-subscribe";
import "./NewsletterModal.scss";

const url = process.env.MAILCHIMP_URL;

function Form() {
  <MailchimpSubscribe url={url} />;
}

export default function NewsletterModal({toggle}) {
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

  return (
    <>
      <Modal heading={"Don’t miss out !"} toggle={toggle}>
        <p style={{fontSize: "clamp(2vmin,1.2rem,3vmin)"}}>
          Sign up for our newsletter to stay in the loop.
        </p>
        <MailchimpSubscribe
          url={url}
          render={({subscribe, status, message}) => (
            <div>
              <Form onSubmitted={formData => subscribe(formData)} />
              {status === "sending" && <div style={{color: "blue"}}>sending...</div>}
              {status === "error" && (
                <div style={{color: "red"}} dangerouslySetInnerHTML={{__html: message}} />
              )}
              {status === "success" && <div style={{color: "green"}}>Subscribed !</div>}
            </div>
          )}
        />
      </Modal>
      <Toaster position="top-center" />
    </>
  );
}
