import Image from 'next/image';
import style from './dialog.module.scss';

function Dialog({ title, children, image, point, button, onClick }) {
  return (
    <div className={style.dialog}>
      {image && (
        <div className={style.image}>
          <Image src={image} width={72} height={72} />
        </div>
      )}
      {point && <p className={style.points}>+{point} Points</p>}
      <div className={style.content}>
        {title && (
          <header className={style.title}>
            <h3>{title}</h3>
          </header>
        )}
        {children && <main className={style.main}>{children}</main>}
      </div>
      {button && (
        <footer className={style.footer}>
          <button className={style.button} onClick={onClick}>
            {button}
          </button>
        </footer>
      )}
    </div>
  );
}

export default Dialog;
