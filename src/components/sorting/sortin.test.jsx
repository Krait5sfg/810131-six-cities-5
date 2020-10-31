import React from 'react';
import renderer from 'react-test-renderer';
import {Sorting} from './sorting';

describe(`Sorting render correctly`, () => {
  it(`Sorting open`, () => {
    const tree = renderer
      .create(<Sorting
        sortingType={`Popular`}
        isOpen={true}
        onSortingClick={() => {}}
        updateSortingType={() => {}}
      />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`Sorting close`, () => {
    const tree = renderer
      .create(<Sorting
        sortingType={`Popular`}
        isOpen={false}
        onSortingClick={() => {}}
        updateSortingType={() => {}}
      />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
