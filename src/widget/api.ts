import { io } from 'socket.io-client';

function API() {
  const socket = io('https://kpcdg8.acq.lc:2930', {
    reconnectionDelayMax: 10000,
    path: '/api/v1/crm/ws',
    auth: {
      token: '123',
    },
    transports: ['websocket'],
    query: {
      '-session-id': '7954615554',
      '-tab-id': '69871',
      '-x-user-type': 'user',
      '-contact-id': null,
      '-device-category': 'web',
      EIO: 4,
      transport: 'websocket',
    },
  });

  socket.on('connect', () => {
    console.log(socket.id); // "G5p5..."
    socket.emit('noArg');
  });

  const engine = socket.io.engine;
  console.log(engine.transport.name); // in most cases, prints "polling"

  engine.once('upgrade', () => {
    // called when the transport is upgraded (i.e. from HTTP long-polling to WebSocket)
    console.log('[upgrade]', engine.transport.name); // in most cases, prints "websocket"
  });

  engine.on('packet', ({ type, data }) => {
    // called for each packet received
    console.log('[packet]', { type, data });
  });

  engine.on('packetCreate', ({ type, data }) => {
    // called for each packet sent
    console.log('[packetCreate]', { type, data });
  });

  engine.on('drain', () => {
    // called when the write buffer is drained
    console.log('[drain]');
  });

  engine.on('close', (reason) => {
    // called when the underlying connection is closed
    console.log('[close]');
  });

  function connect() {
    console.log('%c[API]', 'color: green;');
  }

  return {
    connect,
  };
}

const instance = API();

export default instance;
