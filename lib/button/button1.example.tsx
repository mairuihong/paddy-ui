import React from 'react';
import Button from './button';

const Button1Example: React.FunctionComponent = () => {
  return (
    <div>
      <Button>普通按钮</Button>
      <Button level="main">主要按钮</Button>
      <Button level="warning">警告按钮</Button>
      <Button level="danger">危险按钮</Button>
    </div>
  );
};

export default Button1Example;