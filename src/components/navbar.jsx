import React from "react";

const NavBar = (props) => {
  const { counters } = props;

  return (
    <nav className="navbar navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand">
          Navbar{"  "}
          <span className="badge badge-pill badge-secondary">
            {counters.length}
          </span>
        </a>
      </div>
    </nav>
  );
};

export default NavBar;

// class NavBar extends Component {
//   state = {};
//   render() {
//     return (
//       <nav className="navbar navbar-light bg-light">
//         <div className="container-fluid">
//           <a className="navbar-brand" href="#">
//             Navbar
//             <span className="badge badge-pill badge-secondary">
//               {this.props.counters.length}
//             </span>
//           </a>
//         </div>
//       </nav>
//     );
//   }
// }

// export default NavBar;
