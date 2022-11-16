import React from "react";
import { Navbar, Offcanvas, Nav, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo.svg'
import search from '../../assets/images/search.svg'
import cross from '../../assets/images/cross.svg'
import Dropdown from 'react-bootstrap/Dropdown';
import { useState } from "react";
import "./style.css";

const MenuComponent = (props) => {
    const expand = "lg";
    const [searchSection, setSearchSection] = useState(false);

    const showSearch = () => {
        setSearchSection(true);
    }

    const hideSearch = () => {
        setSearchSection(false);
    }
    return (
        <>

            <Navbar fixed="top" key={expand} expand={expand} className="mainNavBar">
                <div className="bc-header-premier-ads">
                    <p>Never miss an options trading signal again: unusual options activity screeners
                        and strategies. <a href=""> FREE 30 Day Trial</a>
                    </p>
                </div>
                <Container className="p-0">

                    <Navbar.Brand>
                        <div className="nav-desktop-brand">
                            <img src={logo} alt="" />
                            <div className={searchSection ? "showToggleSearch search-menu-wrapper" : "search-menu-wrapper"}>
                                <div className="search-input">
                                    <input type="text" placeholder="Search for a Symbol..." className="menu-field-element" />
                                </div>
                                <span className="separater">OR</span>
                                <div className="search-select">
                                    <select name="" id="" className="menu-field-element">
                                        <option value="">Select a Commodity</option>  <optgroup label="--Grains and Oilseeds--">  <option value="/futures/quotes/ZW*0/futures-prices">Wheat</option>  <option value="/futures/quotes/ZC*0/futures-prices">Corn</option>  <option value="/futures/quotes/ZS*0/futures-prices">Soybeans</option>  <option value="/futures/quotes/ZM*0/futures-prices">Soybean Meal</option>  <option value="/futures/quotes/ZL*0/futures-prices">Soybean Oil</option>  <option value="/futures/quotes/ZO*0/futures-prices">Oats</option>  <option value="/futures/quotes/ZR*0/futures-prices">Rough Rice</option>  <option value="/futures/quotes/KE*0/futures-prices">Hard Red Wheat</option>  <option value="/futures/quotes/MW*0/futures-prices">Spring Wheat</option>  <option value="/futures/quotes/RS*0/futures-prices">Canola</option>  </optgroup>  <optgroup label="--Energies--">  <option value="/futures/quotes/CL*0/futures-prices">Crude Oil WTI</option>  <option value="/futures/quotes/HO*0/futures-prices">ULSD NY Harbor</option>  <option value="/futures/quotes/RB*0/futures-prices">Gasoline RBOB</option>  <option value="/futures/quotes/NG*0/futures-prices">Natural Gas</option>  <option value="/futures/quotes/QA*0/futures-prices">Crude Oil Brent</option>  <option value="/futures/quotes/FL*0/futures-prices">Ethanol</option>  </optgroup>  <optgroup label="--Metals--">  <option value="/futures/quotes/GC*0/futures-prices">Gold</option>  <option value="/futures/quotes/SI*0/futures-prices">Silver</option>  <option value="/futures/quotes/HG*0/futures-prices">High Grade Copper</option>  <option value="/futures/quotes/PL*0/futures-prices">Platinum</option>  <option value="/futures/quotes/PA*0/futures-prices">Palladium</option>  </optgroup>  <optgroup label="--Livestock and Dairy--">  <option value="/futures/quotes/LE*0/futures-prices">Live Cattle</option>  <option value="/futures/quotes/GF*0/futures-prices">Feeder Cattle</option>  <option value="/futures/quotes/HE*0/futures-prices">Lean Hogs</option>  <option value="/futures/quotes/KM*0/futures-prices">Pork Cutout</option>  <option value="/futures/quotes/DL*0/futures-prices">Class III Milk</option>  <option value="/futures/quotes/DF*0/futures-prices">Nonfat Dry Milk</option>  <option value="/futures/quotes/BD*0/futures-prices">Butter Cash-Settled</option>  <option value="/futures/quotes/BJ*0/futures-prices">Cheese Cash-Settled</option>  </optgroup>  <optgroup label="--Softs--">  <option value="/futures/quotes/CT*0/futures-prices">Cotton #2</option>  <option value="/futures/quotes/OJ*0/futures-prices">Orange Juice</option>  <option value="/futures/quotes/KC*0/futures-prices">Coffee</option>  <option value="/futures/quotes/SB*0/futures-prices">Sugar #11</option>  <option value="/futures/quotes/CC*0/futures-prices">Cocoa</option>  <option value="/futures/quotes/LS*0/futures-prices">Lumber</option>  </optgroup>  <optgroup label="--Indices--">  <option value="/futures/quotes/ES*0/futures-prices">S&amp;P 500 E-Mini</option>  <option value="/futures/quotes/NQ*0/futures-prices">Nasdaq 100 E-Mini</option>  <option value="/futures/quotes/YM*0/futures-prices">Dow Indu E-Mini</option>  <option value="/futures/quotes/QR*0/futures-prices">Russell 2000 E-Mini</option>  <option value="/futures/quotes/EW*0/futures-prices">S&amp;P Midcap E-Mini</option>  <option value="/futures/quotes/VI*0/futures-prices">S&amp;P 500 VIX</option>  <option value="/futures/quotes/GD*0/futures-prices">S&amp;P GSCI</option>  </optgroup>  <optgroup label="--Currencies--">  <option value="/futures/quotes/DX*0/futures-prices">U.S. Dollar Index</option>  <option value="/futures/quotes/BA*0/futures-prices">Bitcoin Micro</option>  <option value="/futures/quotes/TA*0/futures-prices">Ether Micro</option>  <option value="/futures/quotes/B6*0/futures-prices">British Pound</option>  <option value="/futures/quotes/D6*0/futures-prices">Canadian Dollar</option>  <option value="/futures/quotes/J6*0/futures-prices">Japanese Yen</option>  <option value="/futures/quotes/S6*0/futures-prices">Swiss Franc</option>  <option value="/futures/quotes/E6*0/futures-prices">Euro FX</option>  <option value="/futures/quotes/A6*0/futures-prices">Australian Dollar</option>  <option value="/futures/quotes/M6*0/futures-prices">Mexican Peso</option>  <option value="/futures/quotes/N6*0/futures-prices">New Zealand Dollar</option>  <option value="/futures/quotes/T6*0/futures-prices">South African Rand</option>  <option value="/futures/quotes/L6*0/futures-prices">Brazilian Real</option>  <option value="/futures/quotes/R6*0/futures-prices">Russian Ruble</option>  </optgroup>  <optgroup label="--Financials--">  <option value="/futures/quotes/ZB*0/futures-prices">T-Bond</option>  <option value="/futures/quotes/UD*0/futures-prices">Ultra T-Bond</option>  <option value="/futures/quotes/ZN*0/futures-prices">10 Year T-Note</option>  <option value="/futures/quotes/ZF*0/futures-prices">5 Year T-Note</option>  <option value="/futures/quotes/ZT*0/futures-prices">2 Year T-Note</option>  <option value="/futures/quotes/ZQ*0/futures-prices">30 Day Fed Funds</option>  <option value="/futures/quotes/GE*0/futures-prices">Eurodollar</option>  <option value="/futures/quotes/SQ*0/futures-prices">3-Month SOFR</option>  </optgroup>  <optgroup label="--European Energies--">  <option value="/futures/quotes/CB*0/futures-prices">Crude Oil Brent</option>  <option value="/futures/quotes/WI*0/futures-prices">Crude Oil WTI</option>  <option value="/futures/quotes/LF*0/futures-prices">Gas Oil</option>  <option value="/futures/quotes/NF*0/futures-prices">UK Natural Gas</option>  <option value="/futures/quotes/TG*0/futures-prices">Dutch TTF Gas</option>  <option value="/futures/quotes/LG*0/futures-prices">RBOB Blendstock</option>  <option value="/futures/quotes/LO*0/futures-prices">Heating Oil</option>  </optgroup>  <optgroup label="--European Financials--">  <option value="/futures/quotes/GG*0/futures-prices">Euro Bund</option>  <option value="/futures/quotes/HR*0/futures-prices">Euro Bobl</option>  <option value="/futures/quotes/HF*0/futures-prices">Euro Schatz</option>  <option value="/futures/quotes/GX*0/futures-prices">Euro Buxl</option>  <option value="/futures/quotes/FN*0/futures-prices">Euro OAT Long-Term</option>  <option value="/futures/quotes/II*0/futures-prices">Euro BTP Long-Term</option>  <option value="/futures/quotes/CF*0/futures-prices">Eurex Conf Long-Term</option>  <option value="/futures/quotes/IZ*0/futures-prices">Euro Bono Long-Term</option>  <option value="/futures/quotes/G*0/futures-prices">10-Year Long Gilt</option>  <option value="/futures/quotes/IM*0/futures-prices">3-Month EuriBor</option>  <option value="/futures/quotes/L*0/futures-prices">3-Month Sterling</option>  <option value="/futures/quotes/F*0/futures-prices">3-Month Euroswiss</option>  </optgroup>  <optgroup label="--European Grains--">  <option value="/futures/quotes/XR*0/futures-prices">Rapeseed</option>  <option value="/futures/quotes/LW*0/futures-prices">Feed Wheat</option>  <option value="/futures/quotes/ML*0/futures-prices">Milling Wheat</option>  <option value="/futures/quotes/XB*0/futures-prices">Corn</option>  </optgroup>  <optgroup label="--European Indices--">  <option value="/futures/quotes/FX*0/futures-prices">Euro Stoxx 50 Index</option>  <option value="/futures/quotes/X*0/futures-prices">FTSE 100 Index</option>  <option value="/futures/quotes/DY*0/futures-prices">DAX Index</option>  <option value="/futures/quotes/SZ*0/futures-prices">Swiss Market Index</option>  <option value="/futures/quotes/MX*0/futures-prices">CAC 40 Index</option>  <option value="/futures/quotes/AE*0/futures-prices">AEX Index</option>  <option value="/futures/quotes/BE*0/futures-prices">BEL 20</option>  <option value="/futures/quotes/PQ*0/futures-prices">PSI 20</option>  <option value="/futures/quotes/EZ*0/futures-prices">IBEX 35-Mini</option>  <option value="/futures/quotes/OX*0/futures-prices">OMX Swedish Index</option>  <option value="/futures/quotes/DV*0/futures-prices">VSTOXX Mini</option>  </optgroup>  <optgroup label="--European Metals--">  <option value="/futures/quotes/C-*0/futures-prices">Steel Scrap</option>  <option value="/futures/quotes/R-*0/futures-prices">Steel Rebar</option>  </optgroup>  <optgroup label="--European Softs--">  <option value="/futures/quotes/CA*0/futures-prices">Cocoa #7</option>  <option value="/futures/quotes/RM*0/futures-prices">Coffee Robusta 10-T</option>  <option value="/futures/quotes/SW*0/futures-prices">Sugar White #5</option>  </optgroup>
                                    </select>
                                </div>
                            </div>

                            <div className="sec-mini-menu-list">
                                <a href="">Watchlist</a>
                                <span>|</span>
                                <a href="">Portfolio</a>
                                <span>|</span>
                                <a href="">Dashboard</a>

                            </div>
                        </div>
                    </Navbar.Brand>
                    <div>
                        <Nav className="justify-content-end flex-grow-1 pe-3 py-3 menu-wrapper-mobile">
                            <Link to="" className="nav-link bold-yellow">LOGIN</Link>
                            <Link to="" className="nav-button">
                                Try Premier for Free
                            </Link>
                            <div className="nav-bar-toggle">
                                <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
                                Menu
                            </div>
                        </Nav>
                    </div>
                </Container>
                <Container className="p-0">
                    <div className="show-on-mobile">
                        <div className="sec-mini-menu-list">
                            <a href="">Watchlist</a>
                            <span>|</span>
                            <a href="">Portfolio</a>
                            <span>|</span>
                            <a href="">Dashboard</a>
                        </div>
                        <div className="search-icon">
                            {
                                searchSection ?
                                    <button className="search-bar-toggle" onClick={hideSearch}>
                                        <img src={cross} alt="" />
                                    </button> :
                                    <button className="search-bar-toggle" onClick={showSearch}>
                                        <img src={search} alt="" />
                                    </button>
                            }


                        </div>
                    </div>
                </Container>
                <div className="main-listing-menu">
                    <Container className="p-0">
                        <Navbar.Offcanvas
                            id={`offcanvasNavbar-expand-${expand}`}
                            aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                            placement="end"
                            className="w-100"
                        >
                            <Offcanvas.Header>
                                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                                    <div className="cre-buttons">
                                        <button className="btn btn-primary btn-sm me-2">Log In</button>
                                        <button className="btn btn-primary btn-sm">Sign Up</button>
                                    </div>
                                </Offcanvas.Title>

                            </Offcanvas.Header>
                            <Offcanvas.Body>
                                <div className="main-nav">
                                    <div className="main-nav-list">
                                        <Dropdown>
                                            <Dropdown.Toggle variant="default">
                                                Stock
                                            </Dropdown.Toggle>

                                            <Dropdown.Menu>
                                                <div className="mega_menu_internal sector-stocks">
                                                    <div className="mega_menu_internal-inner">
                                                        <div className="menu-row-block">
                                                            <div className="menu-row-block-inner">
                                                                <div className="menu-list-wrapper">
                                                                    <span className="heading">Market Pulse</span>
                                                                    <ul className="menu-list">
                                                                        <li className="menu-row ">   <a target="_self" data-ng-href="/stocks" href="/stocks">Stock Market Overview</a>  </li>
                                                                        <li className="menu-row ">   <a target="_self" data-ng-href="/stocks/momentum" href="/stocks/momentum">Market Momentum</a>  </li>
                                                                        <li className="menu-row ">   <a target="_self" data-ng-href="/stocks/market-performance" href="/stocks/market-performance">Market Performance</a>  </li>
                                                                        <li className="menu-row ">   <a target="_self" data-ng-href="/stocks/top-100-stocks" href="/stocks/top-100-stocks">Top 100 Stocks</a>  </li>
                                                                        <li className="menu-row ">   <a target="_self" data-ng-href="/stocks/price-surprises" href="/stocks/price-surprises">Today's Price Surprises</a>  </li>
                                                                        <li className="menu-row ">   <a target="_self" data-ng-href="/stocks/highs-lows" href="/stocks/highs-lows">New Highs &amp; Lows</a>  </li>
                                                                        <li className="menu-row ">   <a target="_self" data-ng-href="/economy" href="/economy">Economic Overview</a>  </li>
                                                                        <li className="menu-row ">   <a target="_self" data-ng-href="/stocks/earnings-within-7-days" href="/stocks/earnings-within-7-days">Earnings Within 7 Days</a>  </li>
                                                                        <li className="menu-row ">   <a target="_self" data-ng-href="/stocks/earnings-dividends" href="/stocks/earnings-dividends">Earnings &amp; Dividends</a>  </li>
                                                                        <li className="menu-row ">   <a target="_self" data-ng-href="/stocks/stocks-screener" href="/stocks/stocks-screener">Stock Screener</a>  </li>
                                                                    </ul>
                                                                </div>
                                                                <div className="menu-list-wrapper">
                                                                    <span className="heading">Barchart Trade Picks</span>
                                                                    <ul className="menu-list">
                                                                        <li className="menu-row ">   <a target="_self" data-ng-href="/stocks/top-stock-pick" href="/stocks/top-stock-pick">Today's Top Stock Pick</a>  </li>
                                                                        <li className="menu-row ">   <a target="_self" data-ng-href="/stocks/all-stock-picks" href="/stocks/all-stock-picks">All Top Stock Picks</a>  </li>
                                                                    </ul>
                                                                </div>
                                                                <div className="menu-list-wrapper">
                                                                    <span className="heading">Performance Leaders</span>
                                                                    <ul className="menu-list">
                                                                        <li className="menu-row ">   <a target="_self" data-ng-href="/stocks/performance/percent-change" href="/stocks/performance/percent-change">Percent Change</a>  </li>
                                                                        <li className="menu-row ">   <a target="_self" data-ng-href="/stocks/performance/price-change/advances" href="/stocks/performance/price-change/advances">Price Change</a>  </li>
                                                                        <li className="menu-row ">   <a target="_self" data-ng-href="/stocks/performance/range-change/advances" href="/stocks/performance/range-change/advances">Range Change</a>  </li>
                                                                        <li className="menu-row ">   <a target="_self" data-ng-href="/stocks/performance/gap/gap-up" href="/stocks/performance/gap/gap-up">Gap Up &amp; Gap Down</a>  </li>
                                                                        <li className="menu-row ">   <a target="_self" data-ng-href="/stocks/performance/five-day-gainers/advances" href="/stocks/performance/five-day-gainers/advances">Five Day Gainers</a>  </li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="menu-row-block">
                                                            <div className="menu-row-block-inner">
                                                                <div className="menu-list-wrapper">
                                                                    <span className="heading">Most Active</span>
                                                                    <ul className="menu-list">
                                                                        <li className="menu-row ">   <a target="_self" data-ng-href="/stocks/most-active/daily-volume-leaders" href="/stocks/most-active/daily-volume-leaders">Volume Leaders</a>  </li>
                                                                        <li className="menu-row ">   <a target="_self" data-ng-href="/stocks/most-active/price-volume-leaders" href="/stocks/most-active/price-volume-leaders">Price Volume Leaders</a>  </li>
                                                                        <li className="menu-row ">   <a target="_self" data-ng-href="/stocks/most-active/volume-advances" href="/stocks/most-active/volume-advances">Volume Advances</a>  </li>
                                                                        <li className="menu-row ">   <a target="_self" data-ng-href="/stocks/most-active/trading-liquidity" href="/stocks/most-active/trading-liquidity">Trading Liquidity</a>  </li>
                                                                    </ul>
                                                                </div>
                                                                <div className="menu-list-wrapper">
                                                                    <span className="heading">Indices</span>
                                                                    <ul className="menu-list">
                                                                        <li className="menu-row ">   <a target="_self" data-ng-href="/stocks/indices" href="/stocks/indices">Market Indices</a>  </li>
                                                                        <li className="menu-row ">   <a target="_self" data-ng-href="/stocks/indices/sp/sp500" href="/stocks/indices/sp/sp500">S&amp;P Indices</a>  </li>
                                                                        <li className="menu-row ">   <a target="_self" data-ng-href="/stocks/indices/sp-sector/consumer-discretionary" href="/stocks/indices/sp-sector/consumer-discretionary">S&amp;P Sectors</a>  </li>
                                                                        <li className="menu-row ">   <a target="_self" data-ng-href="/stocks/indices/dowjones/industrials" href="/stocks/indices/dowjones/industrials">Dow Jones Indices</a>  </li>
                                                                        <li className="menu-row ">   <a target="_self" data-ng-href="/stocks/indices/nasdaq/nasdaq100" href="/stocks/indices/nasdaq/nasdaq100">Nasdaq Indices</a>  </li>
                                                                        <li className="menu-row ">   <a target="_self" data-ng-href="/stocks/indices/russell/russell1000" href="/stocks/indices/russell/russell1000">Russell Indices</a>  </li>
                                                                        <li className="menu-row ">   <a target="_self" data-ng-href="/stocks/indices/volatility" href="/stocks/indices/volatility">Volatility Indices</a>  </li>
                                                                        <li className="menu-row ">   <a target="_self" data-ng-href="/stocks/indices/commodity" href="/stocks/indices/commodity">Commodities Indices</a>  </li>
                                                                        <li className="menu-row ">   <a target="_self" data-ng-href="/stocks/indices/us-sectors" href="/stocks/indices/us-sectors">US Sectors Indices</a>  </li>
                                                                        <li className="menu-row ">   <a target="_self" data-ng-href="/stocks/indices/world-indices" href="/stocks/indices/world-indices">World Indices</a>  </li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="menu-row-block">
                                                            <div className="menu-row-block-inner">
                                                                <div className="menu-list-wrapper">
                                                                    <span className="heading">Trading Signals</span>
                                                                    <ul className="menu-list">
                                                                        <li className="menu-row ">   <a target="_self" data-ng-href="/stocks/signals/new-recommendations" href="/stocks/signals/new-recommendations">New Recommendations</a>  </li>
                                                                        <li className="menu-row ">   <a target="_self" data-ng-href="/stocks/signals/top-bottom/top" href="/stocks/signals/top-bottom/top">Top Stocks to Own</a>  </li>
                                                                        <li className="menu-row ">   <a target="_self" data-ng-href="/stocks/signals/direction-strength" href="/stocks/signals/direction-strength">Top Signal Strength</a>  </li>
                                                                        <li className="menu-row ">   <a target="_self" data-ng-href="/stocks/signals/direction" href="/stocks/signals/direction">Top Signal Direction</a>  </li>
                                                                        <li className="menu-row ">   <a target="_self" data-ng-href="/stocks/signals/upgrades" href="/stocks/signals/upgrades">Stock Signal Upgrades</a>  </li>
                                                                    </ul>
                                                                </div>
                                                                <div className="menu-list-wrapper">
                                                                    <span className="heading">Sectors</span>
                                                                    <ul className="menu-list">
                                                                        <li className="menu-row ">   <a target="_self" data-ng-href="/stocks/sectors/rankings" href="/stocks/sectors/rankings">Stock Market Sectors</a>  </li>
                                                                        <li className="menu-row ">   <a target="_self" data-ng-href="/stocks/sectors/sectors-heat-map" href="/stocks/sectors/sectors-heat-map">Major Markets Heat Map</a>  </li>
                                                                        <li className="menu-row ">   <a target="_self" data-ng-href="/stocks/sectors/industry-rankings" href="/stocks/sectors/industry-rankings">Industry Rankings</a>  </li>
                                                                        <li className="menu-row ">   <a target="_self" data-ng-href="/stocks/sectors/industry-heat-map" href="/stocks/sectors/industry-heat-map">Industry Heat Map</a>  </li>
                                                                        <li className="menu-row ">   <a target="_self" data-ng-href="/stocks/sectors/industry-performance" href="/stocks/sectors/industry-performance">Industry Performance</a>  </li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Dropdown.Menu>
                                        </Dropdown>

                                        <Dropdown>
                                            <Dropdown.Toggle variant="default">
                                                Options
                                            </Dropdown.Toggle>

                                            <Dropdown.Menu>
                                                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                                            </Dropdown.Menu>
                                        </Dropdown>

                                        <Dropdown>
                                            <Dropdown.Toggle variant="default">
                                                ETFS
                                            </Dropdown.Toggle>

                                            <Dropdown.Menu>
                                                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                                            </Dropdown.Menu>
                                        </Dropdown>


                                        <Dropdown>
                                            <Dropdown.Toggle variant="default">
                                                Future
                                            </Dropdown.Toggle>

                                            <Dropdown.Menu>
                                                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                                            </Dropdown.Menu>
                                        </Dropdown>


                                        <Dropdown>
                                            <Dropdown.Toggle variant="default">
                                                Currencies
                                            </Dropdown.Toggle>

                                            <Dropdown.Menu>
                                                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                                            </Dropdown.Menu>
                                        </Dropdown>


                                        <Dropdown>
                                            <Dropdown.Toggle variant="default">
                                                Investing
                                            </Dropdown.Toggle>

                                            <Dropdown.Menu>
                                                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                                            </Dropdown.Menu>
                                        </Dropdown>

                                        <Dropdown>
                                            <Dropdown.Toggle variant="default">
                                                News
                                            </Dropdown.Toggle>

                                            <Dropdown.Menu>
                                                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                                            </Dropdown.Menu>
                                        </Dropdown>


                                        <Dropdown>
                                            <Dropdown.Toggle variant="default">
                                                Tools
                                            </Dropdown.Toggle>

                                            <Dropdown.Menu>
                                                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                                            </Dropdown.Menu>
                                        </Dropdown>

                                        <Dropdown>
                                            <Dropdown.Toggle variant="default">
                                                Learn
                                            </Dropdown.Toggle>

                                            <Dropdown.Menu>
                                                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                                            </Dropdown.Menu>
                                        </Dropdown>
                                    </div>
                                    <div className="main-nav-right">
                                        <Dropdown>
                                            <Dropdown.Toggle variant="default" className="hide-arrow">
                                                Site News
                                            </Dropdown.Toggle>
                                            <Dropdown.Menu>
                                            </Dropdown.Menu>
                                        </Dropdown>

                                        <a href="/" className="hide-on-mobile contact-menu">
                                            <span className="show-for-large-up" alt="Contact Barchart" title="Contact Barchart">Contact</span>
                                            <img src="https://d1l7hzv7igdihb.cloudfront.net/img/contact-form.svg" alt="Contact Barchart" title="Contact Barchart" />
                                        </a>

                                        <Dropdown className="market-wrapper">
                                            <Dropdown.Toggle variant="default">
                                                <div className="bc-flag flag-au"></div>
                                            </Dropdown.Toggle>

                                            <Dropdown.Menu>
                                                <div className="select-market-block">
                                                    <ul className="market-dropdown" id="select-market-dropdown" role="listbox">
                                                        <li>
                                                            <a tabindex="0" role="option">
                                                                <span>US</span>
                                                                <div className="bc-flag flag-us"></div>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a tabindex="0" role="option" className="current-market">
                                                                <span>Canada</span>
                                                                <div className="bc-flag flag-ca"></div>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a tabindex="0" role="option">
                                                                <span>UK</span>
                                                                <div className="bc-flag flag-gb"></div>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a tabindex="0" role="option">
                                                                <span>Australia</span>
                                                                <div className="bc-flag flag-au"></div>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a tabindex="0" role="option">
                                                                <span>Europe</span>
                                                                <div className="bc-flag flag-eu"></div>
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </Dropdown.Menu>
                                        </Dropdown>
                                    </div>
                                </div>

                            </Offcanvas.Body>
                        </Navbar.Offcanvas>
                    </Container>
                </div>
            </Navbar>
        </>
    )

}

export default MenuComponent;