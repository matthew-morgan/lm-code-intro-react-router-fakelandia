import { NavLink, Outlet } from 'react-router-dom';
import './Layout.css';

const Layout: React.FC = () => {
    return (
        <>
            <div>
                <header>
                    <nav>
                        <ul>
                            <li>
                                <NavLink to="/">Home</NavLink>
                            </li>
                            <li>
                                <NavLink to="/misdemeanour">Misdemeanours</NavLink>
                            </li>
                            <li>
                                <NavLink to="/confession">Confession</NavLink>
                            </li>
                        </ul>
                    </nav>
                </header>
            </div>
            < Outlet />
        </>
    );
}

export default Layout;
