import { createContext, useContext, useState, useEffect } from 'react';

const Context = createContext();

const Provider = ({ children }) => {
  const [actions, setActions] = useState();

  const [login, setLogin] = useState(false);

  const [totalPoint, setTotalPoint] = useState(0);
  const [myPoint, setMyPoint] = useState([]);

  const [earnMode, setEarnMode] = useState();
  const [actionView, setActionView] = useState(false);

  const [complete, setComplete] = useState(false);

  useEffect(() => {
    var total = myPoint.reduce((accum, item) => accum + item.point, 0);
    setTotalPoint(total);
  }, [myPoint]);

  const data = {
    login,
    setLogin,
    actions,
    setActions,
    totalPoint,
    setTotalPoint,
    earnMode,
    setEarnMode,
    actionView,
    setActionView,
    myPoint,
    setMyPoint,
    complete,
    setComplete,
  };

  return <Context.Provider value={data}>{children}</Context.Provider>;
};
export const useAll = () => useContext(Context);
export default Provider;
