const Sidebar = () => {
  return (
    <div>
      <div
        className="d-flex flex-column p-3 text-white bg-dark"
        style={{ width: "140px", height: "100vh" }}
      >
        <a
          href="/"
          className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none"
        >
          <span className="fs-4">FitPeo</span>
        </a>
        <hr />
        <ul className="nav nav-pills flex-column mb-auto">
          <li className="nav-item">
            <a
              href="#"
              className="nav-link active text-white"
              aria-current="page"
            >
              <i className="fa fa-home fa-xl m-4"></i>
            </a>
          </li>
          <li>
            <a href="#" className="nav-link text-white">
              <i className="fa fa-chart-column fa-xl m-4"></i>
            </a>
          </li>
          <li>
            <a href="#" className="nav-link text-white">
              <i className="fa-regular fa-clipboard fa-xl m-4"></i>
            </a>
          </li>
          <li>
            <a href="#" className="nav-link text-white">
              <i className="fa fa-wallet fa-xl m-4"></i>
            </a>
          </li>
          <li>
            <a href="#" className="nav-link text-white">
              <i className="fa fa-bag-shopping fa-xl m-4"></i>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
