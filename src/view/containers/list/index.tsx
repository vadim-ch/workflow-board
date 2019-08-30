import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { State } from '../../../store/reducers';
import { createTask } from '../../../store/actions/create-task';
import { getTasksByListId, TaskByListType } from '../../../store/reducers/domain/tasks/selectors';
import { moveTask } from '../../../store/actions/move-task';

import styles from './styles.module.css';

type ActionsMap = {
  createTask: typeof createTask
  moveTask: typeof moveTask
}

export interface IStateProps {
  tasks: TaskByListType;
}

export interface IDispatchProps {
  actions: ActionsMap;
}

type IPropsComponents = IStateProps & IDispatchProps & {
  listId: string;
};

class List extends React.PureComponent<IPropsComponents, {}> {
  public render(): JSX.Element {
    return (
        <div className={styles.list}>
          {this.props.tasks[this.props.listId] ?
              this.props.tasks[this.props.listId]
                  .map(task => <div key={task.id}>{task.title}</div>) : null}
        </div>
    );
  }
}

const mapStateToProps = (state: State): IStateProps => {
  return {
    tasks: getTasksByListId(state)
  };
};

const mapDispatchToProps = (dispatch: any): IDispatchProps => ({
  actions: bindActionCreators({
    createTask,
    moveTask
  }, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(List);
