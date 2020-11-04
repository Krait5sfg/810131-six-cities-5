import React from 'react';
import renderer from 'react-test-renderer';
import SortingItem from './sorting-item';

describe(`SortingItem render correctly`, () => {
  it(`SortingItem active`, () => {
    const tree = renderer
      .create(<SortingItem
        itemName={`Popular`}
        isActive={true}
        onSortingItemClick={() => {}}
      />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`SortingItem not active`, () => {
    const tree = renderer
      .create(<SortingItem
        itemName={`Popular`}
        isActive={false}
        onSortingItemClick={() => {}}
      />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
