import styles from './Button.module.css'
const Button = ({ className,text }) => {
  return (
    <button class={`btn btn2 ${className}`} type="button">
      {text}
    </button>
  );
};
export default Button;
