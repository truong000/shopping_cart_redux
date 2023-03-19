import React from "react";

interface TotalProps {
  totalPrice: number;
}

export const Total: React.FC<TotalProps> = ({
  totalPrice,
}: TotalProps): JSX.Element => {
  return (
    <div>
      <h3>Total Price</h3>
      <p>{totalPrice}</p>
    </div>
  );
};