import { createContext, useState } from "react";

type StoreProviderProps = {
  children: React.ReactNode;
};

type IStore = {
  id: string;
  name: string;
  phone: string;
  email: string;
  img: string | null;
  tag: string;
};

type StoreContextProps = {
  store: IStore;
  handlePopulateStore: (value: IStore) => void;
};

const initialValues = {
  store: {
    id: "",
    name: "",
    phone: "",
    email: "",
    tag: "",
    img: null,
  },
  handlePopulateStore: (value: IStore) => {},
};

const StoreContext = createContext<StoreContextProps>(initialValues);

const StoreProvider: React.FC<StoreProviderProps> = ({ children }) => {
  const [store, setStore] = useState(initialValues.store);

  const handlePopulateStore = (value: IStore) => {
    setStore(value as typeof initialValues.store);
  };

  return (
    <StoreContext.Provider value={{ store: store, handlePopulateStore }}>
      {children}
    </StoreContext.Provider>
  );
};

export { StoreProvider, StoreContext };
