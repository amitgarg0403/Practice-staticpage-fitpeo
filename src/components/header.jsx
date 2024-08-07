import './header.css'

const Header = () => {
    return ( 
            <div className="header-block">
                <div className="header-block1">
                    <a href="/"><h4>FitPeo</h4></a>
                    <input type="text" className="form-control header-search" placeholder="Search"  />
                </div>
                <div className='header-notification-block'>
                    <span className="notification-item ">
                        <i className="fa-regular fa-bell  fa-lg"></i>
                    </span>
                    <span className="notification-item ">
                        <i className="fa-regular fa-envelope fa-lg"></i>
                    </span>
                    <span className="notification-item ">
                        <i className="fa-solid fa-gear fa-lg"></i>
                    </span>
                    <span className="notification-item ">
                        <i className="fa-solid fa-person fa-lg"></i>
                    </span>
                </div>
            </div>
     );
}
 
export default Header;