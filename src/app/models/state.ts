import { Iproduct } from "./models";

export interface LoaderState {
    loading: boolean;
  }
  export interface ProductState {
    products: Iproduct[];
  }