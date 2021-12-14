import React from 'react';
import Button from './button';
import Icon from '../icon/icon';

const Button5Example: React.FunctionComponent = () => {
  return (
    <div>
      <Button>
        <Icon name="qq" style={{width: '1.5em', height: '1.5em'}}/>QQ登录
      </Button>
      <Button level="main">
        <Icon name="wechat" style={{width: '1.5em', height: '1.5em'}}/>QQ登录
      </Button>
    </div>
  );
};

export default Button5Example;