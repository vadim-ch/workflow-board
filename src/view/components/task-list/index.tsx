import * as React from 'react';
import styles from './styles.module.css';

type Props = {
  innerRef: any;
}

export class TaskList extends React.PureComponent<Props, {}> {
  public render(): JSX.Element {
    const { innerRef, children } = this.props;
    return (
        <div
            ref={innerRef}
            className={styles.taskList}
        >
          {children}
        </div>
    );
  }
}
