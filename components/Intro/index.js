import style from './intro.module.scss';
import logo from '../../src/img/logo.svg';
import cover from '../../src/img/cover.svg';
import Image from 'next/image';
import Dialog from '../Dialog';
import { useAll } from '../Context';

function Intro() {
  const {login, setLogin} = useAll()
  const handleSubmit = () => {
    setLogin(true)
    localStorage.setItem('login', true)
  };

  return (
    <div className={style.intro}>
      <header className={style.header}>
        <Image src={logo} height={56} width={233} />
      </header>
      <main src={style.cover}>
        <Image src={cover} height={272} width={300} />
      </main>
      <Dialog
        title="Welcome to the TestCase APP!"
        button="Start"
        onClick={handleSubmit}
      >We created this exercise to gain insights about your development skills.</Dialog>
    </div>
  );
}

export default Intro;
