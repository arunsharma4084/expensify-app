import React from "react";
import { createRoot } from "react-dom/client";

function Info(props){
    return (
        <div>
            <h1>Info</h1>
            <p>The info is : {props.info}</p>
        </div>
    )
}

const withAdminWarning = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAdmin && <p>This is private info. Please do not share.</p>}
            <WrappedComponent {...props}/>
        </div>
    )
}

const AdminInfo = withAdminWarning(Info);

function requireAuthentication(WrappedComponent){
    return (props) => (
        <div>
            {props.isAuthenticated 
                ? <WrappedComponent {...props}/>
                : <p>Please Login to view the Info</p>
            
            }
            
        </div>
    )
}

const AuthInfo = requireAuthentication(Info);

const root = createRoot(document.getElementById('app'));
root.render(<AuthInfo isAuthenticated={true} info="These are the details"/>);