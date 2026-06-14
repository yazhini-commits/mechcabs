import { Link } from 'react-router-dom';
import { Wrench } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="glass-nav" style={{
      position: 'fixed', top: 0, width: '100%', zIndex: 50, padding: '16px 0'
    }}>
      <div className="container flex-between">
        <Link to="/" className="flex-center" style={{ gap: '12px' }}>
          <div style={{
            background: 'var(--primary)',
            padding: '8px',
            borderRadius: '12px',
            display: 'flex'
          }}>
            <Wrench size={24} color="white" />
          </div>
          <span style={{ fontSize: '24px', fontWeight: 800, letterSpacing: '1px' }}>
            MECH<span className="text-gradient">CABS</span>
          </span>
        </Link>
        <div style={{ display: 'flex', gap: '24px', alignItems: 'center' }}>
          <a href="/#services" style={{ fontWeight: 500, color: 'var(--text-muted)' }}>Services</a>
          <a href="/#how-it-works" style={{ fontWeight: 500, color: 'var(--text-muted)' }}>How it Works</a>
          <Link to="/signin" className="btn btn-secondary" style={{ padding: '8px 16px' }}>Sign In</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
