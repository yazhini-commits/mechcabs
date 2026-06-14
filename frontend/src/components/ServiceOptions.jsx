import { useNavigate } from 'react-router-dom';
import { Wrench, Fuel, Truck, Car } from 'lucide-react';

const services = [
  {
    id: 'mechanic',
    title: 'Mechanic',
    description: 'Engine issues, flat tire, or battery jumpstart.',
    icon: <Wrench size={40} color="var(--primary)" />,
    color: 'var(--primary)'
  },
  {
    id: 'tow',
    title: 'Tow Truck',
    description: 'Safe transport for your broken-down vehicle.',
    icon: <Truck size={40} color="#8b5cf6" />,
    color: '#8b5cf6'
  },
  {
    id: 'fuel',
    title: 'Fuel Delivery',
    description: 'Ran out of gas? We will deliver it to your location.',
    icon: <Fuel size={40} color="#10b981" />,
    color: '#10b981'
  },
  {
    id: 'cab',
    title: 'Cab/Bike',
    description: 'Need to leave your car? Book an emergency ride.',
    icon: <Car size={40} color="var(--secondary)" />,
    color: 'var(--secondary)'
  }
];

const ServiceOptions = () => {
  const navigate = useNavigate();

  return (
    <section id="services" className="container" style={{ padding: '80px 24px' }}>
      <div style={{ textAlign: 'center', marginBottom: '48px' }}>
        <h2 style={{ fontSize: '40px', marginBottom: '16px' }}>What do you need help with?</h2>
        <p style={{ fontSize: '18px', color: 'var(--text-muted)' }}>Select a service to find nearby assistance instantly.</p>
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
        gap: '24px'
      }}>
        {services.map((service, idx) => (
          <div 
            key={service.id}
            className="glass-panel"
            style={{
              padding: '32px 24px',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              position: 'relative',
              overflow: 'hidden',
              animation: `fadeInUp 0.5s ease ${idx * 0.1}s forwards`,
              opacity: 0,
              transform: 'translateY(20px)'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-8px)';
              e.currentTarget.style.borderColor = service.color;
              e.currentTarget.style.boxShadow = `0 12px 40px rgba(0,0,0,0.5), 0 0 20px ${service.color}20`;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.borderColor = 'var(--glass-border)';
              e.currentTarget.style.boxShadow = 'var(--glass-shadow)';
            }}
            onClick={() => navigate(`/book/${service.id}`)}
          >
            <div style={{
              background: `${service.color}15`,
              width: '80px',
              height: '80px',
              borderRadius: '20px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: '24px'
            }}>
              {service.icon}
            </div>
            <h3 style={{ fontSize: '24px', marginBottom: '12px' }}>{service.title}</h3>
            <p style={{ color: 'var(--text-muted)', lineHeight: 1.5 }}>{service.description}</p>
            
            {/* Hover Arrow */}
            <div style={{ marginTop: '24px', color: service.color, fontWeight: 600, display: 'flex', alignItems: 'center', gap: '8px' }}>
              Request Now <span style={{ fontSize: '18px' }}>→</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServiceOptions;
