import React from 'react';
import './navbar.css'

const Navbar = () => {
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark p-0">
                <div class="container-fluid">
                        <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <a class="nav-link" href="#">ABOUT US</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">FOR YOU</a>
                            </li>
                            <li class="nav-item ">
                                <a class="nav-link" href="#">SERVICES</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">BLOG</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">VLOD</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">CONTACT</a>
                            </li>
                        </ul>
                    </div>
            </nav>
        </div>
    )
}

export default Navbar