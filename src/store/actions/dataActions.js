import {
  LOADING_DATA,
  LOADING_DATA_ERROR,
  LOADING_DATA_SUCCESS,
} from "../types/dataTypes";

export const dataLoadingStarted = () => ({
  type: LOADING_DATA,
});

export const dataLoadingSuccess = (data) => ({
  type: LOADING_DATA_SUCCESS,
  payload: data,
});

export const dataLoadingError = (error) => ({
  type: LOADING_DATA_ERROR,
  payload: error,
});
