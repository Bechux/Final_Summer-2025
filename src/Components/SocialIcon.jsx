// components/SocialIcon.jsx
export default function SocialIcon({ href, label, children }) {
    return (
      <a
        href={href}
        className="social-icon"
        target="_blank"
        rel="noopener noreferrer"
        aria-label={label}
      >
        {children}
      </a>
    );
  }