import IconExample from './icon.example';
import React, {Fragment} from 'react';
import Demo from '../../demo';
import './icon.demo.scss'

const IconDemo = () => {
  return (
    <Fragment>
      <h1>Icon 图标</h1>
      <h2>使用方法</h2>
      <p>使用 <span>Icon</span> 标签，传入 <span>name</span> 属性，可展示name对应的图标（默认大小为 1.2em）</p>
      <h2>代码示例</h2>
      <div className="examples">
        <Demo code={require('!!raw-loader!./icon.example.tsx').default}>
          <IconExample/>
        </Demo>
      </div>
    </Fragment>
  );
};

export default IconDemo;