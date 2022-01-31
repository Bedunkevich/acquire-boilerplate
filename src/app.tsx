import { FC } from 'react';
import { Button } from './lib';

export const App: FC = () => {
  return (
    <div>
      <Button title="Click Me" onClick={console.log} />
    </div>
  );
};
