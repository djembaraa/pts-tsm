import React from 'react';
import { CheckCircle2 } from 'lucide-react';

export const List = ({ children, type = 'unordered', className = '' }) => {
  const Component = type === 'ordered' ? 'ol' : 'ul';
  
  if (type === 'ordered') {
    return (
      <ol className={`list-decimal list-outside pl-5 space-y-3 my-6 text-text marker:text-navy marker:font-bold ${className}`}>
        {children}
      </ol>
    );
  }

  // Unordered list gets modern checkmarks
  return (
    <ul className={`flex flex-col gap-3 my-6 ${className}`}>
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, { type: 'unordered' });
        }
        return child;
      })}
    </ul>
  );
};

export const ListItem = ({ children, type, ...props }) => {
  if (type === 'unordered') {
    return (
      <li className="flex items-start gap-3" {...props}>
        <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-[2px]" />
        <span className="leading-relaxed text-text">{children}</span>
      </li>
    );
  }
  
  // Ordered list fallback
  return (
    <li className="pl-2 leading-relaxed" {...props}>{children}</li>
  );
};

export default List;
