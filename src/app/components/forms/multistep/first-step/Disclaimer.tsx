import React from 'react';

const Disclaimer: React.FC<{ content: string }> = ({ content }) => {
  return <div className="border border-red-200 p-4 rounded-lg">{content}</div>;
};

export default Disclaimer;
