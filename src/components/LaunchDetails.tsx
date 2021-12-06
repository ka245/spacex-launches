import React from "react";
import { Avatar, Box, Stack, Typography } from "@mui/material";
import { ILaunch } from "../store/launchesTypes";
import styled from "styled-components";

interface ILaunchDetails {
    launch: ILaunch;
}

const LaunchDetails = React.forwardRef((props: ILaunchDetails, ref) => {
    const launch = props.launch;

    return (
        <Box ref={ref}>
            <ModalWrapper>
                <Stack direction="row" alignItems="center" spacing={2}>
                    <Avatar
                        src={launch.links.mission_patch}
                        sx={{ width: 100, height: 100 }}
                    />
                    <div>
                        <Typography variant="h4">
                            {launch.mission_name}
                        </Typography>
                        <Typography variant="subtitle1">{launch.launch_date_local}</Typography>
                    </div>
                </Stack>
                <Typography sx={{ mt: 2 }}>
                    Details: <br />
                    {launch.details ? launch.details : "Not available"}
                </Typography>
            </ModalWrapper>
        </Box>
    )
})

export const ModalWrapper = styled.div`
    background-color: #ffffff;
    max-width: 700px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 80%;
    border-radius: 6px;
    padding: 40px;
`;

export default LaunchDetails;


