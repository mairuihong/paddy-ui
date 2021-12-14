import React from 'react';
import Button from './button';

const Button2Example: React.FunctionComponent = () => {
  return (
    <div>
      <Button type="noBG">透明按钮</Button>
      <Button level="main" type="noBG">透明按钮</Button>
      <Button level="warning" type="noBG">透明按钮</Button>
      <Button level="danger" type="noBG">透明按钮</Button>
    </div>
  );
};

export default Button2Example;