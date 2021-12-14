import React, {Fragment, ReactElement, ReactNode} from 'react';
import ReactDOM from 'react-dom';
import './dialog.scss';
import {Icon} from '../index';
import {scopedClassMaker} from '../helpers/classes';
import Button from '../button/button';

interface Props {
  visible: boolean;
  title?: string;
  buttons?: Array<ReactElement>;
  onClose: React.MouseEventHandler;
  closeOnClickMask?: boolean;
}

const scopedClass = scopedClassMaker('paddy-dialog');
const sc = scopedClass;

const Dialog: React.FunctionComponent<Props> = (props) => {
  const onClickClose: React.MouseEventHandler = (e) => {
    props.onClose(e);
  };
  const onClickMask: React.MouseEventHandler = (e) => {
    if (props.closeOnClickMask) {
      props.onClose(e);
    }
  };
  const result = props.visible &&
    <Fragment>
      <div className={sc('mask')} onClick={onClickMask}>
      </div>
      <div className={sc('')}>
        <div className={sc('close')} onClick={onClickClose}>
          <Icon name="close"/>
        </div>
        <header className={sc('header')}>
          {props.title ? props.title : '提示'}
        </header>
        <main className={sc('main')}>
          {props.children}
        </main>
        {props.buttons && props.buttons.length > 0 &&
        <footer className={sc('footer')}>
          {props.buttons && props.buttons.map((button, index) =>
            React.cloneElement(button, {key: index})
          )}
        </footer>
        }
      </div>
    </Fragment>;
  return (
    ReactDOM.createPortal(result, document.body)
  );
};

Dialog.defaultProps = {
  closeOnClickMask: false
};

const modal = (content: ReactNode, titles?: string, buttons?: Array<ReactElement>, afterClose?: () => void) => {
  const close = () => {
    ReactDOM.render(React.cloneElement(component, {visible: false}), div);
    ReactDOM.unmountComponentAtNode(div);
    div.remove();
  };
  const component =
    <Dialog
      visible={true}
      title={titles}
      buttons={buttons}
      onClose={() => {
        close();
        afterClose && afterClose();
      }}>
      {content}
    </Dialog>;
  const div = document.createElement('div');
  document.body.append(div);
  ReactDOM.render(component, div);
  return close;
};

const alert = (content: string, title?: string) => {
  const button = <Button level="warning" onClick={() => close()}>OK</Button>;
  const close = modal(content, title, [button]);
};

const confirm = (content: string, title?: string, yes?: () => void, no?: () => void) => {
  const onYes = () => {
    close();
    yes && yes();
  };
  const onNo = () => {
    close();
    no && no();
  };
  const buttons = [
    <Button level="main" onClick={onYes}>Yes</Button>,
    <Button onClick={onNo}>No</Button>
  ];
  const close = modal(content, title, buttons, no);
};

export {alert, confirm, modal};
export default Dialog;