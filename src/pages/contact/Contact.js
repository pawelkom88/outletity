import Box from "components/UI/box/Box";
import "./Contact.scss";

export default function Contact() {
  return (
    <section>
      <Box content="Get in touch">
        <form action="#" className="contact-form">
          <p className="contact-form__description">
            Feel free to contact us if you need assistance.
          </p>
          <div className="contact-form__wrapper">
            <label for="name" className="contact-form__label">
              Name:{" "}
            </label>
            <input type="text" className="contact-form__input" id="name" required />
            <label for="email" className="contact-form__label">
              E-mail:{" "}
            </label>
            <input type="email" className="contact-form__input" required />
            <label for="textarea" className="contact-form__label">
              Message:{" "}
            </label>
            <textarea
              id="message"
              className="contact-form__textarea"
              rows="10"
              cols="50"
              required></textarea>
          </div>
          <button className="contact-form__btn">Send</button>
        </form>
      </Box>
    </section>
  );
}
