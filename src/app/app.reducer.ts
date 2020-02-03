import {
  ActionReducerMap,
  MetaReducer,
  createFeatureSelector,
  createSelector
} from "@ngrx/store";

import { environment } from "../environments/environment";
import * as fromLoader from "./reducers/loader.reducer";
import * as fromProducts from "./reducers/products.reducers";

export interface AppState {
  loader: fromLoader.State;
  allProducts: fromProducts.ProductState;
}

export const reducers: ActionReducerMap<AppState> = {
  loader: fromLoader.LoadingReducer,
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

export const getLoaderState = createFeatureSelector<fromLoader.State>("loader");
export const getLoader = createSelector(
  getLoaderState,
  fromLoader.getLoaderStatus
);
