import React, { useState } from 'react'
import budget from './budget.png';
import {SidebarData} from './SidebarData';
import { useAuth } from '../../context/AuthContext'
import { Link, useHistory } from "react-router-dom"
import {
    Button    
} from "react-bootstrap";

function Sidebar({onRouteChange}) {
    const [error, setError] = useState("")
    const { currentUser, logout } = useAuth()
    const history = useHistory()
  
    async function handleLogout() {
      setError("")
  
      try {
        await logout()
        history.push("/login")
      } catch {
        setError("Failed to log out")
      }
    }
    return (
        <div className='Sidebar'>
            <ul className='SidebarList'>
            <img className='img' alt='logo' src={budget}/>
            <div className='text-center'>
                <Button variant="primary" onClick={handleLogout}>
                    Log out
                </Button>        
            </div>
 
            {SidebarData.map((val,key) => {
                return (
                    <li key={key} className='row' id={window.location.pathname === val.link ? "active" : ""} onClick={() => {window.location.pathname = val.link}}>
                        {" "}
                     <div id='icon'>{val.icon}</div>{" "}
                     <div id='title'>{val.title}</div>
                     </li>
               );
            })}
            </ul>
        </div>
    )
}

export default Sidebar
