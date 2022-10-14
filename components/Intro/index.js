import Image from 'next/image';
import style from './intro.module.scss';
import Dialog from '../Dialog';
import { useAll } from '../Context';
import logo from '../../src/img/logo.svg';
import cover from '../../src/img/cover.svg';

export default function Intro() {

  const { setLogin } = useAll();

  const handleSubmit = () => {
    setLogin(true);
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
      >
        We created this exercise to gain insights about your development skills.
      </Dialog>
    </div>
  );
}
