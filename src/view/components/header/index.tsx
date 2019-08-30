import * as React from 'react';
import styles from './styles.module.css';

type Props = {
  title: string;
}

export const Header: React.FC<Props> = ({title}) => {
  return (
      <div className={styles.header}>
        {title}
      </div>
  );
};
