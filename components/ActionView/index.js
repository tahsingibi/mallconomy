import { useAll } from '../Context';
import style from './actionview.module.scss';
import Dialog from '../Dialog';
import check from '../../src/img/check.svg';

export default function ActionView({ earnMode }) {
  const { setMyPoint, myPoint, complete, setComplete, setActionView } = useAll();

  const handlePoint = (earnMode) => {
    const findPoint = myPoint.find((myp) => myp.id === earnMode?.id);
    if (findPoint) {
      alert('Actions can only be completed once.');

      setActionView(false);
      setComplete(false);
    } else {
      setMyPoint([earnMode, ...myPoint]);
      setComplete(true);
    }
  };

  const handleComplete = () => {
    setActionView(false);
    setComplete(false);
  };

  return (
    <>
      <div className={style.ActionView}>
        {complete ? (
          <Dialog
            title="Congratulations!"
            image={check}
            button="Close"
            onClick={() => handleComplete()}
          >
            You&apos;ve earned points for your participation!
            <br /> Keep Up the great work!
          </Dialog>
        ) : (
          <Dialog
            title={earnMode?.title}
            image={earnMode?.image}
            point={earnMode?.point}
            button="Earn points"
            onClick={() => handlePoint(earnMode)}
          >
            {earnMode?.description}
          </Dialog>
        )}
      </div>
    </>
  );
}
