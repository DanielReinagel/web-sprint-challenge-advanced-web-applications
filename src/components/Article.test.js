import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import MutationObserver from 'mutationobserver-shim';

import Article from './Article';

const mockProps = {
  article:{
    headline: 'headline',
    author: 'author',
    summary: 'summary',
    body: 'body',
    image: 1,
    id: 'abcde'
  },
  handleDelete:jest.fn(),
  handleEditSelect:jest.fn()
}
const mockProps2 = {
  article:{
    headline: 'headline',
    author: '',
    summary: 'summary',
    body: 'body',
    image: 1,
    id: 'abcde'
  },
  handleDelete:jest.fn(),
  handleEditSelect:jest.fn()
}

test('renders component without errors', ()=> {
  render(<Article {...mockProps}/>);
});

test('renders headline, author from the article when passed in through props', ()=> {
  render(<Article {...mockProps}/>);
  screen.getByText(mockProps.article.headline);
  screen.getByText(new RegExp(mockProps.article.author));
  screen.getByText(new RegExp(mockProps.article.summary));
  screen.getByText(new RegExp(mockProps.article.body));
});

test('renders "Associated Press" when no author is given', ()=> {
  render(<Article {...mockProps2}/>);
  screen.getByText(/associated press/i);
});

test('executes handleDelete when the delete button is pressed', ()=> {
  render(<Article {...mockProps}/>);
  const deleteButton = screen.getByTestId('deleteButton');
  userEvent.click(deleteButton);
  expect(mockProps.handleDelete).toBeCalledTimes(1);
});

//Task List:
//1. Complete all above tests. Create test article data when needed.