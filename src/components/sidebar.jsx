import "./sidebar.css";

const Sidebar = () => {
  return (
    <div>
      <div className="sidebar">
        <ul className="sidebar-block">
          <li className="nav-item">
            <a href="#" className="nav-link active text-warning" aria-current="page">
              <i className="fa fa-home fa-xl "></i>
            </a>
          </li>
          <li>
            <a href="#" className="nav-link text-white">
              <i className="fa fa-chart-column fa-xl"></i>
            </a>
          </li>
          <li>
            <a href="#" className="nav-link text-white">
              <i className="fa-regular fa-clipboard fa-xl"></i>
            </a>
          </li>
          <li>
            <a href="#" className="nav-link text-white">
              <i className="fa fa-wallet fa-xl"></i>
            </a>
          </li>
          <li>
            <a href="#" className="nav-link text-white">
              <i className="fa fa-bag-shopping fa-xl"></i>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
