import PropTypes from 'prop-types'
import { Link} from 'react-router-dom'

export default function Navbar(props) {
    const DropDownColor = {
        width: "50px",
        height: "30px",
        cursor: "pointer",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    }

    return (
        <nav className={`navbar navbar-${props.mode} bg-${props.mode} navbar-expand-lg`}>
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">{props.title}</Link>
                <button className="navbar-toggler border border-radius-4" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link" aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/about">About Us</Link>
                        </li>
                        <li className="nav-item dropdown">
                            <Link className="nav-link dropdown-toggle" to="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Themes
                            </Link>
                            <ul className="dropdown-menu">
                              
                                <li>
                                    <div className="d-flex"onClick={()=>props.togglemode("success")}>
                                        <div className="bg-success rounded my-1  mx-2" style={DropDownColor}>
                                        </div>
                                        <span>
                                            Green
                                        </span>
                                    </div>
                                </li>
                                
                                <li>
                                    <div className="d-flex" onClick={()=>props.togglemode("secondary")}>
                                        <div className="bg-secondary rounded my-1  mx-2" style={DropDownColor}>
                                        </div>
                                        <span>
                                            Grey
                                        </span>
                                    </div>
                                </li>
                                
                                <li>
                                    <div className="d-flex" onClick={()=>props.togglemode("dark")}>
                                        <div className="bg-dark rounded my-1 mx-2" style={DropDownColor}> 
                                        </div>
                                        <span>
                                            Black
                                        </span>
                                    </div>
                                </li>
                                
                                <li>
                                    <div className="d-flex" onClick={()=>props.togglemode("primary")}>
                                        <div className="bg-primary rounded my-1 mx-2" style={DropDownColor}> 
                                        </div>
                                        <span>
                                            Blue
                                        </span>
                                    </div>
                                </li>
                                
                                <li>
                                    <div className="d-flex"onClick={()=>props.togglemode("light")}>
                                        <div className="bg-light border border-dark rounded my-1 mx-2" style={DropDownColor}> 
                                        </div>
                                        <span>
                                            light
                                        </span>
                                    </div>
                                </li>
                                
                                <li>
                                    <div className="d-flex" onClick={()=>props.togglemode("danger")}>
                                        <div className="bg-danger rounded my-1 mx-2" style={DropDownColor}> 
                                        </div>
                                        <span>
                                            Red
                                        </span>
                                    </div>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div >
        </nav >
    )
}

Navbar.prototype = {
    title: PropTypes.string.isRequired,
    about: PropTypes.string,
}

Navbar.defaultProps = {
    title: "set title here",
    about: "About Us",
}
