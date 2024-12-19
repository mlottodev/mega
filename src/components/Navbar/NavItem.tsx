import { NavLink } from 'react-router-dom';

interface NavItemProps {
  to: string;
  label: string;
}

export function NavItem({ to, label }: NavItemProps) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) => `
        relative px-4 py-2 text-sm font-medium transition-colors duration-200 hover:text-white group
        ${isActive ? 'text-white' : 'text-gray-300'}
      `}
    >
      {({ isActive }) => (
        <>
          {label}
          <span className={`
            absolute bottom-0 left-0 w-full h-0.5 bg-white transform origin-left 
            transition-transform duration-200 ease-out
            ${isActive ? 'scale-x-100' : 'scale-x-0'}
            group-hover:scale-x-100
          `} />
        </>
      )}
    </NavLink>
  );
}