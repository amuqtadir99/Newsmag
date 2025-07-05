const Navbar = ({ setCategory }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm py-3 sticky-top ">
      <div className="container">
        <a className="navbar-brand fw-bold fs-3" href="#">
          <span className="text-info">News</span>Mag
        </a>
        <button
          className="navbar-toggler border-0"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
          <ul className="navbar-nav text-center">
            {["Technology", "Business", "Health", "Sports", "Entertainment"].map((categoryName) => (
              <li className="nav-item mx-2" key={categoryName}>
                <div
                  className="nav-link fs-5 text-light hover-underline"
                  style={{ cursor: "pointer" }}
                  onClick={() => setCategory(categoryName.toLowerCase())}
                >
                  {categoryName}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
