import React, {PropsWithChildren} from 'react';
import './button.scss';

interface Props {
  className?: string;
  level?: string;
  type?: string;
  loading?: boolean;
  disabled?: boolean;
  onClick?: React.MouseEventHandler;
}


const Button: React.FunctionComponent<Props> = (props) => {
  const addClassName = (props: PropsWithChildren<Props>) => {
    const classNames: string[] = [];
    if (props.level) {classNames.push(`paddyBtn-level-${props.level}`);}
    if (props.type) {classNames.push(`paddyBtn-type-${props.type}`);}
    if (props.loading) {classNames.push('paddyBtn-loading');}
    if (props.disabled) {classNames.push('paddyBtn-disabled');}

    const connectNames = (names: string[]) => {
      let className = 'paddy-button';
      if (classNames !== []) {
        for (let i = 0; i <= classNames.length - 1; i++) {
          className = className.concat(' ', classNames[i]);
        }
      } else {return className;}
      return className;
    };
    return connectNames(classNames);
  };

  return (
    <button
      className={`${addClassName(props)}${props.className ? ' '.concat(props.className) : ''}`}
      onClick={props.onClick}
    >
      {props.loading?(<span className="paddy--loadingIndicator"/>): null}
      {props.children}
    </button>
  );
};

export default Button;