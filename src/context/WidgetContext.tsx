import React, { createContext, useState, FC } from "react";

interface IWidget {
  showWidget: boolean;
  setShowWidget: React.Dispatch<React.SetStateAction<boolean>>;
}

export const WidgetContext = createContext<IWidget>({} as IWidget);

interface IWidgetContextProps {
  children: React.ReactNode;
}

export const WidgetContextProvider: FC<IWidgetContextProps> = (props) => {
  const [showWidget, setShowWidget] = useState<boolean>(false);

  const WidgetContextValue = {
    showWidget,
    setShowWidget,
  };

  return (
    <WidgetContext.Provider value={WidgetContextValue}>
      {props.children}
    </WidgetContext.Provider>
  );
};
