import React from "react";

import filter from '../../assets/images/filter.svg';
import trendUp from '../../assets/images/trend-up.svg';
import download from '../../assets/images/download.svg';

import HighVolumeOptionsTable from "./HighVolumeOptionsTable"
import MostActiveStockOptionsTable from "./MostActiveStockOptionsTable"

import "./style.css";

export const TableContext = React.createContext();

const TableComponent = (props) => {

    let offset = 1;
    const [totalRows, setTotalRows] = React.useState(0);

    let optiontype = props.option;

    let tableComponent = <></>;

    let pageSize = 0;

    if( optiontype == "highvolume") {
        pageSize = 100;
        tableComponent = <HighVolumeOptionsTable pageSize={pageSize} offset={offset} />;
    } else if( optiontype == "marketoverview") {
        pageSize = 100;
        tableComponent = <HighVolumeOptionsTable pageSize={pageSize} offset={offset} order={"openinterest"}/>;
    } else if( optiontype) {

    } else {
        pageSize = 20;
        tableComponent = <MostActiveStockOptionsTable pageSize={pageSize} offset={offset} />;
    }

    return (
        <>
            <div className="checkbox-group">
                <div className="form-check me-4">
                    <input className="form-check-input" type="checkbox" value="" id="Mid-Day" />
                    <label className="form-check-label" for="Mid-Day">
                        Mid-Day Report
                    </label>
                </div>

                <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" id="End-of-Day" />
                    <label className="form-check-label" for="End-of-Day">
                        End-of-Day Email
                    </label>
                </div>
            </div>
            <div className="tabs-wrapper">
                <div className="tabs">
                    <a href=""> Stocks </a>
                </div>

                <div className="tabs">
                    <a href="">  ETFs  </a>
                </div>

                <div className="tabs">
                    <a href="">  Indices  </a>
                </div>
            </div>
            <div className="table-filter-wrapper">
                <div className="table-filter-right">
                    <select name="viewName" className="form_control">
                        <option value="main">Main View </option>
                        <option value="technical">Technical </option>
                        <option value="performance">Performance </option>
                        <option value="custom_create_view">Custom</option>
                    </select>
                </div>
                <div className="table-filter-left">
                    <a href=""> <img src={filter} alt="" /> Screen</a>
                    <a href=""><img src={trendUp} alt="" /> Flipcharts</a>
                    <a href=""><img src={download} alt="" /> Download</a>
                </div>

            </div>
            <TableContext.Provider value={[totalRows, setTotalRows]}>
                {tableComponent}
            </TableContext.Provider>

            <div className="load-more-data">
                <p className="me-2">Showing {offset}-{offset + pageSize - 1} of {totalRows}</p>
                <button className="btn btn-outline">Show All</button>
            </div>
        </>
    )

}

export default TableComponent;