import React from 'react';
import Dialog from '../Dialog';
import style from './actionview.module.scss';
import { useAll } from '../Context';
import check from '../../src/img/check.svg';

function ActionView({ earnMode }) {
  const { setMypoint, mypoint, complete, setComplete, setActionview } =
    useAll();

  const handlePoint = (earnMode) => {
    if (mypoint.find((myp) => myp.id === earnMode.id)) {
      alert('Actions can only be completed once.');
      setActionview(false);
      setComplete(false);
    } else {
      setMypoint([...mypoint, earnMode]);
      setComplete(true);
    }
  };

  const handleComplete = () => {
    setActionview(false);
    setComplete(false);
  };

  return (
    <>
      <div className={style.ActionView}>
        {!complete ? (
          <Dialog
            title={earnMode.title}
            image={earnMode.image}
            point={earnMode.point}
            button="Earn points"
            onClick={() => handlePoint(earnMode)}
          >
            {earnMode.description}
          </Dialog>
        ) : (
          <Dialog
            title="Congratulations!"
            image={check}
            button="Close"
            onClick={() => handleComplete()}
          >
            You &apos; ve earned points for your participation! <br /> Keep Up the
            great work!
          </Dialog>
        )}
      </div>
    </>
  );
}

export default ActionView;
