import * as React from 'react';
import { Button, ButtonType } from '../button';
import { Editor } from '../editor';

import styles from './styles.module.css';


type Props = {
  createTask: (text: string) => void
}

export const TaskCreator: React.FC<Props> = ({createTask}) => {
  const [editMode, setEditMode] = React.useState<boolean | null>(false);
  const [text, setText] = React.useState<string>('');
  const createHandler = () => {
    createTask(text);
    setText('');
  };
  return (
      <div className={styles.taskCreator}>
        {editMode ?
            <div>
              <Editor value={text} onChange={setText}/>
              <Button handler={text !== '' ? createHandler : null}>Создать задачу</Button>
              <Button handler={() => setEditMode(false)} type={ButtonType.Simple}>X</Button>
            </div> :
            <Button handler={() => setEditMode(true)} type={ButtonType.Simple}>Создать ещё одну задачу</Button>
        }
      </div>

  );
};

