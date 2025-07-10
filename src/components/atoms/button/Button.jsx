import './Button.css';

const Button = ({ onClick, children,type = "button", className = "" }) => {
  return <button className={`custom-button ${className}`} onClick={onClick} type={type}>{children}</button>;
};


export default Button;