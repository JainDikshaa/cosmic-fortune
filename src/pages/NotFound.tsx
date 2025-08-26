import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center glass-card p-8 max-w-md mx-4">
        <h1 className="text-4xl font-bold mb-4 text-gradient">404</h1>
        <p className="text-xl text-muted-foreground mb-4">Oops! This cosmic realm doesn't exist</p>
        <a href="/" className="btn-cosmic inline-flex items-center px-6 py-3 text-primary-foreground font-medium rounded-xl">
          Return to the Cosmic Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
