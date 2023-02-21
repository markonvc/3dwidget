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
  getProduct: () => void;
}

export const ProductClientContext = createContext<IProductClient>(
  {} as IProductClient
);

export const ProductClientProvider = (children: any) => {
  const [id, setId] = useState<string>("");
  const [metadata, setMetadata] = useState<any>(null);
  const [record, setRecord] = useState<any>(null);
  const [config, setConfig] = useState<any>(null);

  useEffect(() => {
    if (metadata?.records.length > 0) {
      if (metadata.records[0]["fields"]) {
        setRecord(metadata.records[0]["fields"]);
      }
    }
  }, [metadata]);

  useEffect(() => {
    if (record) {
      setConfig(getClientData(record?.ClientsName[0]));
    }
  }, [record]);

  const getProduct = () => {
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
      ? setMetadata(getProductData(productId))
      : setMetadata(getProductData(id));
  };

  const productClientContextValue = {
    record,
    config,
    setId,
    getProduct,
  };

  return (
    <ProductClientContext.Provider value={productClientContextValue}>
      {children}
    </ProductClientContext.Provider>
  );
};
