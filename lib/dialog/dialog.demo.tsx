import DialogExample1 from './dialog1.example';
import DialogExample2 from './dialog2.example';
import DialogExample3 from './dialog3.example';
import DialogExample4 from './dialog4.example';
import React, {Fragment} from 'react';
import Demo from '../../demo';

const DialogDemo = () => {
  return (
    <Fragment>
      <h1>Dialog 对话框</h1>
      <h2>使用方法</h2>
      <p>使用 <span>Dialog</span> 标签，通过传入 <span>title</span> (<span>string</span>)、<span>buttons</span> (<span>{`Array<ReactElement>`}</span>)、<span>onClose</span> ( <span>React.MouseEventHandler</span>)、<span>closeOnClickMask</span> ( <span>Boolean</span>) 属性，控制对话框的样式和功能</p>
      <h2>代码示例</h2>

      <section>
        <h3><span>#</span>基本使用方法</h3>
        <p>传入 <span>visible</span> 属性，使用 <span>useState</span> ([x, setX] = useState(false)) 控制 <span>Dialog</span> 出现和消失。与 <span>onClose</span> 属性结合使用，在标签中传入 onclose 函数 (onClose={`{() => {setX(false);}}`})</p>
        <p>使用 <span>title</span> 属性，自定义对话框的标题（默认标题为“提示”）。使用 <span>buttons</span> 属性，传入按钮的数组，对话框底部显示传入的按钮, 可自定义按钮功能</p>
        <div className="examples">
          <Demo code={require('!!raw-loader!./dialog1.example.tsx').default}>
            <DialogExample1/>
          </Demo>
        </div>
      </section>

      <section>
        <h3><span>#</span>可点击遮罩层关闭对话框</h3>
        <p>使用 <span>closeOnClickMask</span> 属性 (closeOnClickMask={'true'})，可点击遮罩层关闭对话框</p>
        <div className="examples">
          <Demo code={require('!!raw-loader!./dialog2.example.tsx').default}>
            <DialogExample2/>
          </Demo>
        </div>
      </section>

      <section>
        <h3><span>#</span>使用 modal 生成对话框</h3>
        <p>使用 <span>model</span> 函数，传入 <span>content</span> (<span>ReactNode</span>)、<span>title</span>、<span>buttons</span> 生成对话框，按钮的 onClick 事件可直接使用 <span>close()</span> 函数，点击关闭对话框。onClick 事件中可传入其他函数</p>
        <div className="examples">
          <Demo code={require('!!raw-loader!./dialog3.example.tsx').default}>
            <DialogExample3/>
          </Demo>
        </div>
      </section>

      <section>
        <h3><span>#</span>警告对话框 和 确认对话框</h3>
        <p>使用 <span>alert</span> 函数，传入 <span>content</span> (<span>string</span>) 和 <span>title</span> 快速生成警告对话框。点击按钮可关闭对话框</p>
        <p>使用 <span>confirm</span> 函数，传入 <span>content</span>、<span>title</span>、<span>yes</span>（点击Yes按钮触发的函数）、<span>no</span>（点击No按钮触发的函数） 快速生成确认对话框。点击任意按钮可关闭对话框</p>
        <div className="examples">
          <Demo code={require('!!raw-loader!./dialog4.example.tsx').default}>
            <DialogExample4/>
          </Demo>
        </div>
      </section>
    </Fragment>
  );
};

export default DialogDemo;