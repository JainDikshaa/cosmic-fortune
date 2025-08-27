import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X, Sparkles, User, CreditCard, LogOut } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user, signOut, loading } = useAuth();
  const navigate = useNavigate();

  const handleSignOut = async () => {
    await signOut();
    navigate('/');
  };
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
            {loading ? (
              <div className="w-8 h-8 rounded-full bg-primary/20 animate-pulse" />
            ) : user ? (
              <div className="flex items-center space-x-3">
                <div className="flex items-center space-x-2 px-3 py-2 rounded-lg bg-glass/30">
                  <User className="h-4 w-4 text-secondary" />
                  <span className="text-sm font-medium">{user.email}</span>
                </div>
                <Button onClick={handleSignOut} variant="ghost" size="sm">
                  <LogOut className="h-4 w-4" />
                </Button>
              </div>
            ) : (
              <div className="flex items-center space-x-3">
                <Link to="/login">
                  <Button variant="starlight" size="sm">Sign In</Button>
                </Link>
                <Link to="/signup">
                  <Button variant="cosmic" size="sm">Sign Up</Button>
                </Link>
              </div>
            )}
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
                {user ? (
                  <div className="space-y-3 border-t border-glass-border pt-4">
                    <div className="flex items-center space-x-2 text-sm">
                      <User className="h-4 w-4 text-secondary" />
                      <span>{user.email}</span>
                    </div>
                    <Button onClick={handleSignOut} variant="ghost" className="w-full justify-start">
                      <LogOut className="mr-2 h-4 w-4" />
                      Sign Out
                    </Button>
                  </div>
                ) : (
                  <>
                    <Link to="/login" onClick={() => setIsOpen(false)}>
                      <Button variant="starlight" className="w-full">Sign In</Button>
                    </Link>
                    <Link to="/signup" onClick={() => setIsOpen(false)}>
                      <Button variant="cosmic" className="w-full">Sign Up</Button>
                    </Link>
                  </>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;