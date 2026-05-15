import { MapPin, Navigation } from 'lucide-react';

const MapLocator = ({ service, onConfirm, onCancel }) => {
  return (
    <div className="animate-fade-in-up" style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
      <h2 style={{ fontSize: '28px', marginBottom: '8px', textAlign: 'center' }}>Confirm Your Location</h2>
      <p style={{ color: 'var(--text-muted)', textAlign: 'center', marginBottom: '24px' }}>
        We need your exact location to send the nearest {service === 'cab' ? 'driver' : 'mechanic'}.
      </p>

      {/* Mock Map Area */}
      <div style={{
        flex: 1,
        background: 'url("https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=1000&q=80") center/cover',
        borderRadius: '16px',
        position: 'relative',
        minHeight: '300px',
        border: '1px solid var(--glass-border)',
        overflow: 'hidden',
        marginBottom: '24px'
      }}>
        {/* Dark overlay to match theme */}
        <div style={{ position: 'absolute', inset: 0, background: 'rgba(10, 10, 15, 0.4)' }}></div>
        
        {/* Fake Pin */}
        <div style={{
          position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
          display: 'flex', flexDirection: 'column', alignItems: 'center', animation: 'bounce 2s infinite'
        }}>
          <div style={{ background: 'var(--primary)', padding: '12px', borderRadius: '50%', boxShadow: '0 0 20px var(--primary)' }}>
            <MapPin color="white" size={32} />
          </div>
          <div style={{ width: '16px', height: '4px', background: 'rgba(0,0,0,0.5)', borderRadius: '50%', marginTop: '8px', filter: 'blur(2px)' }}></div>
        </div>

        {/* Map Controls Mock */}
        <button style={{
          position: 'absolute', bottom: '16px', right: '16px',
          background: 'var(--glass-bg)', backdropFilter: 'blur(8px)',
          border: '1px solid var(--glass-border)', padding: '12px', borderRadius: '50%',
          cursor: 'pointer', color: 'white'
        }}>
          <Navigation size={24} />
        </button>
      </div>

      <div style={{ background: 'var(--glass-bg)', padding: '16px', borderRadius: '12px', marginBottom: '24px', border: '1px solid var(--glass-border)' }}>
        <p style={{ fontSize: '14px', color: 'var(--text-muted)', marginBottom: '4px' }}>Current Location</p>
        <p style={{ fontSize: '18px', fontWeight: 500 }}>123 Main Street, Downtown</p>
      </div>

      <div style={{ display: 'flex', gap: '16px', marginTop: 'auto' }}>
        <button className="btn btn-secondary" style={{ flex: 1 }} onClick={onCancel}>Cancel</button>
        <button className="btn btn-primary" style={{ flex: 2 }} onClick={onConfirm}>Confirm Location</button>
      </div>
    </div>
  );
};

export default MapLocator;
