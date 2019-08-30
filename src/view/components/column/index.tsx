import * as React from 'react';
import { TaskCreator } from '../task-creator';
import { ColumnType } from '../../../store/reducers/domain/column';
import { TaskType } from '../../../store/reducers/domain/tasks';
import { createTask } from '../../../store/actions/create-task';
import { Title } from '../title';
import { ColumnContainer } from '../column-container';
import { Droppable } from 'react-beautiful-dnd';
import { TaskList } from '../task-list';

import { Task } from '../task';

type Props = {
  column: ColumnType;
  tasks: Array<TaskType>;
  createTask: typeof createTask
}

export const Column: React.FC<Props> = ({column, tasks, createTask}) => {
  return (
      <ColumnContainer>
        <Title>{column.title}</Title>
        <Droppable droppableId={column.id}>
          {(provided) => (
              <TaskList
                  innerRef={provided.innerRef}
                  {...provided.droppableProps}
              >
                {tasks ? tasks.map((task, index) => (
                    <Task key={task.id} task={task} index={index}/>
                )) : null}
                {provided.placeholder}
              </TaskList>
          )}
        </Droppable>
        <TaskCreator createTask={(text) => createTask(text, column.id)}/>
      </ColumnContainer>
  );
};
