import * as React from 'react';
import styles from './styles.module.css';

type Props = {
  value: string;
  onChange: (text: string) => void;
}

export const Editor: React.FC<Props> = ({value, onChange}) => {
  return (
      <div>
        <textarea
            value={value}
            onChange={(event) => onChange(event.target.value)}
        />
      </div>
  )
};
