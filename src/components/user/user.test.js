import React from 'react';
import renderer from 'react-test-renderer';
import {User} from './user';

const userData = {
  avatarUrl: ``,
  email: `test@mail.ru`,
  id: 1,
  isPro: false,
  name: `test`,
};

describe(`User render correctly`, () => {
  it(`User with authorization`, () => {
    const tree = renderer
      .create(<User
        onLinkEmailClick={() => {}}
        authorizationStatus={`AUTH`}
        userData={userData}
      />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`User without authorization`, () => {
    const tree = renderer
      .create(<User
        onLinkEmailClick={() => {}}
        authorizationStatus={`NO_AUTH`}
        userData={{}}
      />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
