import * as React from 'react';
import styles from './styles.module.css';

type Props = {
  elements: Array<JSX.Element>;
}

export const Row: React.FC = ({children}) => {
  return (
      <div className={styles.item}>
        {children}
      </div>
  );
};

export const TableWrapper: React.FC<Props> = ({elements}) => {
  return (
      <div className={styles.list}>
        {elements.map((element, i) => <Row key={i}>{element}</Row>)}
      </div>
  );
};
