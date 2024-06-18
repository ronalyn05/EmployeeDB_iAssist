import React from "react";
import { Link, useLocation } from 'react-router-dom';
import '../App.css';
import { useState } from "react";
//  import { variables } from '../variables';


 function Navbar() {

  // Get user data from location state
  const location = useLocation();
  const data = location.state;
  const [showPages, setShowPages] = useState(false);
  const [showLoans, setShowLoans] = useState(false);
  const [showMaternity, setShowMaternity] = useState(false);
  const [showCertReq, setShowCertReq] = useState(false);
  const [showSickness, setshowSickness] = useState(false);
  const [UpdateEmployee, setUpdateEmployee] = useState(false);
  const [OtherRequest, setOtherRequest] = useState(false);

  const RoleType = sessionStorage.getItem("role");

  // Function to toggle the visibility of pages list
  const togglePages = () => {
      setShowPages(!showPages);
  };
  const toggleLoans = () => {
        setShowLoans(!showLoans);
  };
  const toggleMaternity = () => {
        setShowMaternity(!showMaternity);
  };
  const toggleCertReq = () => {
    setShowCertReq(!showCertReq);
  };
  const toggleSickness = () => {
    setshowSickness(!showSickness);
  };
  const toggleUpdateEmployee= () => {
    setUpdateEmployee(!UpdateEmployee);
  };
  const toggleOtherRequest = () => {
    setOtherRequest(!OtherRequest);
  };

     return (
         <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">
             {/* Sidebar - Brand */}
             <a className="sidebar-brand d-flex align-items-center justify-content-center" href="/">
                 <div className="sidebar-brand-icon">
                     <img src="/img/hris1.png" alt="companyLogo" className="logo1" />
                 </div>
                 <div className="sidebar-brand-text">
                     <img src="/img/hris2.png" alt="companyLogo" className="logo2" />
                 </div>
             </a>
             {/* Divider */}
             <hr className="sidebar-divider my-0" />
             {/* Nav Item - Dashboard */}
             <li className="nav-item">
                <Link className="nav-link" to={{ pathname: "/dashboard"}} state={data}>
                <i className="fas fa-fw fa-tachometer-alt"></i>
                        <span>Dashboard</span>
                  </Link>
             </li>
              {/* Divider */}
              <hr className="sidebar-divider" />
      {/* Conditionally render Employee DB section */}
      {RoleType !== "Employee" && (
        <>
          {/* Heading */}
          <div className="sidebar-heading">
            Employee DB
          </div>
          {/* Nav Item - New Hire Upload */}
          <li className="nav-item">
            <Link className="nav-link" to={{ pathname: "/newHireUpload" }} state={data}>
              <i className="fas fa-fw fa-upload"></i>
              <span>New Hire Upload</span>
            </Link>
          </li>
          {/* Nav Item - Reports */}
          <li className="nav-item">
            <Link className="nav-link" to={{ pathname: "/reports" }} state={data}>
              <i className="fas fa-fw fa-chart-bar"></i>
              <span>Report</span>
            </Link>
          </li>
          {/* Divider */}
          <hr className="sidebar-divider" />
        </>
      )}

             {/* Divider */}
             {/* <hr className="sidebar-divider" /> */}
             {/* Heading */}
             <div className="sidebar-heading">
                 MAIN
             </div>
             
             <li className="nav-item">
                 {/* <a className="nav-link" href="/newHireUpload"> */}
                 <Link className="nav-link" to={{ pathname: "/submissions"}} state={data}>
                  <i className="fas fa-fw fa-book"></i>
                  <span>Submissions</span>
                </Link>
                 {/* </a> */}
             </li>
             {/* Nav Item - iAssist */}
             <li className="nav-item">
                 {/* <a className="nav-link" href="/newHireUpload"> */}
                 <Link className="nav-link">
                  <i className="fas fa-fw fa-info-circle"></i>
                  <span onClick={togglePages}>iASSIST</span>
                </Link>
                {showPages && (
                    <ul className="custom-bullet-list">
                        {/* Add your list of pages here */}  
                        <li onClick={toggleLoans}>
                            <Link className="dropdown-text" state={data}>Government Loan</Link>
                            {showLoans && (
                                <ul className="custom-bullet-list">
                                    <li>
                                        <Link to="/sssloan" className="dropdown-text" state={data}>SSS Loan</Link>
                                    </li>
                                    {/* <li>
                                        <Link to="/loan2" className="dropdown-text" state={data}>Pag-Ibig Loan</Link>
                                    </li> */}
                                    <li> 
                                        <Link to="/landbankcard" className="dropdown-text" state={data}>
                                            Pag-Ibig Loan:
                                            <div className="list-padding">Landbank Card</div>
                                        </Link>
                                    </li>
                                    <li> 
                                        <Link to="/virtualaccount" className="dropdown-text" state={data}>
                                            Pag-Ibig Loan:
                                            <div className="list-padding">Virtual Account</div>
                                        </Link>
                                    </li>
                                </ul>
                            )}
                        </li>

                        <li onClick={toggleMaternity}> 
                            <Link className="dropdown-text" state={data}>Maternity</Link>
                            {showMaternity && (
                                <ul className="custom-bullet-list sub-menu">
                                    <li>
                                        <Link to="/notification" className="dropdown-text" state={data}>
                                            Maternity   
                                            <div className="list-padding">Notification</div>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/benefit" className="dropdown-text" state={data}>
                                            Maternity Benefit 
                                            
                                        </Link>
                                    </li>
                                </ul>
                            )}
                        </li>

                        <li onClick={toggleCertReq}> 
                            <Link className="dropdown-text" state={data}>Certificate Request</Link>
                            {showCertReq && (
                                <ul className="custom-bullet-list sub-menu">
                                    <li>
                                        <Link to="/SSSrequest" className="dropdown-text" state= { data }> 
                                            SSS   
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/PIrequest" className="dropdown-text"  state= { data }>
                                            PAG-IBIG 
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/PHILHEALTHrequest" className="dropdown-text" state= { data }>
                                            PHILHEALTH
                                            <div className="list-padding" style={{ fontSize: '12px' }}>Certificate of Remittance</div>
                                        </Link>
                                    </li>
                                </ul>
                            )}
                        </li>

                        <li onClick={toggleSickness}> 
                            <Link className="dropdown-text" state={data}>SSS Sickness</Link>
                            {showSickness && (
                                <ul className="custom-bullet-list sub-menu">
                                    <li>
                                        <Link to="/SicknessNotification " className="dropdown-text" state={data}>
                                            SSS Sickness  
                                            <div className="list-padding">Notification</div>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/SicknessApproval" className="dropdown-text"  state= { data }>
                                            SSS Sickness  
                                            <div className="list-padding">Approval</div>
                                        </Link>
                                    </li>
                                </ul>
                            )}
                        </li>
                        
                        <li onClick={toggleUpdateEmployee}>
                            <Link to="/UpdateEmployee" className="dropdown-text" state={data}> 
                                Employee Information 
                                <div className="list-padding">Update</div>
                            </Link>
                        </li>
                        <li onClick={toggleOtherRequest}>
                            <Link to="/OtherRequest" className="dropdown-text" state={data}>Other Request</Link>
                        </li>
                        
                        {/* <li onClick={toggleMaternity}>
                            <Link className="dropdown-text" state={data} > 
                                <span>Maternity</span>
                            </Link>
                        </li> 
                        {setShowMaternity && (
                            <ul className="custom-bullet-list"> 
                                <li onClick={toggleLoans}>
                                    <Link className="dropdown-text" state={data} > 
                                        <span>Maternity 1</span>
                                    </Link>
                                </li>
                                <li onClick={toggleMaternity}>
                                    <Link className="dropdown-text" state={data} > 
                                        <span>Maternity 2</span>
                                    </Link>
                                </li> 
                            </ul>
                        )} */}
                    </ul>
                )}
                 {/* </a> */}
             </li> 
             
             
             
            
             {/* Sidebar Toggler (Sidebar) */}
             <div className="text-center d-none d-md-inline">
          <button className="rounded-circle border-0" id="sidebarToggle"></button>
        </div>
         </ul>
     );
 }
 
 export default Navbar;
 


  