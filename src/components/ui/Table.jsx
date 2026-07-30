import React from 'react';

const Table = ({ children, className = '' }) => {
  return (
    <div className="overflow-x-auto my-6">
      <table className={`w-full border-collapse text-[0.9rem] ${className}`}>
        {children}
      </table>
    </div>
  );
};

export const TableHead = ({ children }) => (
  <thead className="bg-navy text-white text-left font-bold border-b border-border">
    {children}
  </thead>
);

export const TableBody = ({ children }) => (
  <tbody className="[&>tr:nth-child(even)]:bg-gray [&>tr>td]:border-b [&>tr>td]:border-border">
    {children}
  </tbody>
);

export const TableRow = ({ children }) => (
  <tr>{children}</tr>
);

export const TableHeader = ({ children }) => (
  <th className="p-[0.75rem_1rem] font-bold">{children}</th>
);

export const TableCell = ({ children, isFirst }) => (
  <td className={`p-[0.75rem_1rem] ${isFirst ? 'font-bold text-navy w-[45%]' : 'text-text'}`}>
    {children}
  </td>
);

export default Table;
