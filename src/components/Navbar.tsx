import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X, Sparkles, User, CreditCard } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'Home', href: '/', icon: Sparkles },
    { name: 'Ask Oracle', href: '/ask', icon: Sparkles },
    { name: 'My Fortunes', href: '/history', icon: User },
    { name: 'Billing', href: '/billing', icon: CreditCard },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="glass-card border-glass-border/30 backdrop-blur-xl sticky top-4 mx-4 rounded-2xl z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="relative">
              <Sparkles className="h-8 w-8 text-secondary twinkle" />
              <div className="absolute inset-0 bg-secondary/20 blur-lg rounded-full" />
            </div>
            <span className="text-xl font-bold text-gradient">Starlit Oracle</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                    isActive(item.href)
                      ? 'bg-primary/20 text-primary border-glow'
                      : 'text-muted-foreground hover:text-foreground hover:bg-glass/50'
                  }`}
                >
                  <item.icon className="inline w-4 h-4 mr-2" />
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Auth Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="starlight" size="sm">Sign In</Button>
            <Button variant="cosmic" size="sm">Sign Up</Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-4">
            <div className="space-y-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`block px-3 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                    isActive(item.href)
                      ? 'bg-primary/20 text-primary border-glow'
                      : 'text-muted-foreground hover:text-foreground hover:bg-glass/50'
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  <item.icon className="inline w-4 h-4 mr-2" />
                  {item.name}
                </Link>
              ))}
              <div className="pt-4 space-y-2">
                <Button variant="starlight" className="w-full">Sign In</Button>
                <Button variant="cosmic" className="w-full">Sign Up</Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;