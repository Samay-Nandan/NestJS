import { Link } from 'react-router-dom';
import { ROUTES } from '@src/constant';

export const Navbar = () => (
  <nav className="flex flex-wrap md:flex-nowrap items-center justify-center p-4">
    <Link
      to={ROUTES.HOME}
      className="cursor-pointer text-4xl font-extrabold text-black"
    >
      Shop<span className="text-yellow-400">V</span>ista
    </Link>
  </nav>
);
