import React, { ReactNode } from 'react';

type Props = {
  className?: string;
  children: ReactNode;
};

const BodyText: React.FC<Props> = ({ className, children }) => {
  return (
    <p
      className={`dark:text-gray-200 text-gray-950 leading-6 ${
        className || ''
      }`}
    >
      {children}
    </p>
  );
};

export default BodyText;
