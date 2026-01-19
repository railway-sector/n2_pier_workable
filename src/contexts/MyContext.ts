import { createContext } from "react";

type MyDropdownContextType = {
  contractPackage: any;
  updateContractpackage: any;
  component: any;
  updateComponent: any;
};

const initialState = {
  contractPackage: undefined,
  updateContractpackage: undefined,
  component: undefined,
  updateComponent: undefined,
};

export const MyContext = createContext<MyDropdownContextType>({
  ...initialState,
});
