import faker from "faker";
import { ILaunch } from "../store/launchesTypes";

export const CreateLaunch = (): ILaunch[] => ([{
    "flight_number": faker.datatype.number(),
    "mission_name": faker.datatype.string(),
    "mission_id": [],
    "upcoming": faker.datatype.boolean(),
    "launch_year": faker.datatype.string(),
    "launch_date_unix": faker.datatype.number(),
    "launch_date_utc": faker.datatype.string(),
    "launch_date_local": faker.datatype.string(),
    "is_tentative": faker.datatype.boolean(),
    "tentative_max_precision": faker.datatype.string(),
    "tbd": faker.datatype.boolean(),
    "launch_window": faker.datatype.number(),
    "rocket": {
        "rocket_id": faker.datatype.string(),
        "rocket_name": faker.datatype.string(),
        "rocket_type": faker.datatype.string(),
        "first_stage": {
            "cores": []
        },
        "second_stage": {
            "block": faker.datatype.number(),
            "payloads": []
        },
        "fairings": {
            "reused": faker.datatype.boolean(),
            "recovery_attempt": faker.datatype.boolean(),
            "recovered": faker.datatype.boolean(),
            "ship": null
        }
    },
    "ships": [],
    "telemetry": {
        "flight_club": faker.datatype.string()
    },
    "launch_site": {
        "site_id": faker.datatype.string(),
        "site_name": faker.datatype.string(),
        "site_name_long": faker.datatype.string()
    },
    "launch_success": faker.datatype.boolean(),
    "launch_failure_details": {
        "time": faker.datatype.number(),
        "altitude": faker.datatype.string(),
        "reason": faker.datatype.string()
    },
    "links": {
        "mission_patch": faker.datatype.string(),
        "mission_patch_small": faker.datatype.string(),
        "reddit_campaign": faker.datatype.string(),
        "reddit_launch": faker.datatype.string(),
        "reddit_recovery": faker.datatype.string(),
        "reddit_media": faker.datatype.string(),
        "presskit": faker.datatype.string(),
        "article_link": faker.datatype.string(),
        "wikipedia": faker.datatype.string(),
        "video_link": faker.datatype.string(),
        "youtube_id": faker.datatype.string(),
        "flickr_images": []
    },
    "details": faker.datatype.string(),
    "static_fire_date_utc": faker.datatype.string(),
    "static_fire_date_unix": faker.datatype.number(),
    "timeline": {
        "webcast_liftoff": faker.datatype.number()
    }
}]);