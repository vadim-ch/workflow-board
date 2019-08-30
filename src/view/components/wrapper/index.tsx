import * as React from 'react';
import styles from './styles.module.css';
import { Header } from '../header';

export const Wrapper: React.FC = ({children}) => {
  return (
      <div className={styles.wrapper}>
        <Header title='Workflow board like Trello'/>
        <div className={styles.content}>
          {children}
        </div>
      </div>
  );
};
