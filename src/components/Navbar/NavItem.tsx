import { NavLink, useNavigate, useLocation } from 'react-router-dom';

interface NavItemProps {
  to: string;
  label: string;
}

export function NavItem({ to, label }: NavItemProps) {
  const navigate = useNavigate();
  const location = useLocation();

  const handleClick = (e: React.MouseEvent) => {
    if (label === 'History') {
      e.preventDefault();
      navigate('/#timeline', { replace: true });
      setTimeout(() => {
        document.getElementById('timeline')?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  };

  // Custom isActive check
  const isActiveLink = ({ isActive }: { isActive: boolean }) => {
    // For History, only be active if the URL includes #timeline
    if (label === 'History') {
      return location.hash === '#timeline';
    }
    // For Home, only be active if there's no hash and we're at root
    if (label === 'Home') {
      return isActive && !location.hash;
    }
    // For all other links, use default behavior
    return isActive;
  };

  return (
    <NavLink
      to={to}
      onClick={handleClick}
      className={({ isActive }) => `
        relative px-4 py-2 text-sm font-medium transition-colors duration-200 hover:text-white group
        ${isActiveLink({ isActive }) ? 'text-white' : 'text-gray-300'}
      `}
    >
      {({ isActive }) => (
        <>
          {label}
          <span className={`
            absolute bottom-0 left-0 w-full h-0.5 bg-white transform origin-left 
            transition-transform duration-200 ease-out
            ${isActiveLink({ isActive }) ? 'scale-x-100' : 'scale-x-0'}
            group-hover:scale-x-100
          `} />
        </>
      )}
    </NavLink>
  );
}