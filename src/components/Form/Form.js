import React from 'react';
import { Formik, Form, Field } from 'formik';
import './Form.css';

const ContactForm = () => {
  return (
    <section className="contact-section">
      <div className="blue-container">
        <div className="contact-header">
          <h2>Є питання?<br />Зв'яжіться з нами!</h2>
          <p>
          Заповніть форму для контакту.<br></br>
          Ми обробимо ваш запит і зв'яжемося з вами<br></br> найближчим часом.
          </p>
        </div>
        <div className="white-container">
          <Formik
            initialValues={{
              surname: '',
              name: '',
              email: '',
              phone: '',
              message: '',
            }}
            onSubmit={(values) => {
              console.log('Form Data:', values);
              alert('Ваш запит відправлено!');
            }}
          >
            {() => (
              <Form className="contact-form">
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="surname">Прізвище</label>
                    <Field
                      type="text"
                      id="surname"
                      name="surname"
                      placeholder="Введіть ваше прізвище"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="name">Ім’я</label>
                    <Field
                      type="text"
                      id="name"
                      name="name"
                      placeholder="Введіть ваше ім’я"
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="email">Електронна пошта</label>
                  <Field
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Введіть вашу ел.пошту"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="phone">Мобільний телефон</label>
                  <Field
                    type="tel"
                    id="phone"
                    name="phone"
                    placeholder="Введіть ваш мобільний телефон"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="message">Ваш запит</label>
                  <Field
                    as="textarea"
                    id="message"
                    name="message"
                    rows="4"
                    placeholder="Введіть ваш запит"
                  />
                </div>
                <button type="submit" className="submit-button">Надіслати</button>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
