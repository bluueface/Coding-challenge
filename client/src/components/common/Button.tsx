import React from 'react';

interface Props {
  label: string;
  onClick: () => void;
  className: string;
}
const Button: React.FunctionComponent<Props> = (props) => {
  const { label, onClick, className } = props;
  return (
    <button className={className} onClick={onClick}>
      {label}
    </button>
  );
};
export default Button;
