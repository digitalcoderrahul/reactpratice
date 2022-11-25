import React, { useEffect, useState, createContext } from "react";
import ContextfunB from "./ContextfunB";
import ContextfunC from "./ContextfunC";
export const GlobalInfo = createContext();
const ContextfunA = () => {
  const [name, setName] = useState("Ram");
  const [count, setCount] = useState(0);

  const getday = () => {
    setCount(count + 1);
  };

  useEffect(() => {
    if (count < 0) {
      setName("Rajesh");
    } else if (count > 5) {
      setName("Raman");
    }
  }, [count]);

  const oneday = () => {
    setCount(count - 1);
  };

  const newDay = (item) => {
    setName(item);
  };

  return (
    <>
      <GlobalInfo.Provider
        value={{
          count: count,
          getday: getday,
          name: name,
          oneday: oneday,
          newDay: newDay,
        }}
      >
        <ContextfunB />
        <ContextfunC />
      </GlobalInfo.Provider>
    </>
  );
};

export default ContextfunA;
