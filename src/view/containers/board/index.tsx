import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { State } from '../../../store/reducers';
import { createTask } from '../../../store/actions/create-task';
import { createList } from '../../../store/actions/create-list';
import { getColumnList } from '../../../store/reducers/domain/column/selectors';
import { ColumnType } from '../../../store/reducers/domain/column';
import { BoardContainer } from '../../components/table-wrapper';
import { Column } from '../../components/column';

import styles from './styles.module.css';
import { getTasksByListId, TaskByListType } from '../../../store/reducers/domain/tasks/selectors';
import { moveTask } from '../../../store/actions/move-task';
import { DragDropContext } from 'react-beautiful-dnd';

type ActionsMap = {
  createTask: typeof createTask;
  createList: typeof createList;
  moveTask: typeof moveTask;
}

export interface IStateProps {
  columns: Array<ColumnType>;
  tasks: TaskByListType;
}

export interface IDispatchProps {
  actions: ActionsMap;
}

type IPropsComponents = IStateProps & IDispatchProps;

class Board extends React.PureComponent<IPropsComponents, {}> {
  public render(): JSX.Element {
    const {columns, actions, tasks} = this.props;
    return (
        <div className={styles.board}>
          <DragDropContext onDragEnd={this.onDragEnd}>
            <BoardContainer>
              {columns.map(column => (
                  <Column
                      key={column.id}
                      column={column}
                      tasks={tasks[column.id]}
                      createTask={actions.createTask}
                  />
              ))}
            </BoardContainer>
          </DragDropContext>
        </div>
    );
  }

  private onDragEnd = (result: any) => {
    const {destination, source, draggableId} = result;
    const {actions} = this.props;

    if (!destination) {
      return;
    }

    if (destination.droppableId === source.droppableId &&
        destination.index === source.index) {
      return;
    }
    actions.moveTask(
        draggableId,
        source.droppableId,
        destination.droppableId,
        source.index,
        destination.index
    );
  }
}

const mapStateToProps = (state: State): IStateProps => {
  return {
    columns: getColumnList(state),
    tasks: getTasksByListId(state)
  };
};

const mapDispatchToProps = (dispatch: any): IDispatchProps => ({
  actions: bindActionCreators({
    createTask,
    createList,
    moveTask
  }, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Board);
