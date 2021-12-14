import ButtonExample1 from './button1.example';
import ButtonExample2 from './button2.example';
import ButtonExample3 from './button3.example';
import ButtonExample4 from './button4.example';
import ButtonExample5 from './button5.example';
import ButtonExample6 from './button6.example';
import React, {Fragment} from 'react';
import Demo from '../../demo';

const ButtonDemo = () => {
  return (
    <Fragment>
      <h1>Button 按钮</h1>
      <h2>使用方法</h2>
      <p>使用 <span>Button</span> 标签，包含 <span>level</span>、<span>type</span>、<span>loading</span>、<span>disabled</span> 属性，传入对用属性控制按钮的样式</p>
      <h2>代码示例</h2>

      <section>
        <h3><span>#</span>四种按钮类型</h3>
        <p>使用 <span>level</span> 属性，选择按钮类型。level 属性包括 <span>main</span>、<span>warning</span>、<span>danger</span>（默认为普通按钮）</p>
        <div className="examples">
          <Demo code={require('!!raw-loader!./button1.example.tsx').default}>
            <ButtonExample1/>
          </Demo>
        </div>
      </section>

      <section>
        <h3><span>#</span>透明按钮</h3>
        <p>使用 <span>type</span> 属性，控制按钮背景色是否透明。type 属性包括 <span>noBG</span>（默认为有背景色按钮）</p>
        <div className="examples" style={{background: '#d9d9d9', borderRadius: '8px'}}>
          <Demo code={require('!!raw-loader!./button2.example.tsx').default}>
            <ButtonExample2/>
          </Demo>
        </div>
      </section>

      <section>
        <h3><span>#</span>loading状态按钮</h3>
        <p>使用 <span>loading</span> 属性（loading={'{true}'}），设置按钮为 loading 状态</p>
        <div className="examples" style={{background: '#d9d9d9', borderRadius: '8px'}}>
          <Demo code={require('!!raw-loader!./button3.example.tsx').default}>
            <ButtonExample3/>
          </Demo>
        </div>
      </section>

      <section>
        <h3><span>#</span>disabled状态按钮</h3>
        <p>使用 <span>disabled</span> 属性（disable={'{true}'}），设置按钮为 disabled 状态</p>
        <div className="examples">
          <Demo code={require('!!raw-loader!./button4.example.tsx').default}>
            <ButtonExample4/>
          </Demo>
        </div>
      </section>

      <section>
        <h3><span>#</span>与 Icon 结合使用</h3>
        <p>在 <span>Button</span> 中可加入 Icon 图标</p>
        <div className="examples">
          <Demo code={require('!!raw-loader!./button5.example.tsx').default}>
            <ButtonExample5/>
          </Demo>
        </div>
      </section>

      <section>
        <h3><span>#</span>支持传入 onClick 和额外的 className</h3>
        <p>可传入 <span>onClick</span> 控制点击事件，支持传入额外的 <span>className</span></p>
        <div className="examples">
          <Demo code={require('!!raw-loader!./button6.example.tsx').default}>
            <ButtonExample6/>
          </Demo>
        </div>
      </section>
    </Fragment>
  );
};

export default ButtonDemo;