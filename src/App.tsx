import Styles from './App.module.css';
import { Hero } from './components/Hero/Hero.tsx';

function App() {
  const { container } = Styles;

  return (
    <section className={container}>
      <Hero />
    </section>
  );
}

export default App;
