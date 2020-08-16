import React from 'react';

import './styles.scss';

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target.name.value);
  };
  return (
    <div className="form__container">
      <form autoComplete="off" className="form" onSubmit={handleSubmit}>
        <label className="form__label" htmlFor="name">
          Name
          <input className="form__input" id="name" name="name" type="text" />
        </label>
        <label className="form__label" htmlFor="mail">
          E-mail
          <input className="form__input" id="mail" name="mail" type="text" />
        </label>
        <label className="form__label" htmlFor="mail">
          Message
          <textarea className="form__input form__input--msg" name="msg" />
        </label>
        <input className="form__submit" type="submit" value="Send" />
      </form>
      <p className="form__text">
        <strong>Did you know?</strong>
        <span className="form__text-part">
          90% of the web users never use contact form even if they are
          intesrested in getting in touch. Let&apos;s change that - send me your
          job offer details via this form!
        </span>
        <span className="form__text-part">
          Feel free to leave me a message if you&apos;re interested in hiring
          me, want to collaborate or just have a tech or not tech related chat.
          I&apos;ll reply as soon as possible.
        </span>
        <span className="form__text-part">
          As an alternative you can find me here:
        </span>
      </p>
    </div>
  );
};

export default Contact;
