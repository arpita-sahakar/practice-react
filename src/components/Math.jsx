function result(num1, operator, num2) {
  if (operator === "+") {
    return Number(num1) + Number(num2);
  } else if (operator === "-") {
    return Number(num1 - num2);
  } else if (operator === "*") {
    return Number(num1) * Number(num2);
  } else if (operator === "/") {
    return num1 / num2;
  } else if (operator === "%") {
    return num1 % num2;
  }
}

function Math(props) {
  return (
    <span>
      <div>
        {result(props.num1, props.operator, props.num2)}
      </div>

    </span>
  );
}
export default Math;
