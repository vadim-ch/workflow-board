import * as React from 'react';
import styles from './styles.module.css';

type Props = {
  title: string;
}

export const Card: React.FC<Props> = ({title, children}) => {
  return (
      <div className={styles.card}>
        <div className={styles.title}>{title}</div>
        {children}
      </div>
  );
};
