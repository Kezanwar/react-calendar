import React, { ReactNode } from 'react';

type Props = {
  variant: 'md' | 'lg';
  className: string;
  children: ReactNode;
};

const Heading: React.FC<Props> = ({ variant, className, children }) => {
  if (variant === 'lg') return <h2 className={`${className}`}>{children}</h2>;
  if (variant === 'md') return <h3 className={`${className}`}>{children}</h3>;
  else return <h2 className={`${className}`}>{children}</h2>;
};

export default Heading;
