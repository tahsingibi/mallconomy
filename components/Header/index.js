import Link from 'next/link';
import Image from 'next/image';
import style from './header.module.scss';
import { useAll } from '../Context';
import textLogo from '../../src/img/textLogo.svg';

export default function Header() {
  const { totalPoint } = useAll();
  return (
    <header className={style.AppHeader}>
      <Link href="/">
        <a>
          <Image src={textLogo} width={146} height={24} />
        </a>
      </Link>
      <div className={style.point}>
        <Link href="/MyPoint">
          <a>
            Points: <span>{totalPoint}</span>
          </a>
        </Link>
      </div>
    </header>
  );
}
