import { Link } from "react-router-dom"

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <a className="navbar-brand " href="#" style={{fontFamily:'cursive', fontWeight: 600, fontSize:'2vw'}}>Artify</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page"><Link to="/" style={{textDecoration: 'none', color: 'black' }}>Home</Link></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link"><Link to="/artwork" style={{textDecoration: 'none', color: 'black' }}>Art Gallery</Link></a>
                        </li>
                        
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar