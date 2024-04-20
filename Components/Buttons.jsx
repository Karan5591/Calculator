import "../src/index.css";

function CalcButtons({ value, className1, callBack }) {
  return (
    <div>
      <button
        className={`${className1 ? "button-operator" : "buttonStyle"}`}
        onClick={() => callBack(value)}
      >
        {value}
      </button>
    </div>
  );
}

export default CalcButtons;
