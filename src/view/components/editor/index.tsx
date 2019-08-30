import * as React from 'react';
import styles from './styles.module.css';

type Props = {
  value: string;
  onChange: (text: string) => void;
}

export const Editor: React.FC<Props> = ({value, onChange}) => {
  const textarea = React.createRef<any>();
  React.useEffect(() => {
    textarea.current.focus();
  });
  return (
      <div className={styles.editor}>
        <textarea
            ref={textarea}
            value={value}
            onChange={(event) => onChange(event.target.value)}
            placeholder="Ввести заголовок"
        />
      </div>
  )
};
