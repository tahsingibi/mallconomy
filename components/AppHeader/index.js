import Image from 'next/image';
import textLogo from '../../src/img/textLogo.svg'
import style from './appheader.module.scss'
import { useAll } from '../Context';
import Link from 'next/link';

function AppHeader() {
  const {totalPoint, mypoint} = useAll()
  return (
    <header className={style.AppHeader}>
      <Link href="/"><a><Image src={textLogo} width={146} height={24} /></a></Link>
      <div className={style.point}>
        <Link href='/MyPoint'>
          <a>
          Points: <span>{totalPoint}</span>
          </a>
        </Link>
      </div>
    </header>
  );
}

export default AppHeader;
