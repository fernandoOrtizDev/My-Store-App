import './Input.css';

const Input = ({ value, onChange, placeholder }) => {
  return <input className="custom-input" value={value} onChange={onChange} placeholder={placeholder} />;
};

export default Input;
