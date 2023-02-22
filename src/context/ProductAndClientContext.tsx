import React, {
  createContext,
  useState,
  useEffect,
  FC,
  ReactNode,
  ReactElement,
} from "react";
import { getProductData, getClientData } from "../services/AirtableApi";

interface IProductClient {
  record: any;
  config: any;
  setId: React.Dispatch<React.SetStateAction<string>>;
  setMetadata: React.Dispatch<React.SetStateAction<string>>;
}

export const ProductClientContext = createContext<IProductClient>(
  {} as IProductClient
);

interface IProductClientContextProps {
  children: React.ReactNode;
}

export const ProductClientProvider: FC<IProductClientContextProps> = (
  props
) => {
  const [id, setId] = useState<string>("");
  const [metadata, setMetadata] = useState<any>(null);
  const [record, setRecord] = useState<any>({});
  const [config, setConfig] = useState<any>({});

  useEffect(() => {
    if (metadata?.records) {
      console.log(metadata);

      if (metadata.records[0]["fields"]) {
        setRecord(metadata.records[0]["fields"]);
      }
    }
  }, [metadata]);

  useEffect(() => {
    if (record.Name) {
      getClientData(record?.ClientsName[0], setConfig);
    }
  }, [record]);

  useEffect(() => {
    if (id === "") return;
    console.log(id);

    let location = window.location;
    let urlParams;
    let productId;

    location.href.includes("get-plop")
      ? (urlParams = window.location.search)
      : (urlParams = undefined);

    urlParams && urlParams.length === 5
      ? (productId = urlParams.slice(1, 5))
      : urlParams && urlParams.length === 4
      ? (productId = urlParams.slice(1, 4))
      : urlParams && urlParams.length === 3
      ? (productId = urlParams.slice(1, 3))
      : urlParams && urlParams.length === 2
      ? (productId = urlParams.slice(1, 2))
      : (productId = undefined);
    productId
      ? getProductData(productId, setMetadata)
      : getProductData(id, setMetadata);
  }, [id]);

  const productClientContextValue = {
    record,
    config,
    setId,
    setMetadata,
  };

  return (
    <ProductClientContext.Provider value={productClientContextValue}>
      {props.children}
    </ProductClientContext.Provider>
  );
};
