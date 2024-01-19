import React from 'react';
import { Link } from 'react-router-dom';



 class Logout extends React.Component {
    constructor() {
        super();


        localStorage.removeItem("token");
    }


    render() {
        return (
            <div>
                <h1>You have been Logged out!!!!</h1>
                <Link to='/' >Go to Login Page</Link>
            </div>
        )
    }

}
export default Logout; 
