import React from 'react';
import Button from './button';

const Button4Example: React.FunctionComponent = () => {
  return (
    <div>
      <Button disabled={true}>disabled按钮</Button>
      <Button type="noBG" disabled={true}>disabled透明按钮</Button>
    </div>
  );
};

export default Button4Example;