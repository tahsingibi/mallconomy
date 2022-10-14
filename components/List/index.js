import style from './list.module.scss';
import { useAll } from '../Context';
import { useEffect } from 'react';
import ListItem from '../ListItem';
import ActionView from '../ActionView';

export default function List() {
  const {
    earnMode,
    setEarnMode,
    setActionview,
    actionview,
    actions,
    setActions,
  } = useAll();

  async function getData() {
    const res = await fetch('https://tahsinbey.com/mallconomy/actions.json');
    const data = await res.json();
    setActions(data);
  }

  useEffect(() => {
    getData();
  }, []);

  const handleClick = ({ item }) => {
    setActionview(true);
    setEarnMode(item);
  };

  return (
    <>
      {!actionview ? (
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
      ) : (
        <ActionView earnMode={earnMode} />
      )}
    </>
  );
}
