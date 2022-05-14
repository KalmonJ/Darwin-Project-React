import "./button.css";

function ButtonComponent(props: any) {
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
