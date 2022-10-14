import AppHeader from '../../components/AppHeader';
import { useAll } from '../../components/Context';
import style from './mypoint.module.scss';

function MyPoint() {
  const { mypoint } = useAll();

  return (
    <>
      <AppHeader />
      <div className={style.PointList}>
        <h4 className={style.ListTitle}>Completed actions</h4>
        <ul>
          {mypoint &&
            mypoint.map((item) => (
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
