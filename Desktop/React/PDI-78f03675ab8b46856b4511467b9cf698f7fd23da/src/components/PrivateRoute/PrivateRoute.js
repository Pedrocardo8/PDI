import React from "react"
import { Route, Redirect } from "react-router-dom"
import { useAuth } from "../../context/AuthContext"
import Sidebar from "../Sidebar/Sidebar"

export default function PrivateRoute({ component: Component, ...rest }) {
  const { currentUser } = useAuth()

  return (
    <Route
      {...rest}
      render={props => {
        return currentUser ? 
        (<di>
          <Component {...props} />
          <Sidebar/>
          </di>
          ) : <Redirect to="/login" />
      }}
    ></Route>
  )
}