import React from 'react';
import Button from './button';

const Button3Example: React.FunctionComponent = () => {
  return (
    <div>
      <Button type="noBG" loading={true}>loading透明按钮</Button>
      <Button loading={true}>loading按钮</Button>
      <Button level="main" loading={true}>loading按钮</Button>
    </div>
  );
};

export default Button3Example;