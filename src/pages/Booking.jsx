import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import MapLocator from '../components/MapLocator';
import OtpVerification from '../components/OtpVerification';
import BookingStatus from '../components/BookingStatus';

const Booking = () => {
  const { service } = useParams();
  const navigate = useNavigate();
  const [step, setStep] = useState('LOCATE'); // LOCATE -> OTP -> STATUS

  const handleLocationConfirm = () => {
    setStep('OTP');
  };

  const handleOtpVerify = () => {
    setStep('STATUS');
  };

  const handleCancel = () => {
    navigate('/');
  };

  return (
    <div className="container" style={{ padding: '40px 24px', maxWidth: '800px' }}>
      <div className="glass-panel" style={{ padding: '32px', minHeight: '600px', display: 'flex', flexDirection: 'column' }}>
        
        {/* Progress Bar */}
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '40px', position: 'relative' }}>
          <div style={{ position: 'absolute', top: '50%', left: 0, right: 0, height: '2px', background: 'var(--glass-border)', zIndex: 0 }}></div>
          
          {['LOCATE', 'OTP', 'STATUS'].map((s, i) => {
            const isActive = step === s;
            const isPast = ['LOCATE', 'OTP', 'STATUS'].indexOf(step) >= i;
            return (
              <div key={s} style={{ 
                zIndex: 1, 
                background: isPast ? 'var(--primary)' : 'var(--bg-dark)',
                width: '32px', height: '32px', borderRadius: '50%',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                border: `2px solid ${isPast ? 'var(--primary)' : 'var(--glass-border)'}`,
                color: isPast ? '#fff' : 'var(--text-muted)',
                fontWeight: 'bold',
                boxShadow: isActive ? '0 0 15px var(--primary)' : 'none',
                transition: 'all 0.3s'
              }}>
                {i + 1}
              </div>
            );
          })}
        </div>

        {/* Dynamic Content */}
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
          {step === 'LOCATE' && <MapLocator service={service} onConfirm={handleLocationConfirm} onCancel={handleCancel} />}
          {step === 'OTP' && <OtpVerification onVerify={handleOtpVerify} onCancel={() => setStep('LOCATE')} />}
          {step === 'STATUS' && <BookingStatus service={service} />}
        </div>

      </div>
    </div>
  );
};

export default Booking;
