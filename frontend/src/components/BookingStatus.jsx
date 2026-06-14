import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { CheckCircle, Truck, Car, Wrench, Fuel, Phone, MessageSquare } from 'lucide-react';

const BookingStatus = ({ service }) => {
  const navigate = useNavigate();
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => (prev < 100 ? prev + 1 : 100));
    }, 100); // Fills up in 10 seconds for demo

    return () => clearInterval(interval);
  }, []);

  const getServiceDetails = () => {
    switch(service) {
      case 'mechanic': return { icon: <Wrench size={24} color="white" />, title: 'Mechanic on the way', name: 'John Doe', rating: '4.8' };
      case 'tow': return { icon: <Truck size={24} color="white" />, title: 'Tow Truck En Route', name: 'Mike Smith', rating: '4.9' };
      case 'fuel': return { icon: <Fuel size={24} color="white" />, title: 'Fuel Delivery Coming', name: 'Sarah Lee', rating: '4.7' };
      case 'cab': return { icon: <Car size={24} color="white" />, title: 'Cab is arriving', name: 'David Kim', rating: '4.9' };
      default: return { icon: <CheckCircle size={24} color="white" />, title: 'Help is on the way', name: 'Agent', rating: '5.0' };
    }
  };

  const details = getServiceDetails();

  return (
    <div className="animate-fade-in-up" style={{ display: 'flex', flexDirection: 'column', height: '100%', alignItems: 'center' }}>
      <div style={{ textAlign: 'center', marginBottom: '40px' }}>
        <h2 style={{ fontSize: '32px', marginBottom: '8px', color: 'var(--success)' }}>Booking Confirmed!</h2>
        <p style={{ color: 'var(--text-muted)' }}>{details.title}. ETA: 15 mins.</p>
      </div>

      {/* Circular Progress */}
      <div style={{ position: 'relative', width: '200px', height: '200px', marginBottom: '48px' }}>
        <svg width="200" height="200" viewBox="0 0 200 200">
          <circle cx="100" cy="100" r="90" fill="none" stroke="var(--glass-border)" strokeWidth="12" />
          <circle 
            cx="100" cy="100" r="90" fill="none" stroke="var(--primary)" strokeWidth="12" 
            strokeDasharray="565.48"
            strokeDashoffset={565.48 - (565.48 * progress) / 100}
            strokeLinecap="round"
            style={{ transition: 'stroke-dashoffset 0.1s linear', transform: 'rotate(-90deg)', transformOrigin: '50% 50%' }}
          />
        </svg>
        <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
          <div style={{ background: 'var(--primary)', padding: '16px', borderRadius: '50%', marginBottom: '8px' }}>
            {details.icon}
          </div>
          <span style={{ fontSize: '24px', fontWeight: 'bold' }}>15<span style={{ fontSize: '14px', color: 'var(--text-muted)', fontWeight: 'normal' }}>m</span></span>
        </div>
      </div>

      {/* Provider Details */}
      <div className="glass-panel" style={{ width: '100%', padding: '24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '32px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <div style={{ width: '56px', height: '56px', borderRadius: '50%', background: '#333', overflow: 'hidden' }}>
            <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80" alt="Provider" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
          <div>
            <h4 style={{ fontSize: '20px', marginBottom: '4px' }}>{details.name}</h4>
            <p style={{ color: 'var(--text-muted)', fontSize: '14px' }}>⭐ {details.rating} Rating</p>
          </div>
        </div>
        
        <div style={{ display: 'flex', gap: '12px' }}>
          <button className="btn" style={{ background: 'var(--glass-bg)', border: '1px solid var(--glass-border)', padding: '12px', borderRadius: '50%', color: 'white' }}>
            <MessageSquare size={20} />
          </button>
          <button className="btn" style={{ background: 'var(--success)', padding: '12px', borderRadius: '50%', color: 'white' }}>
            <Phone size={20} />
          </button>
        </div>
      </div>

      <button className="btn btn-secondary" style={{ width: '100%', padding: '16px' }} onClick={() => navigate('/')}>
        Back to Home
      </button>
    </div>
  );
};

export default BookingStatus;
