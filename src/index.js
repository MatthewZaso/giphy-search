import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import './css/main.scss'
import store from "./store";

const API_KEY = '5u1dZor3NNYiALYROwvO7wSEpa05Q3Al';
const TRENDING_URL = `https://api.giphy.com/v1/gifs/trending?api_key=${API_KEY}&limit=25&rating=G`;

ReactDOM.render(
  <App store={store} />,
  document.getElementById('root')
);
