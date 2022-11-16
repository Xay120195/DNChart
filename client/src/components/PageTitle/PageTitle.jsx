import React from "react";
import Table from 'react-bootstrap/Table';
import elipse from '../../assets/images/v-elipse.svg';
import plus from '../../assets/images/plus.svg';
import Dropdown from 'react-bootstrap/Dropdown';
import "./style.css";

const PageTitle = (props) => {

    return (
        <>
            <div className="page-title-wrapper">
                <div className="page-title-left">
                    <h3>{props.title}</h3>
                    <p>{props.subtitle}</p>
                </div>
                <div className="page-title-right">
                    <p>{props.date}</p>
                </div>
            </div>
        </>
    )

}

export default PageTitle;