import Styles from './Button.module.css';
import { IButton } from './interfaces.ts';

export const Button = ({ label, url }: IButton) => {
  const { btn } = Styles;

  return (
    <a href={url} className={btn}>
      {label}
    </a>
  );
};
