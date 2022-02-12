
   
import { ShowSpinner, HideSpinner } from "../actions/loader.action";
import { createReducer, on, Action } from '@ngrx/store';
import { LoaderState } from "../models/state";



const initialState: LoaderState = {
  loading: false
};

const reducer = createReducer(
  initialState,
  on(ShowSpinner, (state) => ({ ...state, loading: true })),
  on(HideSpinner, (state) => ({ ...state, loading: false }))
);

export function LoadingReducer(
  state: LoaderState | undefined,
  action: Action
): LoaderState {
  return reducer(state, action);
}

export const getLoaderState = (state: LoaderState) => state;
export const getLoaderStatus = (state: LoaderState) => state.loading;
