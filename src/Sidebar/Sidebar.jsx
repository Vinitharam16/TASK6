import React from "react";
import './Sidebar.css'
import { Link, useNavigate } from "react-router-dom";
import { useAuthentication } from "../Contexts/Authentication.context";

export default function Sidebar() {
    const { loggedIn, setLoggedIn } = useAuthentication();
    const navigate = useNavigate();
    return (  
        <div className="sidebar">
            <div className="profile-container">
                <div className="row">
                    <div className="col-4">
                        <img className="rounded-circle profile-img" src="https://t4.ftcdn.net/jpg/05/89/93/27/360_F_589932782_vQAEAZhHnq1QCGu5ikwrYaQD0Mmurm0N.jpg" alt="Profile" />
                    </div>
                    <div className="col-8 profile-data">
                        {!loggedIn && (
                            <React.Fragment>
                                <button
                                    className="btn"
                                    onClick={() => {
                                        setLoggedIn(true);
                                    }}>
                                    Login
                                </button>
                                <button>
                                    Signup
                                </button>
                            </React.Fragment>
                        )}
                        <div><b>John Doe</b></div>
                        <div>johndoe@gmail.com</div>
                    </div>
                </div>
                <div className="row nav-links gap-3">
                    <button className="btn nav-link active">
                        <Link to={'/home'} className='btn nav-link icon-link' >
                            <i class='bx bx-home'></i>
                            Home
                        </Link>
                    </button>
                    <button className="btn" >
                        <Link to={'/search'} className='nav-link icon-link' >
                            <i class='bx bx-search'></i>
                            Search
                        </Link>
                    </button>
                    <button className="btn">
                        <Link to={'/notes'} className='nav-link icon-link' >
                            <i class='bx bx-file'></i>
                            Notes
                        </Link>
                    </button>
                    <button className="btn">
                        <Link to={'/tasks'} className='nav-link icon-link' >
                            <i class='bx bx-list-check'></i>
                            Tasks
                        </Link>
                    </button>
                    <button className="btn">
                        <Link to={'/archive'} className='nav-link icon-link' >
                            <i class='bx bx-archive-in'></i>
                            Archieve
                        </Link>
                    </button>
                    <button className="btn">
                        <Link to={'/bin'} className='nav-link icon-link' >
                            <i class='bx bx-trash'></i>
                            Bin
                        </Link>
                    </button>

                </div>
            </div>
        </div>
    );
}