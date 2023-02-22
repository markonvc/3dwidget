import { axiosProduct, axiosClient } from "./axios/ApiClient";
import { AIRTABLE_BASE_URL, AIRTABLE_CONFIG_BASE_URL } from "../config/Config";
import { log } from "console";

export async function getProductData(id: string, setMetadata: any) {
  let url = null;

  if (!id || id.length === 0) {
    return;
  } else {
    url = AIRTABLE_BASE_URL.replace("DYNAMIC_ID", id);
  }

  try {
    const productData: any = await axiosProduct.get(url);
    console.log(productData.data);
    setMetadata(productData.data);
  } catch (error) {
    console.log(error);
  }
}

export async function getClientData(record: any, setConfig: any) {
  let url = "";
  if (record["ClientsName"]) {
    if (record["ClientsName"].length > 0) {
      url = AIRTABLE_CONFIG_BASE_URL.replace(
        "DYNAMIC_CLIENT",
        record["ClientsName"][0]
      );
    }
  }

  if (url !== "") {
    try {
      const clientData: any = await axiosClient.get(url);
      setConfig(clientData);
    } catch (error) {
      console.log(error);
    }
  }
}
