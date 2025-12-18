import { useState, MouseEvent, ReactNode } from 'react';

interface RippleButtonProps {
  children: ReactNode;
  className?: string;
  href?: string;
  onClick?: () => void;
}

interface Ripple {
  x: number;
  y: number;
  id: number;
}

const RippleButton = ({ children, className = '', href, onClick }: RippleButtonProps) => {
  const [ripples, setRipples] = useState<Ripple[]>([]);

  const handleClick = (e: MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const id = Date.now();

    setRipples(prev => [...prev, { x, y, id }]);
    
    setTimeout(() => {
      setRipples(prev => prev.filter(r => r.id !== id));
    }, 600);

    onClick?.();
  };

  const content = (
    <>
      {ripples.map(ripple => (
        <span
          key={ripple.id}
          className="absolute rounded-full bg-white/30 animate-ripple pointer-events-none"
          style={{
            left: ripple.x,
            top: ripple.y,
            transform: 'translate(-50%, -50%)',
          }}
        />
      ))}
      {children}
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        className={`relative overflow-hidden ${className}`}
        onClick={handleClick}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      className={`relative overflow-hidden ${className}`}
      onClick={handleClick}
    >
      {content}
    </button>
  );
};

export default RippleButton;
