import { useEffect } from 'react';
import style from './list.module.scss';
import { useAll } from '../Context';
import ListItem from '../ListItem';
import ActionView from '../ActionView';

export default function List() {
  const {
    earnMode,
    setEarnMode,
    setActionView,
    actionView,
    actions,
    setActions,
  } = useAll();

  async function getData() {
    try {
      const res = await fetch('https://tahsinbey.com/mallconomy/actions.json');
      const data = await res.json();
      setActions(data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getData();
  }, []);

  const handleClick = ({ item }) => {
    setActionView(true);
    setEarnMode(item);
  };

  return (
    <>
      {actionView ? (
        <ActionView earnMode={earnMode} />
      ) : (
        <div className={style.AppList}>
          <h4 className={style.ListTitle}>Actions to be completed</h4>
          {actions?.map((item) => (
            <ListItem
              key={item?.id}
              title={item?.title}
              description={item?.description}
              point={item?.point}
              image={item?.image}
              onClick={() => handleClick({ item })}
            />
          ))}
        </div>
      )}
    </>
  );
}
