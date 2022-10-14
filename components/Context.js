import { createContext, useContext, useState, useEffect } from 'react';

const Context = createContext();

const Provider = ({ children }) => {
  const [actions, setActions] = useState();

  const initialLogin = false;
  const [login, setLogin] = useState(initialLogin);

  const [totalPoint, setTotalPoint] = useState(0);
  const [mypoint, setMypoint] = useState([]);

  const [earnMode, setEarnMode] = useState();
  const [actionview, setActionview] = useState(false);

  const [complete, setComplete] = useState(false);

  useEffect(() => {
    var total = mypoint.reduce((accum, item) => accum + item.point, 0);
    setTotalPoint(total);
  }, [mypoint]);

  const data = {
    login,
    setLogin,
    actions,
    setActions,
    totalPoint,
    setTotalPoint,
    earnMode,
    setEarnMode,
    actionview,
    setActionview,
    mypoint,
    setMypoint,
    complete,
    setComplete,
  };

  return <Context.Provider value={data}>{children}</Context.Provider>;
};
export const useAll = () => useContext(Context);
export default Provider;
