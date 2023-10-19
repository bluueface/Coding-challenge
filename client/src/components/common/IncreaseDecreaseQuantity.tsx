import React, { PropsWithChildren } from 'react';

interface Props {
  quantity: number;
  onChange: (number: number) => void;
  className: string;
}
const IncreaseDecreaseQuantity: React.FunctionComponent<
  PropsWithChildren<Props>
> = (props) => {
  const { children, quantity, onChange, className } = props;
  return (
    <div className="actions">
      <span>Quantity: </span>
      <div className={className}>
        <button
          onClick={() => onChange(quantity - 1)}
          disabled={quantity === 1}
        >
          -
        </button>
        <span>{quantity}</span>
        <button onClick={() => onChange(quantity + 1)}>+</button>
      </div>
      {children}
    </div>
  );
};
export default IncreaseDecreaseQuantity;
