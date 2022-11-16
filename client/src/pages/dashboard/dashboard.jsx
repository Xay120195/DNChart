import React, { useEffect} from "react";
import { useParams} from "react-router-dom";

import MenuComponent from "../../components/Menu/Menu";
import FooterComponent from "../../components/Footer/Footer";
import SideBarComponent from "../../components/SideBar/SideBar";
import TableComponent from "../../components/Table/Table";
import PageTitle from "../../components/PageTitle/PageTitle";
import preLogo from '../../assets/images/pre.logo.svg';


const Dashboard = ({name}) => {

    const params = useParams();

    let titleComponent;
    let tableComponent = <>No Table</>;

    if(params.optiontype == "highvolume") {
        titleComponent = (
            <PageTitle title="High Volume Options" 
                subtitle="subtitle." 
                date="Sat, Aug 27th, 2022" />
        );
    } else if (params.optiontype == "marketoverview") {
        titleComponent = (
            <PageTitle title="Options Market Overview" 
                subtitle="subtitle." 
                date="Sat, Aug 27th, 2022" />
        );
    } else if (params.optiontype) {

    } else {
        titleComponent = (
            <PageTitle title="Most Active Stock Options"
                subtitle="Shows Stocks, ETFs and Indices with the most option activity on the day, with IV Rank and Put/Call ratio."
                date="Sat, Aug 27th, 2022" />
        );
    }

    if(params.optiontype) {
        tableComponent = <TableComponent option={params.optiontype}/>;
    } else {
        tableComponent = <TableComponent />;
    }
 
    return (
        <>
            <MenuComponent />
            <div style={{ "height": "100px" }}></div>

            <div className="container">
                <div className="main-container mt-4">
                    <SideBarComponent />
                    <div className="main__containe__inner">
                            {/* <Routes>
                                <Route exact path="/options" element={<PageTitle />} />
                                <Route exact path="/mostactive" element={<p>My Sample Routing</p>}></Route>
                                <Route exact path="/" element={<><PageTitle /><TableComponent /></>} />
                                <Route path="*" element={<p>There's nothing here: 404!</p>} />
                            </Routes> */}

                            {titleComponent}
                            {tableComponent}

                        <div className="pre-wrapper">
                            <div className="prem-left-wrapper">
                                <div className="prem-logo">
                                    <img src={preLogo} alt="" />
                                </div>
                                <p>
                                    <strong>Barchart Premier Members</strong>
                                    can view ALL results, and set custom filters to screen for more
                                    data including advanced strategies for Covered Calls, Naked Puts and Option
                                    Spreads, based on 100s of criteria. <a href="">Sign up for a risk-free 30-day trial today</a>.</p>
                            </div>

                            <div className="prem-right-wrapper">
                                <button className="btn btn-unlock">
                                    Unlock the Entire List
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <FooterComponent />
        </>
    )
}

export default Dashboard