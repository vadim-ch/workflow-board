import * as React from 'react';
import styles from './styles.module.css';
import { Draggable } from 'react-beautiful-dnd';
import { TaskType } from '../../../store/reducers/domain/tasks';

type Props = {
  task: TaskType;
  index: number;
}

export class Task extends React.PureComponent<Props, {}> {
  public render(): JSX.Element {
    const {task, index} = this.props;
    return (
        <Draggable draggableId={task.id} index={index}>
          {(provided) => (
              <div
                  ref={provided.innerRef}
                  {...provided.draggableProps}
                  {...provided.dragHandleProps}
                  className={styles.task}
              >
                {task.title}
              </div>
          )}
        </Draggable>
    );
  }
}
