import React, { useEffect, useState } from "react";
import { AgGridColumn, AgGridReact } from "ag-grid-react";
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import { CircularProgress, DialogContent, Link, Modal, TextField } from "@mui/material";
import { ILaunch } from "../store/launchesTypes";
import { useDispatch, useSelector } from "react-redux";
import { FilterLaunches, GetLaunches } from "../store/launchesActions";
import { RootStore } from "../store/store";
import LaunchDetails from "./LaunchDetails";
import styled from "styled-components";

const LaunchesList = () => {
    const { filteredLaunches, loading } = useSelector((state: RootStore) => state.launches);
    const [activeLaunch, setActiveLaunch] = useState<ILaunch | undefined>(undefined);
    const [openModal, setOpenModal] = React.useState(false);
    const handleClose = () => setOpenModal(false);
    const ref = React.createRef();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(GetLaunches());
    }, []);

    const filterLaunches = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        dispatch(FilterLaunches(value))
    };

    function linkRenderer(props: any) {
        return (
            <span>
                <Link onClick={() => {
                    setActiveLaunch(props.data);
                    setOpenModal(true);
                }}>
                    View rocket details
                </Link>
            </span>
        );
    };

    return (
        <LaunchesListWrapper className="ag-theme-alpine">
            <SearchField
                label="Search mission"
                onChange={filterLaunches}
            />
            {loading &&
                <Loader>
                    <CircularProgress />
                </Loader>
            }
            {filteredLaunches && <AgGridReact
                defaultColDef={{
                    flex: 1,
                    sortable: true
                }}
                rowData={filteredLaunches}
                frameworkComponents={{
                    cellWithLinkRenderer: linkRenderer,
                }}
            >
                <AgGridColumn headerName="Flight number" field="flight_number" cellStyle={{ textAlign: "left" }} />
                <AgGridColumn headerName="Mission name" field="mission_name" cellStyle={{ textAlign: "left" }} />
                <AgGridColumn headerName="Date" field="launch_date_local" cellStyle={{ textAlign: "left" }} />
                <AgGridColumn
                    headerName="Details"
                    field="flight_number"
                    cellStyle={{ textAlign: "left" }}
                    cellRenderer="cellWithLinkRenderer"
                />
            </AgGridReact>}
            {activeLaunch && <Modal
                open={openModal}
                onClose={handleClose}
            >
                <DialogContent>
                    <LaunchDetails launch={activeLaunch} ref={ref} />
                </DialogContent>
            </Modal>}
        </LaunchesListWrapper>
    )
}

export const LaunchesListWrapper = styled.div`
    width: 100%;
    height: 500px;
    padding: 30px 0 60px;

    @media (max-width: 767px) {
        padding: 0 0 30px;
        height: 400px;
    }
`;

export const Loader = styled.div`
    margin: 30px 0 60px;
`;

export const SearchField = styled(TextField)`
    width: 40%;
    color: #282c34;
    border-radius: 4px;
    margin-bottom: 20px;

    @media (max-width: 767px) {
        width: 100%;
    }
`;

export default LaunchesList;


