import "./button.css";

type propsButtom = {
  func: (bool: boolean) => void;
};

function ButtonComponent(props: propsButtom) {
  return (
    <button
      onClick={() => {
        props.func(true);
      }}
      className="button"
    >
      Contate-nos
    </button>
  );
}

export default ButtonComponent;
