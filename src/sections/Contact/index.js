import React, { useState } from 'react';

import './styles.scss';

const Contact = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isFinished, setIsFinished] = useState(false);

  const handleSubmit = async (e) => {
    setIsLoading(true);
    e.preventDefault();
    const form = e.target;
    const body = {
      name: form.name.value,
      _replyto: form.mail.value,
      message: form.message.value,
    };
    const res = await fetch('https://formspree.io/xzbjqazr', {
      method: 'POST',
      body: JSON.stringify(body),
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const resJson = await res.json();
    setIsFinished(true);
    setIsLoading(false);
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
          <input className="form__input" id="mail" name="mail" type="email" />
        </label>
        <label className="form__label" htmlFor="mail">
          Message
          <textarea className="form__input form__input--msg" name="message" />
        </label>
        <input
          className="form__submit"
          disabled={isLoading}
          type="submit"
          value="Send"
        />
        {isFinished && <span className="form__greetings">Thank you!</span>}
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
      </p>
    </div>
  );
};

export default Contact;
