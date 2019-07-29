import {
  ActionReducer,
  ActionReducerMap,
  MetaReducer,
  createFeatureSelector,
  createSelector
} from "@ngrx/store";
import { environment } from "../../environments/environment";
import * as fromProducts from "./products.reducers";

export interface AppState {
  allProducts: fromProducts.ProductState;
}

export const reducers: ActionReducerMap<AppState> = {
  allProducts: fromProducts.reducer
};

export const metaReducers: MetaReducer<AppState>[] = !environment.production
  ? []
  : [];

export const getAllProductState = createFeatureSelector<
  fromProducts.ProductState
>("allProducts");
export const getAllProducts = createSelector(
  getAllProductState,
  fromProducts.selectProducts
);
