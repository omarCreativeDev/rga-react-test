import { Button } from '../Button/Button.tsx';
import Styles from './Hero.module.css';

export const Hero = () => {
  const { mainHeading, badge, secondaryHeading, copy } = Styles;

  return (
    <>
      <h1 className={mainHeading}>MORE FROM RICO THE DOG</h1>
      <span className={badge}>RICO IS BACK!</span>
      <h2 className={secondaryHeading}>RICOBOT</h2>
      <p className={copy}>
        Charge into a brand-new supersized adventure with RICO across 50 exciting and diverse
        worlds. available now on PS5!
      </p>
      <Button label="LEARN MORE" url="#" />
    </>
  );
};
