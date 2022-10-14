import Head from 'next/head';
import Header from '../../components/Header';
import { useAll } from '../../components/Context';
import style from './mypoint.module.scss';

function MyPoint() {
  const { mypoint } = useAll();

  return (
    <>
      <Head>
        <title>My Points – TestCase APP.</title>
      </Head>

      <Header />
      <div className={style.PointList}>
        <h4 className={style.ListTitle}>Completed actions</h4>
        <ul>
          {mypoint?.map(item => (
            <li key={item.id}>
              <span className={style.actionName}>{item.title}</span>
              <span className={style.point}>+{item.point}</span>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default MyPoint;
