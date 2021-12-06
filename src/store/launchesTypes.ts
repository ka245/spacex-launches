import { FILTER_LAUNCHES, GET_LAUNCHES_FAIL, GET_LAUNCHES_LOADING, GET_LAUNCHES_SUCCESS } from "./launchesActions";

export interface ILaunch {
    flight_number: number,
    mission_name: string,
    mission_id: [],
    upcoming: boolean,
    launch_year: string,
    launch_date_unix: number,
    launch_date_utc: string,
    launch_date_local: string,
    is_tentative: boolean,
    tentative_max_precision: string,
    tbd: boolean,
    launch_window: number,
    rocket: {
        rocket_id: string,
        rocket_name: string,
        rocket_type: string,
        first_stage: {
            cores: []
        },
        second_stage: {
            block: number,
            payloads: []
        },
        fairings: {
            reused: boolean,
            recovery_attempt: boolean,
            recovered: boolean,
            ship: null
        }
    },
    ships: [],
    telemetry: {
        flight_club: string
    },
    launch_site: {
        site_id: string,
        site_name: string,
        site_name_long: string
    },
    launch_success: boolean,
    launch_failure_details: {
        time: number,
        altitude: string,
        reason: string
    },
    links: {
        mission_patch: string,
        mission_patch_small: string,
        reddit_campaign: string,
        reddit_launch: string,
        reddit_recovery: string,
        reddit_media: string,
        presskit: string,
        article_link: string,
        wikipedia: string,
        video_link: string,
        youtube_id: string,
        flickr_images: []
    },
    details: string,
    static_fire_date_utc: string,
    static_fire_date_unix: number,
    timeline: {
        webcast_liftoff: number
    }
};

export interface IError {
    message: string;
}

interface ILaunchesLoading {
    type: typeof GET_LAUNCHES_LOADING;
}


interface ILaunchesSuccess {
    type: typeof GET_LAUNCHES_SUCCESS;
    launches: ILaunch[];
}


interface ILaunchesFail {
    type: typeof GET_LAUNCHES_FAIL;
    error: IError;
}

export interface IFilterLaunches {
    type: typeof FILTER_LAUNCHES,
    value: string
}

export type DispatchTypes = ILaunchesLoading | ILaunchesFail | ILaunchesSuccess | IFilterLaunches;