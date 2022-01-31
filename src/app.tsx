import { FC, useEffect } from 'react';
import { Button } from './lib';
import widget from './widget';

export const App: FC = () => {
  useEffect(() => {
    widget.init({ clientID: 'kpcdg8' });
  }, []);

  return (
    <div>
      <Button title="Click Me" onClick={console.log} />
    </div>
  );
};
