import { Dispatch } from "redux";
import { ILaunch } from "./launchesTypes";

export const GET_LAUNCHES_LOADING = "GET_LAUNCHES_LOADING";
export const GET_LAUNCHES_FAIL = "GET_LAUNCHES_FAIL";
export const GET_LAUNCHES_SUCCESS = "GET_LAUNCHES_SUCCESS";
export const FILTER_LAUNCHES = "FILTER_LAUNCHES";

export const getLaunchesLoading = () => ({
  type: GET_LAUNCHES_LOADING
});

export const getLaunchesSuccess = (launches: ILaunch[]) => ({
  type: GET_LAUNCHES_SUCCESS,
  launches
});

export const getLaunchesFail = (error: any) => ({
  type: GET_LAUNCHES_FAIL,
  error
});

export function GetLaunches() {
  return (dispatch: Dispatch) => {
    dispatch(getLaunchesLoading());

    return (
      fetch("https://api.spacexdata.com/v3/launches?limit=50")
        .then(res =>
          res.json().then(json => {
            dispatch(getLaunchesSuccess(json));
          })
        )
        .catch(error => dispatch(getLaunchesFail(error)))
    );
  };
}

export const FilterLaunches = (value: string) => (dispatch: Dispatch) => {
  dispatch({
    type: FILTER_LAUNCHES,
    value
  })
};