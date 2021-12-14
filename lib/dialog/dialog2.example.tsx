import React, {useState} from 'react';
import Dialog from './dialog';
import Button from '../button/button';

export default function () {
  const [x, setX] = useState(false);

  return (
    <div>
      <div>
        <Button level="main" onClick={() => setX(!x)}>click</Button>
        <Dialog visible={x} closeOnClickMask={true} buttons={
          [
            <Button onClick={() => {setX(false);}}>1</Button>,
            <Button onClick={() => {setX(false);}}>2</Button>
          ]
        } onClose={() => {setX(false);}}>
          <strong>hi</strong>
        </Dialog>
      </div>
    </div>
  );
}