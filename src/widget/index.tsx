import { render } from 'react-dom';
import { Chat } from './chat';

type WidgetProps = {
  clientID: string;
};

function Widget() {
  let config;

  function init(props: WidgetProps) {
    if (typeof props !== 'object') {
      throw new Error('[Acquire] Wrong initialization...');
    }
    const { clientID } = props;
    if (!clientID) {
      throw new Error('[Acquire] ClientID not found...');
    }

    config = { ...props };

    const rootId = `acquite-widget-${clientID}`;
    const rootDiv = document.createElement(rootId);
    const container = document.body.appendChild(rootDiv);

    render(<Chat clientID={clientID} />, container);
  }

  return {
    init,
  };
}
function createInstance(o): ReturnType<typeof Widget> {
  return Object.create(Widget());
}

const instance = createInstance({});

export { createInstance };
export default instance;
