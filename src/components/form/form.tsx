import { useState } from "react";
import NotificationComponent from "../notification/notification";
import "./form.css";

function FormComponent(props: any) {
  const [notificationState, setNotificationState] = useState(false);
  const [formStates, setFormStates] = useState({
    name: "",
    email: "",
    subject: "",
    text: "",
  });

  function changeStateOfNotification() {
    setNotificationState(true);
    setTimeout(() => {
      setNotificationState(false);
    }, 2000);
  }

  return (
    <>
      <div className="container__x">
        <img
          onClick={() => props.modalClose()}
          className="icon__x"
          src="img/Property 1=Default.png"
          alt="icon x"
        />
      </div>
      <div className="container__picture">
        <img
          className="img__bird"
          src="img/modal_image.png"
          alt="image of bird"
        />
      </div>
      <div className="container__form">
        <div className="header_form">
          <h2 className="form__title">
            Pronto para levar sua <br /> organização para o próximo <br />{" "}
            nível?
          </h2>
          <p className="form__description">
            Sit morbi iaculis vitae tempor varius. In vel cras faucibus
            malesuada
            <br /> lacus luctus proin augue. Viverra consequat cursus enim enim
            et, <br /> nunc vel dignissim.
          </p>
        </div>
        <form
          className="form"
          onSubmit={(e) => {
            e.preventDefault();
            changeStateOfNotification();
            setFormStates({ name: "", email: "", subject: "", text: "" });
          }}
        >
          <div className="form__inputs">
            <input
              onChange={(e) => {
                setFormStates({ ...formStates, name: e.target.value });
              }}
              value={formStates.name}
              className="input"
              type="text"
              placeholder="Nome"
              required
            />
            <input
              onChange={(e) => {
                setFormStates({ ...formStates, email: e.target.value });
              }}
              value={formStates.email}
              className="input"
              type="email"
              placeholder="Email"
              required
            />
          </div>
          <div className="form__user-text">
            <input
              onChange={(e) => {
                setFormStates({ ...formStates, subject: e.target.value });
              }}
              value={formStates.subject}
              className="input__element"
              type="text"
              placeholder="Assunto"
              required
            />
            <textarea
              onChange={(e) => {
                setFormStates({ ...formStates, text: e.target.value });
              }}
              value={formStates.text}
              className="input__text"
              placeholder="Nome"
              name="user-text"
              id="user-description"
              required
            ></textarea>
          </div>
          <input className="button__form-submit" type="submit" value="Enviar" />
          {notificationState ? (
            <NotificationComponent></NotificationComponent>
          ) : null}
        </form>
      </div>
      <div className="contact__container-icons">
        <img
          className="icons-contact"
          src="img/Vector.png"
          alt="facebook icon"
        />
        <img
          className="icons-contact"
          src="img/Vector (1).png"
          alt="instagram icon"
        />
        <img
          className="icons-contact"
          src="img/Vector (2).png"
          alt="likedin icon"
        />
        <img
          className="icon__darwin"
          src="img/@darwindigital.png"
          alt="@darwin name"
        />
      </div>
    </>
  );
}

export default FormComponent;
