import React from 'react';
import {alert, confirm} from './dialog';
import Button from '../button/button';

export default function () {
  return (
    <div>
      <div>
        <Button level="main" onClick={() => alert('hi!', '这里是标题')}>
          alert
        </Button>
        <Button level="main" onClick={() => confirm('h1!', '这里是标题',
          () => {console.log('你点击了Yes');},
          () => {console.log('你点击了No');})}>
          confirm
        </Button>
      </div>
    </div>
  );
}