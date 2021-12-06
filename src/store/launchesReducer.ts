import { FILTER_LAUNCHES, GET_LAUNCHES_FAIL, GET_LAUNCHES_LOADING, GET_LAUNCHES_SUCCESS } from "./launchesActions";
import {
    DispatchTypes,
    ILaunch,
    IError
} from "./launchesTypes";

export interface ILaunchesState {
    loading: boolean,
    launches?: ILaunch[],
    filteredLaunches?: ILaunch[]
    error: IError;
}

const initialtState: ILaunchesState = {
    launches: [],
    filteredLaunches: [],
    loading: true,
    error: { message: "" }
};

export default function launchesReducer(
    state = initialtState,
    action: DispatchTypes
) {
    switch (action.type) {
        case GET_LAUNCHES_LOADING:
            return {
                ...state,
                loading: true,
                error: null
            };
        case GET_LAUNCHES_SUCCESS:
            return {
                ...state,
                loading: false,
                launches: action.launches,
                filteredLaunches: action.launches
            };
        case GET_LAUNCHES_FAIL:
            return {
                ...state,
                loading: false,
                error: action.error,
                launches: []
            };
        case FILTER_LAUNCHES: {
            const { value } = action;
            return {
                ...state,
                loading: false,
                launches: state.launches,
                filteredLaunches: value
                    ? state.launches?.filter(
                        launch =>
                            launch.mission_name.toLowerCase().includes(value.toLowerCase())
                    )
                    : state.launches
            };
        }
        default:
            return state;
    }
}