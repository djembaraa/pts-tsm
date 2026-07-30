import React from 'react';

export const List = ({ children, type = 'unordered', className = '' }) => {
  const Component = type === 'ordered' ? 'ol' : 'ul';
  const listStyles = type === 'ordered' 
    ? 'list-decimal list-inside space-y-2 my-5 text-text' 
    : 'list-disc list-inside space-y-2 my-5 text-text marker:text-accent';

  return (
    <Component className={`${listStyles} ${className}`}>
      {children}
    </Component>
  );
};

export const ListItem = ({ children }) => (
  <li className="pl-1 leading-relaxed">{children}</li>
);

export default List;
