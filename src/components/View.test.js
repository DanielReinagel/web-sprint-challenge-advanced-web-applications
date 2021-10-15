import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import View from './View';

import articleService from '../services/articleServices';
jest.mock('../services/articleServices');

const mockArticles = num => {
  const output = []
  for(let i=0; i<num; i++){
    output.push({
      headline: `headline${i}`,
      author: `author${i}`,
      summary: `summary${i}`,
      body: `body${i}`,
      image: i,
      id: `abcde${i}`
    })
  }
  return output;
}

test("renders zero articles without errors", async () => {
  articleService.mockResolvedValueOnce({data:mockArticles(0)});
  render(<View/>);
  expect(articleService).toBeCalledTimes(1);
});

test("renders three articles without errors", async ()=> {
  articleService.mockClear();
  articleService.mockResolvedValueOnce({data:mockArticles(3)});
  render(<View/>);
  expect(articleService).toBeCalledTimes(1);
});

//Task List
//1. Complete the above two tests. Make sure to mocking the articleService call before rendering.