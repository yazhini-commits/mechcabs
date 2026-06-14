import { useNavigate } from 'react-router-dom';
import { ShieldCheck, Clock, MapPin } from 'lucide-react';

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section style={{ padding: '80px 0 40px', position: 'relative' }}>
      {/* Decorative blobs */}
      <div style={{
        position: 'absolute', top: '10%', right: '5%', width: '300px', height: '300px',
        background: 'rgba(249, 115, 22, 0.1)', filter: 'blur(80px)', borderRadius: '50%', zIndex: -1
      }}></div>
      <div style={{
        position: 'absolute', bottom: '10%', left: '5%', width: '250px', height: '250px',
        background: 'rgba(34, 211, 238, 0.1)', filter: 'blur(80px)', borderRadius: '50%', zIndex: -1
      }}></div>

      <div className="container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
        <div className="animate-fade-in-up" style={{
          display: 'inline-block', padding: '8px 16px', borderRadius: '30px',
          background: 'rgba(249, 115, 22, 0.1)', color: 'var(--primary)',
          fontWeight: 600, marginBottom: '24px', border: '1px solid rgba(249, 115, 22, 0.2)'
        }}>
          🚀 24/7 Emergency Roadside Assistance
        </div>
        
        <h1 className="animate-fade-in-up delay-100" style={{ fontSize: '64px', lineHeight: 1.1, marginBottom: '24px', maxWidth: '800px' }}>
          Stranded? We'll get you <span className="text-gradient">back on the road</span> in minutes.
        </h1>
        
        <p className="animate-fade-in-up delay-200" style={{ fontSize: '20px', color: 'var(--text-muted)', marginBottom: '40px', maxWidth: '600px', lineHeight: 1.6 }}>
          Instant connection to nearby mechanics, tow trucks, and emergency cabs. Your safety is our priority.
        </p>
        
        <div className="animate-fade-in-up delay-300 flex-center" style={{ gap: '16px', marginBottom: '64px' }}>
          <button className="btn btn-primary" style={{ fontSize: '18px', padding: '16px 32px' }} onClick={() => document.getElementById('services').scrollIntoView({ behavior: 'smooth' })}>
            Request Assistance Now
          </button>
          <button className="btn btn-secondary" style={{ fontSize: '18px', padding: '16px 32px' }} onClick={() => navigate('/book/cab')}>
            Book a Cab Instead
          </button>
        </div>

        <div id="how-it-works" className="animate-fade-in-up delay-300" style={{ display: 'flex', gap: '48px', flexWrap: 'wrap', justifyContent: 'center' }}>
          {[
            { icon: <Clock color="var(--primary)" size={28} />, text: '15 Min Avg. Response' },
            { icon: <ShieldCheck color="var(--success)" size={28} />, text: 'Verified Mechanics' },
            { icon: <MapPin color="var(--accent)" size={28} />, text: 'Live Tracking' }
          ].map((feature, idx) => (
            <div key={idx} className="flex-center" style={{ gap: '12px' }}>
              <div style={{ background: 'var(--glass-bg)', padding: '12px', borderRadius: '50%', border: '1px solid var(--glass-border)' }}>
                {feature.icon}
              </div>
              <span style={{ fontSize: '18px', fontWeight: 500, color: '#e2e8f0' }}>{feature.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
