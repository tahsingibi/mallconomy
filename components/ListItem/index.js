import Image from 'next/image';
import style from './listitem.module.scss';

function ListItem({ title, description, point, image, onClick  }) {
  return (
    <div className={style.ListItem} onClick={onClick}>
      <div className={style.img}>
        <Image
        src={image}
        width={36}
        height={36}
        layout="fixed"
        />
      </div>
      <div className={style.text}>
        <p className={style.textTitle}>{title}</p>
        <p className={style.textDesc}>{description}</p>
      </div>
      <div className={style.point}>
        <span>+{point}</span>
      </div>
    </div>
  );
}

export default ListItem;
