import React from 'react';
import Button from './button';

const Button6Example: React.FunctionComponent = () => {
  return (
    <div>
      <Button className="123">
        传入的className为 123
      </Button>
      <Button level="main" onClick={() => (window.open('https://www.baidu.com/'))}>
        点击跳转到百度
      </Button>
    </div>
  );
};

export default Button6Example;