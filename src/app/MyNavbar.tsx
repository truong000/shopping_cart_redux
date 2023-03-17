import { Link, Outlet } from 'react-router-dom';

function MyNavbar() {
  return (
    <div>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/news">News</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/shopping-cart">Cart</Link></li>
          </ul>
        </nav>
        <div>
            <Outlet />
        </div>
    </div>
  );
}

export default MyNavbar;
