import * as React from 'react';
import styles from './styles.module.css';

export const ColumnContainer: React.FC = ({children}) => {
  return (
      <div className={styles.columnContainer}>
        {children}
      </div>
  );
};
