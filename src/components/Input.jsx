function Input(props) {

  return (
    <input
        type={props.type}
        value={props.value}
        onChange={props.onChange}
        placeholder={props.placeholder}
    />
  );
}

export default Input;
