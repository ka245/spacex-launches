import { getLaunchesFail, getLaunchesLoading, getLaunchesSuccess } from "../store/launchesActions";
import { GET_LAUNCHES_FAIL, GET_LAUNCHES_LOADING, GET_LAUNCHES_SUCCESS } from "../store/launchesActions";
import { CreateLaunch } from "../utils/CreateLaunch";

describe("Tests get launches actions", () => {
  it("Tests getLaunchesLoading", () => {
    const expectedAction = {
      type: GET_LAUNCHES_LOADING
    };
    expect(getLaunchesLoading()).toEqual(expectedAction);
  });

  it("Tests getLaunchesSuccess", () => {
    const launches = CreateLaunch();
    const expectedAction = {
      type: GET_LAUNCHES_SUCCESS,
      launches: launches
    };
    expect(getLaunchesSuccess(launches)).toEqual(expectedAction);
  });

  it("Tests getLaunchesFailure", () => {
    const expectedAction = {
      type: GET_LAUNCHES_FAIL,
      error: {}
    };
    expect(getLaunchesFail({})).toEqual(expectedAction);
  });
});
