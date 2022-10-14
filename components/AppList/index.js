import style from './applist.module.scss';
import { useAll } from '../Context';
import { useState, useEffect } from 'react';
import ListItem from '../ListItem';
import ActionView from '../ActionView';

// import actions from '../actions.json';

export default function AppList() {
  const {
    earnMode,
    setEarnMode,
    setActionview,
    actionview,
    actions,
    setActions,
  } = useAll();

  async function getData() {
    const res = await fetch('https://cdn.mallconomy.com/testcase/actions.json', {mode:'no-cors'});
    // const data = await res.json();
    console.table(res);
  }
  useEffect(() => {
    getData();
  }, []);

  {/* verilen actions.json api linkine istek atıldığında dönen veri 'opaque' formatında döndüğü ve bunu yalnızca 'justcors.com' üzerinden aşabildiğimiz için link ile gönderilen veriyi local değişken üzerinden çektim.*/ }

  const handleClick = ({ item }) => {
    setActionview(true);
    setEarnMode(item);
  };

  return (
    <>
      {!actionview ? (
        <div className={style.AppList}>
          <h4 className={style.ListTitle}>Actions to be completed</h4>
          {/* {actions?.map((item) => (
            <ListItem
              key={item.id}
              title={item.title}
              description={item.description}
              point={item.point}
              image={item.image}
              onClick={() => handleClick({ item })}
            />
          ))} */}
        </div>
      ) : (
        <ActionView earnMode={earnMode} />
      )}
    </>
  );
}
