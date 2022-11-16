import React, {useContext} from "react";
import Table from 'react-bootstrap/Table';
import axios from "axios";

import {TableContext} from './Table';

import elipse from '../../assets/images/v-elipse.svg';
import Dropdown from 'react-bootstrap/Dropdown';
import ModalComponent from "../Modal/Modal";

import NumUtil from "../../utils/numutils";

const MostActiveStockOptionsTable = (props) => {

    const [rows, setRows] = React.useState([]);
    const [totalRows, setTotalRows] = useContext(TableContext);

    let apiurl = "http://localhost:8081/loadSummary?limit=" + props.pageSize + "&offset=" + props.offset;

    React.useEffect(() => {

        async function loadSummary() {
            
            const res = await axios.get(apiurl);
            
            setTotalRows(res.data.totalCount);
            setRows( sum => res.data.data);
        }
        loadSummary();
    }, []);

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
                    <th>Name</th>
                    <th>Last</th>
                    <th>Change</th>
                    <th>%Chg</th>
                    <th>IV Rank</th>
                    <th>Options Vol</th>
                    <th>% Put</th>
                    <th>% Call</th>
                    <th>Put/Call Vol</th>
                    <th>Time</th>
                    <th>Links</th>
                </tr>
            </thead>

            <tbody>

            { rows.map( (row) => {

                return (
                    <tr>
                        <td><ModalComponent /></td>
                        <td>{row.symbol}</td>
                        <td>{row.companyname}</td>
                        <td>{NumUtil.decimal(row.stocklastprice, 2)}</td>
                        <td>{NumUtil.decimal(row.stockchangeprice, 2)}</td>
                        <td>{NumUtil.decimal(row.stockpercchange*100, 1)}%</td>
                        <td>{NumUtil.decimal(row.ivrankoneyear*100, 1)}%</td>
                        <td>{NumUtil.formattedNumber(row.stockvolume)}</td>
                        <td>{NumUtil.decimal(row.percputvolume*100, 1)}%</td>
                        <td>{NumUtil.decimal(row.perccallvolume*100, 1)}%</td>
                        <td>{NumUtil.decimal(row.putcallratio, 2)}</td>
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

export default MostActiveStockOptionsTable;