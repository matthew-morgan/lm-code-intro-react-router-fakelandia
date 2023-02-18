import { Link, Outlet } from 'react-router-dom';

const Layout: React.FC = () => {
    return (
        <>
            <div>
                <header>
                    <nav>
                        <ul>
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <Link to="/misdemeanour">Misdemeanours</Link>
                            </li>
                            <li>
                                <Link to="/confession">Confession</Link>
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
