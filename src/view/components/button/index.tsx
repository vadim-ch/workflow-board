import * as React from 'react';
import classNames from 'classnames/bind';

import styles from './styles.module.css';

export enum ButtonType {
  Simple,
  Standart
}

type Props = {
  type?: ButtonType;
  handler: {() : void} | null;
}

export const Button: React.FC<Props> = ({type = ButtonType.Standart, handler, children}) => {
  return (
      <button
          type="button"
          onClick={handler ? handler: undefined}
          className={classNames(
              styles.button,
              {[styles.simple]: type === ButtonType.Simple}
          )}
      >
        {children}
      </button>
  );
};
