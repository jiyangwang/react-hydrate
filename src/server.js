import express from 'express';
import axios from 'axios';
import React from 'react';
import { Provider } from 'react-redux';
import { renderToString } from 'react-dom/server';
import { configureStore } from './redux/configureStore';
import App from './client/App';

// static html
const render = (html, state) => `
  <!DOCTYPE html>
  <html>
    <head>
      <title>React Hydrate</title>
    </head>
    <body style="margin:0">
      <div id="root">${html}</div>
      <script>window.__STATE__ = ${JSON.stringify(state)}</script>
    </body>
  </html>
`;


// handle SSR
const handleRender = (req, res) => {
  axios.get('https://jsonplaceholder.typicode.com/users/1')
    .then(response => {
      const initialState = {
        data: response.data
      };
      const store = configureStore(initialState);
      const html = renderToString(
        <Provider store={store}>
          <App />
        </Provider>
      );
      const state = store.getState();
      res.send(render(html, state));
    })
};

const port = 3000;
const server = express();
server.use(express.static('dist'));
server.use(handleRender);

server.listen(port);
console.log(`Serving at http://localhost:${port}`);
