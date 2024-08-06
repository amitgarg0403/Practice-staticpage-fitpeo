import './header.css'

const Header = () => {
    return ( 
            <div className="header-block">
                <input type="text" className="form-control header-search" placeholder="Search"  />
                <div className='header-notification-block'>
                    <span className="notification-item ">
                        <i className="fa-regular fa-bell  fa-lg"></i>
                    </span>
                    <span className="notification-item ">
                        <i className="fa-regular fa-envelope  fa-lg"></i>
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