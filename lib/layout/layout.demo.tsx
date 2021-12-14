import LayoutExample1 from './layout1.example';
import LayoutExample2 from './layout2.example';
import LayoutExample3 from './layout3.example';
import LayoutExample4 from './layout4.example';
import React, {Fragment} from 'react';
import Demo from '../../demo';
import './layout.demo.scss';

const LayoutDemo = () => {
  return (
    <Fragment>
      <h1>Layout 布局</h1>
      <h2>使用方法</h2>
      <p>使用 <span>Layout</span> 标签，在 <span>Layout</span> 标签中可使用 <span>Header</span>、<span>Aside</span>、<span>Content</span>、<span>Footer</span> 标签，控制页面布局。各个标签可以传入 <span>className</span>
      </p>
      <h2>代码示例</h2>

      <section>
        <h3><span>#</span>示例一</h3>
        <p>在标签中传入 <span>className</span></p>
        <div className="examples">
          <Demo code={require('!!raw-loader!./layout1.example.tsx').default}>
            <LayoutExample1/>
          </Demo>
        </div>
      </section>

      <section>
        <h3><span>#</span>示例二</h3>
        <p>使用 <span>Aside</span> 标签</p>
        <div className="examples">
          <Demo code={require('!!raw-loader!./layout2.example.tsx').default}>
            <LayoutExample2/>
          </Demo>
        </div>
      </section>

      <section>
        <h3><span>#</span>示例三</h3>
        <p>右侧 <span>Aside</span></p>
        <div className="examples">
          <Demo code={require('!!raw-loader!./layout3.example.tsx').default}>
            <LayoutExample3/>
          </Demo>
        </div>
      </section>

      <section>
        <h3><span>#</span>示例四</h3>
        <p>外侧 <span>Aside</span></p>
        <div className="examples">
          <Demo code={require('!!raw-loader!./layout4.example.tsx').default}>
            <LayoutExample4/>
          </Demo>
        </div>
      </section>
    </Fragment>
  );
};

export default LayoutDemo;