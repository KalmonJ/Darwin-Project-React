import FormComponent from "../form/form";
import "./modal.css";

type propsModal = {
  close: () => void;
  state: boolean | undefined;
  func: (state: boolean) => void;
};

function ModalComponent(props: propsModal) {
  return (
    <div className="container-bg-form">
      <div className="bg-form" onClick={() => props.close()}></div>
      <div
        className={
          props.state
            ? "modal"
            : props.state === undefined
            ? "modal-closed"
            : ""
        }
      >
        <FormComponent modalClose={props.close}></FormComponent>
      </div>
    </div>
  );
}

export default ModalComponent;
