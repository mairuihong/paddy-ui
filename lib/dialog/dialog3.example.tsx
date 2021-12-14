import React from 'react';
import {modal} from './dialog';
import Button from '../button/button';

export default function () {
  const openModal1 = () => {
    const close = modal(<h1>你好</h1>, '这里是标题1',
      [<Button level="main" onClick={() => {
        console.log('你点击了确认');
        close();
      }}>确认</Button>,
        <Button onClick={() => close()}>取消</Button>])
  };

  return (
    <div>
      <div>
        <Button level="main" onClick={openModal1}>modal</Button>
      </div>
    </div>
  );
}