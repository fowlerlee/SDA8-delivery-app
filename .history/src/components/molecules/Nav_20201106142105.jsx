//react core
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Link } from 'react-router-dom';

//import styles
import '../../css/styles.css';

//import components
import Home from '../../components/pages/Home.jsx';
import Login from '../pages/Login';

//navigation bar component
export default function Nav() {
  const navStyle = {
    color: 'black',
  };

  return (
    <nav>
      <h3> Logo </h3>
      <ul>
        <Link className={na} to="/home">
          <li>Home</li>
        </Link>

        <Link classname={styles.navLinks} to="/login">
          <li>Login</li>
        </Link>

        <Link style={navStyle} to="/signup">
          <li>Sign Up</li>
        </Link>
      </ul>
    </nav>
  );
}
