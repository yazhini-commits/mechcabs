import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ShieldCheck } from 'lucide-react';

const SignIn = () => {
  const navigate = useNavigate();
  const [phone, setPhone] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (phone.length >= 10) {
      alert('OTP Sent to ' + phone);
      navigate('/');
    } else {
      alert('Please enter a valid phone number');
    }
  };

  return (
    <div className="container flex-center" style={{ padding: '80px 24px', minHeight: 'calc(100vh - 80px)' }}>
      <div className="glass-panel animate-fade-in-up" style={{ padding: '48px', maxWidth: '400px', width: '100%', textAlign: 'center' }}>
        <div style={{ background: 'rgba(249, 115, 22, 0.1)', padding: '24px', borderRadius: '50%', marginBottom: '24px', display: 'inline-block' }}>
          <ShieldCheck size={48} color="var(--primary)" />
        </div>
        <h2 style={{ fontSize: '32px', marginBottom: '16px' }}>Welcome Back</h2>
        <p style={{ color: 'var(--text-muted)', marginBottom: '32px' }}>Sign in to track your requests and history.</p>

        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          <div style={{ textAlign: 'left' }}>
            <label style={{ display: 'block', marginBottom: '8px', color: 'var(--text-muted)', fontSize: '14px' }}>Phone Number</label>
            <input 
              type="tel" 
              placeholder="Enter your phone number" 
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              style={{
                width: '100%',
                padding: '16px',
                background: 'var(--glass-bg)',
                border: '1px solid var(--glass-border)',
                borderRadius: '8px',
                color: 'white',
                outline: 'none',
                fontSize: '16px'
              }}
              onFocus={(e) => e.target.style.borderColor = 'var(--primary)'}
              onBlur={(e) => e.target.style.borderColor = 'var(--glass-border)'}
            />
          </div>
          
          <button type="submit" className="btn btn-primary" style={{ width: '100%', padding: '16px', fontSize: '16px' }}>
            Send OTP
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
