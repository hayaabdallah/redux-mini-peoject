
import {NavLink, useNavigate} from 'react-router-dom';


const Nav = ()=>{


    return(

        <nav className="navbar navbar-expand-lg navbar-dark bg-dark" >
            <div className="container-fluid">
                <NavLink className="navbar-brand" to="/">CRUD</NavLink>
                <button className="navbar-toggler" type="button" data-mdb-toggle="collapse" data-mdb-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <i className="fas fa-bars"></i>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <NavLink className="nav-link" aria-current="page" to="/">Home</NavLink>
                    </li>
               
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/add">Add user</NavLink>
                    </li>
    
               
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/login">Login</NavLink>
                    </li>

            
                    
                </ul>
                </div>
            </div>
        </nav>


    )
}

export default Nav;