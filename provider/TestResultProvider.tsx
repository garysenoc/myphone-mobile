import React, {createContext, useContext, useReducer} from 'react';
type TTestResult = {
  deviceInfo: {
    manufacturer: String;
    product: String;
  };
};

const defaultValue = {
  deviceInfo: {
    manufacturer: '',
    product: '',
  },
};

export enum DispatchType {
  DEVICE_INFO = 'deviceInfo',
}

const reducer = (
  state: TTestResult,
  action: {type: DispatchType; payload: any},
) => {
  switch (action.type) {
    case DispatchType.DEVICE_INFO:
      const {manufacturer, product} = action.payload;
      return {...state, deviceInfo: {manufacturer, product}};
    default:
      throw new Error();
  }
};

export const TestResult = createContext<{
  state: TTestResult;
  dispatch: React.Dispatch<{
    type: DispatchType;
    payload: any;
  }>;
} | null>(null);

export const useTestResult = () => useContext(TestResult)!;

interface Props {
  children: React.ReactNode;
}

const TestResultProvider: React.FC<Props> = ({children}) => {
  const [state, dispatch] = useReducer(reducer, defaultValue);

  return (
    <TestResult.Provider value={{state, dispatch}}>
      {children}
    </TestResult.Provider>
  );
};

export default TestResultProvider;
