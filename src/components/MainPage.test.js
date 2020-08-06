import React from 'react';
import MainPage from './MainPage';
import { shallow } from 'enzyme';

let wrapper;
beforeEach(() => {
  const mockProps = {
    loadRobots: jest.fn(),
    handleSearch: jest.fn(),
    robots: [],
    searchField: '',
    isPending: false,
  };
  wrapper = shallow(<MainPage {...mockProps} />);
});
describe('Main component tests', () => {
  expect.assertions(1);
  it('renders main page', () => {
    expect(wrapper.debug()).toMatchSnapshot();
  });

  expect.assertions(1);
  it('filters robots correctly', () => {
    expect(wrapper.instance().filterRobots()).toEqual([]);

    const mockFilterProps = {
      loadRobots: jest.fn(),
      handleSearch: jest.fn(),
      robots: [
        {
          id: 3,
          name: 'John',
          email: 'John@gmail.com',
        },
      ],
      searchField: 'j',
      isPending: false,
    };
    const wrapperFilter = shallow(<MainPage {...mockFilterProps} />);
    expect(wrapperFilter.instance().filterRobots()).toEqual([
      {
        id: 3,
        name: 'John',
        email: 'John@gmail.com',
      },
    ]);
  });

  expect.assertions(1);
  it('filters robots correctly2', () => {
    const mockFilterProps = {
      loadRobots: jest.fn(),
      handleSearch: jest.fn(),
      robots: [
        {
          id: 3,
          name: 'John',
          email: 'John@gmail.com',
        },
      ],
      searchField: 'a',
      isPending: false,
    };
    const filteredRobots = [];
    const wrapperFilter = shallow(<MainPage {...mockFilterProps} />);
    expect(wrapperFilter.instance().filterRobots()).toEqual(filteredRobots);
  });

  expect.assertions(1);
  it('filters robots pending', () => {
    const mockFilterProps = {
      loadRobots: jest.fn(),
      handleSearch: jest.fn(),
      robots: [
        {
          id: 3,
          name: 'John',
          email: 'John@gmail.com',
        },
      ],
      searchField: 'a',
      isPending: true,
    };
    const wrapperFilter = shallow(<MainPage {...mockFilterProps} />);
    expect(wrapperFilter.debug()).toMatchSnapshot();
  });
});
