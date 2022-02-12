import {
  ActionReducerMap,
  MetaReducer,
  createFeatureSelector,
  createSelector
} from "@ngrx/store";

import { environment } from "../environments/environment";
import { LoaderState, ProductState } from "./models/state";
import * as fromLoader from "./reducers/loader.reducer";
import * as fromProducts from "./reducers/products.reducers";

export interface AppState {
  loader: LoaderState;
  allProducts: ProductState;
}

export const reducers: ActionReducerMap<AppState> = {
  loader: fromLoader.LoadingReducer,
  allProducts: fromProducts.ProductReducer
};

export const metaReducers: MetaReducer<AppState>[] = !environment.production
  ? []
  : [];

export const getAllProductState = createFeatureSelector<
  ProductState
>("allProducts");
export const getAllProducts = createSelector(
  getAllProductState,
  fromProducts.selectProducts
);

export const getLoaderState = createFeatureSelector<LoaderState>("loader");
export const getLoader = createSelector(
  getLoaderState,
  fromLoader.getLoaderStatus
);
