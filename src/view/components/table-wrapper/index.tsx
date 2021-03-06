import * as React from 'react';
import styles from './styles.module.css';

export const BoardContainer: React.FC = ({children}) => {
  return (
      <div className={styles.boardContainer}>
        {children}
      </div>
  );
};
