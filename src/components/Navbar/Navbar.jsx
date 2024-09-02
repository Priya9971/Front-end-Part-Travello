import React from 'react'
import "./navbar.css";



export const Navbar = () =>{
    return (
        <header className="heading d-flex align-center">
            <h1 className="heading-1">
                <a className="link" href="/">TravellO</a>
            </h1>
            <div className="form-container d-flex align-center cursor-pointer shadow">
                <span className="form-option">Any where</span>
                <span className="border-right-1px"></span>
                <span className="form-option">Any week</span>
                <span className="border-right-1px"></span>
                <span className="form-option">Add Guest</span>
                <svg className="search" xmlns="http://www.w3.org/2000/svg"  viewBox="0 -960 960 960" fill="#fff"><path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z"/></svg>
            </div>
            <nav className="d-flex align-center gap-large">
                <div className="nav align-center cursor-pointer">
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/></svg>
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="M391-480q-36 0-60-27t-19-63l13-98q8-57 52-94.5T480-800q59 0 103 37.5t52 94.5l13 98q5 36-19 63t-60 27H391Zm0-80h178l-13-96q-4-28-25.5-46T480-720q-29 0-50.5 18T404-656l-13 96Zm89 0ZM160-160v-112q0-34 17.5-62.5T224-378q62-31 126-46.5T480-440q66 0 130 15.5T736-378q29 15 46.5 43.5T800-272v112H160Zm80-80h480v-32q0-11-5.5-20T700-306q-54-27-109-40.5T480-360q-56 0-111 13.5T260-306q-9 5-14.5 14t-5.5 20v32Zm240 0Z"/></svg>
                </div>
               
            </nav>
        </header>
    )
}
