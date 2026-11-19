import React, { useRef } from 'react';
import { EMAIL, PRICE } from '../content.js';

const ENQUIRY = `mailto:${EMAIL}?subject=${encodeURIComponent('Website for my business')}&body=${encodeURIComponent(
  'Hi Siddhesh,\n\nI want a website.\n\nBusiness name:\nType of website:\nBudget: ' + PRICE + '\nWhen I need it:\n\nThanks!'
)}`;

const Icons = {
  mail: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <rect x="3" y="5" width="18" height="14" rx="2.5" />
      <path d="m4 7 8 6 8-6" />
    </svg>
  ),
  linkedin: (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M6.94 8.5H3.56V20h3.38V8.5ZM5.25 3a1.96 1.96 0 1 0 0 3.92 1.96 1.96 0 0 0 0-3.92ZM20.44 13.4c0-3.1-1.65-4.54-3.85-4.54-1.78 0-2.57.98-3.02 1.67V8.5h-3.37c.04.95 0 11.5 0 11.5h3.37v-6.42c0-.34.03-.69.13-.93.27-.69.89-1.4 1.94-1.4 1.37 0 1.92 1.05 1.92 2.59V20h3.38v-6.6Z" />
    </svg>
  ),
  phone: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M5 4h3.2l1.6 4-2 1.3a11 11 0 0 0 5 5l1.3-2 4 1.6V17a2 2 0 0 1-2 2A15 15 0 0 1 3 6a2 2 0 0 1 2-2Z" />
    </svg>
  ),
  arrow: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
      <path d="M5 12h14m0 0-5-5m5 5-5 5" />
    </svg>
  ),
};

function Magnetic({ className, label, children, onClick, href }) {
  const ref = useRef(null);
  const onMove = (e) => {
    const r = ref.current.getBoundingClientRect();
    const x = (e.clientX - r.left - r.width / 2) * 0.35;
    const y = (e.clientY - r.top - r.height / 2) * 0.35;
    ref.current.style.transform = `translate(${x}px, ${y}px)`;
  };
  const reset = () => (ref.current.style.transform = '');
  if (href) {
    return (
      <a ref={ref} href={href} className={className} aria-label={label} onMouseMove={onMove} onMouseLeave={reset}>
        {children}
      </a>
    );
  }
  return (
    <button type="button" ref={ref} className={className} aria-label={label} onMouseMove={onMove} onMouseLeave={reset} onClick={onClick}>
      {children}
    </button>
  );
}

export default function Contact() {
  return (
    <div className="ct">
      <span className="mono dim">(07) Contact</span>
      <h2 className="ct-title">
        <span className="ln">
          <span>Let’s build</span>
        </span>
        <span className="ln">
          <span>
            something <em>rare.</em>
          </span>
        </span>
      </h2>
      <p className="ct-price">
        <span className="mono dim">Websites for clients</span>
        <b>{PRICE}</b>
      </p>
      <div className="ct-row">
        <div className="socials">
          <Magnetic className="soc" label="Email" href={`mailto:${EMAIL}?subject=${encodeURIComponent('Hello Siddhesh')}`}>
            {Icons.mail}
          </Magnetic>
          <Magnetic className="soc" label="LinkedIn">
            {Icons.linkedin}
          </Magnetic>
          <Magnetic className="soc" label="Phone">
            {Icons.phone}
          </Magnetic>
        </div>
        <Magnetic className="resume r-idle" label="Get a website" href={ENQUIRY}>
          <span className="resume-ic">{Icons.mail}</span>
          <span className="resume-txt">Get a website</span>
          <span className="resume-fill" />
        </Magnetic>
      </div>
      <footer className="foot">
        <span className="mono dim">© 2026 Siddhesh</span>
        <span className="mono dim">Web · AI · UGC</span>
      </footer>
    </div>
  );
}
