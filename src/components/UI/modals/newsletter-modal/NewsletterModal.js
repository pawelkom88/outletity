import {useState} from "react";
import Modal from "../modal/Modal";
import MailchimpSubscribe from "react-mailchimp-subscribe";
import SubscribeForm from "components/subscribe-form/SubscribeForm";
import "./NewsletterModal.scss";

export default function NewsletterModal({toggle}) {
  return (
    <>
      <Modal heading={"Don’t miss out !"} toggle={toggle}>
        <p style={{fontSize: "clamp(2vmin,1.2rem,3vmin)"}}>
          Sign up for our newsletter to stay in the loop.
        </p>
        <MailchimpSubscribe
          url={process.env.REACT_APP_MAILCHIMP_URL}
          render={({subscribe, status, message}) => (
            <SubscribeForm
              status={status}
              message={message}
              onValidated={formData => subscribe(formData)}
            />
          )}
        />
      </Modal>
    </>
  );
}
