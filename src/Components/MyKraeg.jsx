// src/components/MyKraeg.jsx
import './MyKraeg.css';
import poster from '../assets/images/poster.jpg';

export default function MyKraeg() {
  return (
    <section className="my-kraeg">
      <h1>My Kræg</h1>
      <div className="poster-wrapper">
        <img src={poster} alt="My Kræg poster" className="poster-image" />
      </div>
      <div className="kraeg-description">
        <p><strong>You can access your “My Kræg” application by scanning the QR code using your mobile device.</strong></p>
        <p>“My Kræg” is an application that provides you with a personalized buddy who will journey through the museum with you, growing as you learn more facts and unlocking accessories on the go.</p>
      </div>
    </section>
  );
}
