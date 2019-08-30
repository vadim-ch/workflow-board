import * as React from 'react';
import styles from './styles.module.css';

export const Title: React.FC = ({children}) => {
  return (
      <div className={styles.title}>
        {children}
      </div>
  );
};
