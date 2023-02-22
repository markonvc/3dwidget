import React, { FC } from "react";

import { ProductClientProvider } from "./ProductAndClientContext";
import { WidgetContextProvider } from "./WidgetContext";

interface IGlobalContextProps {
  children: React.ReactNode;
}

const GlobalContextProvider: FC<IGlobalContextProps> = (props) => {
  return (
    <ProductClientProvider>
      <WidgetContextProvider>{props.children}</WidgetContextProvider>
    </ProductClientProvider>
  );
};

export default GlobalContextProvider;
