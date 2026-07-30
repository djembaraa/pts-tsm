import React from 'react';
import { Link } from 'react-router-dom';

const Button = ({ 
  children, 
  to, 
  href, 
  variant = 'primary', 
  className = '',
  icon,
  target,
  rel,
  ...props 
}) => {
  const baseClasses = "inline-flex items-center justify-center gap-[0.46rem] py-[0.78rem] px-[1.75rem] font-bold text-[0.86rem] tracking-[0.05em] uppercase rounded-[6px] transition-all duration-300 hover:-translate-y-[2px] cursor-pointer";
  
  const variants = {
    primary: "border-2 border-transparent bg-accent text-white shadow-[0_4px_20px_rgba(0,180,216,0.32)] hover:bg-white hover:text-blue",
    blue: "border-2 border-blue text-blue hover:bg-blue hover:text-white",
    'solid-blue': "border-2 border-transparent bg-blue text-white hover:bg-navy hover:shadow-[0_6px_20px_rgba(13,95,168,0.35)]",
    white: "border-2 border-transparent bg-white text-blue shadow-[0_4px_20px_rgba(0,0,0,0.12)] hover:bg-navy hover:text-white",
    ghost: "border-2 border-white/55 text-white hover:bg-white/10 hover:border-white"
  };

  const finalClasses = `${baseClasses} ${variants[variant] || variants.primary} ${className}`;

  const content = (
    <>
      {icon && <span>{icon}</span>}
      {children}
    </>
  );

  if (to) {
    return <Link to={to} className={finalClasses} target={target} rel={rel} {...props}>{content}</Link>;
  }

  if (href) {
    return <a href={href} className={finalClasses} target={target} rel={rel} {...props}>{content}</a>;
  }

  return (
    <button className={finalClasses} {...props}>
      {content}
    </button>
  );
};

export default Button;
