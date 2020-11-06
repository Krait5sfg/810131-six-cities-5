import React from 'react';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import SortingItem from './sorting-item';

configure({adapter: new Adapter()});

it(`Click by sorting element`, () => {
  const onSortingItemClick = jest.fn();
  const wrapper = shallow(<SortingItem
    itemName={`Popular`}
    isActive={true}
    onSortingItemClick={onSortingItemClick}
  />
  );

  wrapper.find(`li`).simulate(`click`);
  expect(onSortingItemClick).toHaveBeenCalledTimes(1);
});
