import { axiosProduct, axiosClient } from "./axios/ApiClient";

export async function getProductData(url: string) {
  try {
    const productData: any = await axiosProduct.get(url);
    return productData;
  } catch (error) {
    console.log(error);
  }
}

export async function getClientData(url: string) {
  try {
    const clientData: any = await axiosClient.get(url);
    return clientData;
  } catch (error) {
    console.log(error);
  }
}
