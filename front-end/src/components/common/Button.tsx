import React, { PropsWithChildren } from 'react';

interface Props {
  label: string;
  onClick: () => void;
  className: string;
}
const Button: React.FunctionComponent<PropsWithChildren<Props>> = (props) => {
  const { children, label, onClick, className } = props;
  return (
    <button className={className} onClick={onClick}>
      <span>{label}</span>
      {children}
    </button>
  );
};
export default Button;
