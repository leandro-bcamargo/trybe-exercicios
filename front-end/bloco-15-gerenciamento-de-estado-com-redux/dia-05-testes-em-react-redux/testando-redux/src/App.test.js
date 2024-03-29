// src/App.test.js
import { cleanup, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import { Provider } from 'react-redux';
import App from './App';
import { combineReducers, createStore } from 'redux';
import clickReducer from './reducers';

const renderWithRedux = (
  component,
  {
    initialState,
    store = createStore(combineReducers({ clickReducer }), initialState),
  } = {},
) => ({
  ...render(<Provider store={ store }>{component}</Provider>),
  store});

describe('testing clicks', () => {
  beforeEach(cleanup);
  test('the page should have a button and a text 0', () => {
    renderWithRedux(<App />);
    const buttonAdicionar = screen.queryByText('Clique aqui');

    expect(buttonAdicionar).toBeInTheDocument();
    expect(screen.getByText('0')).toBeInTheDocument();
  });

  test('a click in a button should increment the value of clicks', () => {
    renderWithRedux(<App />, { initialState: { clickReducer: { counter: 5 } } });

    expect(screen.getByText('5')).toBeInTheDocument();
  });

  test('Crie um teste com o valor padrão do reducer e teste se um clique funciona.', () => {
    renderWithRedux(<App />, {initialState: {clickReducer: {counter: 6}}})
    const buttonAdicionar = screen.queryByRole('button', {name: /clique aqui/i});
    userEvent.click(buttonAdicionar);
    const counter = screen.getByText('7');
    expect(counter).toBeInTheDocument();
  })

  test('Altere o valor inicial do counter para 10, faça um clique do botão e crie os testes para esses comportamentos.', () => {
    renderWithRedux(<App />, {initialState: {clickReducer: {counter: 10}}})
    const counter10 = screen.getByText('10');
    expect(counter10).toBeInTheDocument();
  
    const clickBtn = screen.getByRole('button', {name: /clique aqui/i});
    userEvent.click(clickBtn);
    const counter11 = screen.getByText('11');
    expect(counter11).toBeInTheDocument();
  })
});