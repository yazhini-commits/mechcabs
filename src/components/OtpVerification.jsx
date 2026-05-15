import { useState } from 'react';
import { ShieldCheck } from 'lucide-react';

const OtpVerification = ({ onVerify, onCancel }) => {
  const [otp, setOtp] = useState(['', '', '', '']);
  const [error, setError] = useState('');

  const handleChange = (index, value) => {
    if (isNaN(value)) return;
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Auto-focus next input
    if (value !== '' && index < 3) {
      document.getElementById(`otp-${index + 1}`).focus();
    }
  };

  const handleVerify = () => {
    const code = otp.join('');
    if (code.length === 4) {
      // Mock verification success
      onVerify();
    } else {
      setError('Please enter a valid 4-digit OTP.');
    }
  };

  return (
    <div className="animate-fade-in-up flex-center" style={{ flexDirection: 'column', height: '100%', textAlign: 'center', padding: '40px 0' }}>
      <div style={{
        background: 'rgba(34, 211, 238, 0.1)',
        padding: '24px',
        borderRadius: '50%',
        marginBottom: '24px'
      }}>
        <ShieldCheck size={64} color="var(--accent)" />
      </div>

      <h2 style={{ fontSize: '32px', marginBottom: '16px' }}>Verify Your Request</h2>
      <p style={{ color: 'var(--text-muted)', marginBottom: '40px', maxWidth: '400px', lineHeight: 1.6 }}>
        For your security, we've sent a 4-digit One Time Password (OTP) to your registered mobile number.
      </p>

      <div style={{ display: 'flex', gap: '16px', marginBottom: '32px' }}>
        {otp.map((digit, idx) => (
          <input
            key={idx}
            id={`otp-${idx}`}
            type="text"
            maxLength="1"
            value={digit}
            onChange={(e) => handleChange(idx, e.target.value)}
            style={{
              width: '64px',
              height: '72px',
              fontSize: '32px',
              textAlign: 'center',
              background: 'var(--glass-bg)',
              border: `2px solid ${digit ? 'var(--accent)' : 'var(--glass-border)'}`,
              borderRadius: '12px',
              color: 'white',
              outline: 'none',
              transition: 'border-color 0.3s'
            }}
            onFocus={(e) => e.target.style.borderColor = 'var(--accent)'}
            onBlur={(e) => e.target.style.borderColor = digit ? 'var(--accent)' : 'var(--glass-border)'}
          />
        ))}
      </div>

      {error && <p style={{ color: 'var(--danger)', marginBottom: '16px' }}>{error}</p>}

      <div style={{ display: 'flex', gap: '16px', width: '100%', maxWidth: '400px' }}>
        <button className="btn btn-secondary" style={{ flex: 1 }} onClick={onCancel}>Back</button>
        <button className="btn btn-blue" style={{ flex: 2 }} onClick={handleVerify}>Verify & Continue</button>
      </div>

      <p style={{ marginTop: '32px', color: 'var(--text-muted)', fontSize: '14px' }}>
        Didn't receive the code? <span style={{ color: 'var(--accent)', cursor: 'pointer', fontWeight: 600 }}>Resend</span>
      </p>
    </div>
  );
};

export default OtpVerification;
