import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('there is no I in team', () => {
  expect('team').not.toMatch(/I/);
});

describe('Google', () => {
  beforeAll(async () => {
    await page.goto('https://google.com')
  })

  it('should display "google" text on page', async () => {
    await expect(page).toMatch('google')
  })
})
