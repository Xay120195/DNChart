import React from "react";
import Table from 'react-bootstrap/Table';
import axios from "axios";

import {TableContext} from './Table';

import elipse from '../../assets/images/v-elipse.svg';
import Dropdown from 'react-bootstrap/Dropdown';
import ModalComponent from "../Modal/Modal";

import NumUtil from "../../utils/numutils";

const HighVolumeOptionsTable = (props) => {

    const [rows, setRows] = React.useState([]);
    const [, setTotalRows] = React.useContext(TableContext);

    let apiurl = "http://localhost:8081/loadDetails?date='2022-08-24'&limit=" + props.pageSize + "&offset=" + props.offset + "&order=" + (props.order || "volume");

    React.useEffect(() => {

        async function loadSummary() {
            
            const res = await axios.get(apiurl);
            
            setTotalRows(res.data.totalCount);
            setRows( sum => res.data.data);
        }
        loadSummary();
    }, [props]);

    let dropDownComponent = (
        <>
        <Dropdown className="table-link-dropdown" drop="start">
            <Dropdown.Toggle variant="default">
                <img src={elipse} alt="" />
            </Dropdown.Toggle>
            <Dropdown.Menu>
                <ul className="table-list-item">
                    <li>
                        <a href="">More Data</a>
                    </li>

                    <li>
                        <a href="">More Data</a>
                    </li>

                    <li>
                        <a href="">More Data</a>
                    </li>

                    <li>
                        <a href="">More Data</a>
                    </li>

                    <li>
                        <a href="">More Data</a>
                    </li>
                    <li>
                        <a href="">More Data</a>
                    </li>

                    <li>
                        <a href="">More Data</a>
                    </li>

                    <li>
                        <a href="">More Data</a>
                    </li>
                </ul>
            </Dropdown.Menu>
        </Dropdown>
        </>
    );

    return (

        <Table striped bordered hover className="custom_table" responsive="md">

            <thead>
                <tr>
                    <th></th>
                    <th>Symbol</th>
                    <th>Price</th>
                    <th>Type</th>
                    <th>Strike</th>
                    <th>Expiration</th>
                    <th>DTE</th>
                    <th>Bid</th>
                    <th>Ask</th>
                    <th>Last</th>
                    <th>Volume</th>
                    <th>OpenInt</th>
                    <th>VolOI</th>
                    <th>IV</th>
                    <th>Delta</th>
                    <th>QuoteDate</th>
                    <th>Links</th>
                </tr>
            </thead>

            <tbody>

            {rows.map( (row) => {

                return (
                    <tr>
                        <td><ModalComponent /></td>
                        <td>{row.symbol}</td>
                        <td>{NumUtil.decimal(row.price, 2)}</td>
                        <td>{row.type}</td>
                        <td>{NumUtil.decimal(row.strike, 2)}</td>
                        <td>{NumUtil.reformat(row.expiration)}</td>
                        <td>{NumUtil.decimal(row.dte, 0)}</td>
                        <td>{NumUtil.decimal(row.bid, 2)}</td>
                        <td>{NumUtil.decimal(row.ask, 2)}</td>
                        <td>{NumUtil.decimal(row.last, 2)}</td>
                        <td>{NumUtil.formattedNumber(row.volume)}</td>
                        <td>{NumUtil.formattedNumber(row.openint)}</td>
                        <td>{NumUtil.decimal(row.voloi, 2)}%</td>
                        <td>{NumUtil.decimal(row.iv, 1)}%</td>
                        <td>{row.delta}</td>
                        <td>{NumUtil.reformat(row.quotedate)}</td>
                        <td>
                            {dropDownComponent}
                        </td>
                    </tr>
                    )
            })}

            </tbody>
        </Table>
    );

};

export default HighVolumeOptionsTable;