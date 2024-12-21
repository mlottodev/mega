import { NavItem } from './NavItem';

const navItems = [
  { to: '/', label: 'Home' },
  { to: '/manifesto', label: 'Manifesto' },
  { to: '/history', label: 'History' },
  { to: '/news', label: 'News' },
];

export function Navbar() {
  return (
    <nav className="bg-gradient-to-r bg-gray-900 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-8">
            {/* <span className="text-white font-bold text-xl">
              <img
                src='/images/esan.png'
                className="h-[50px] w-[60px]"
                loading="lazy"
              />
            </span> */}
            <div className="flex space-x-4">
              {navItems.map((item) => (
                <NavItem key={item.to} {...item} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}