import { Action } from "@ngrx/store";
import { Iproduct } from "../models/models";
export enum EProducts {
  SetProducts = "[Products] SetProducts",
  GetProducts = "[Products] GetProducts",
  AddProdut = "[Products] AddProduts"
}

export class SetProducts implements Action {
  readonly type = EProducts.SetProducts;
  constructor(public payload: Iproduct[]) {}
}

export class GetProducts implements Action {
  readonly type = EProducts.GetProducts;
  constructor(public payload: Iproduct[]) {}
}

export class AddProduts implements Action {
  readonly type = EProducts.AddProdut;
  constructor(public payload: Iproduct[]) {}
}

export type ProductActions = SetProducts | GetProducts | AddProduts;
