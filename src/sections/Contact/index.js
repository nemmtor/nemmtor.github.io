import React from 'react';

import './styles.scss';

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target.name.value);
  };
  return (
    <div className="contact__container">
      <form
        autoComplete="off"
        className="contact__form"
        onSubmit={handleSubmit}
      >
        <label className="contact__label" htmlFor="name">
          Name
          <input className="contact__input" id="name" name="name" type="text" />
        </label>
        <label className="contact__label" htmlFor="mail">
          E-mail
          <input className="contact__input" id="mail" name="mail" type="text" />
        </label>
        <label className="contact__label" htmlFor="mail">
          Message
          <textarea className="contact__input contact__input--msg" name="msg" />
        </label>
        <input className="contact__submit" type="submit" value="Send" />
      </form>
      <p className="contact__text">
        <strong>Did you know?</strong>
        <span className="contact__text-part">
          90% of web users never use contact form even if they are intesrested
          in getting in touch. Let&apos;s change that - send me your job offer
          details via this form!
        </span>
        <span className="contact__text-part">
          Feel free to leave me a message if you&apos;re interested in hiring
          me, want to collaborate or just have a tech or not tech related chat.
          I&apos;ll reply as soon as possible.
        </span>
      </p>
    </div>
  );
};

export default Contact;
