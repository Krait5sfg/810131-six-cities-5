import {selectCityOffers} from './selector';
import {SotringType, City} from '../utils/const';

const mockOffers = [
  {
    city: `Amsterdam`,
    rating: 4,
    accommodation: {
      price: 300,
    }
  },
  {
    city: `Amsterdam`,
    rating: 3,
    accommodation: {
      price: 100,
    }
  },
  {
    city: `Amsterdam`,
    rating: 1,
    accommodation: {
      price: 200,
    }
  },
  {
    city: `Paris`,
    rating: 4,
    accommodation: {
      price: 100,
    }
  },
  {
    city: `Paris`,
    rating: 1,
    accommodation: {
      price: 500,
    }
  },
];

describe(`Selector selectCityOffers work correct`, () => {
  it(`begining state`, () => {
    expect(selectCityOffers.resultFunc(mockOffers, SotringType.POPULAR, City.PARIS)).toHaveLength(2);
  });
  it(`state when change city`, () => {
    expect(selectCityOffers.resultFunc(mockOffers, SotringType.POPULAR, City.AMSTERDAM)).toHaveLength(3);
  });
  it(`state when sorting type high to low`, () => {
    expect(selectCityOffers.resultFunc(mockOffers, SotringType.HIGH_TO_LOW, City.AMSTERDAM)).toEqual([
      {city: `Amsterdam`, rating: 4, accommodation: {price: 300}},
      {city: `Amsterdam`, rating: 1, accommodation: {price: 200}},
      {city: `Amsterdam`, rating: 3, accommodation: {price: 100}}
    ]);
  });
  it(`state when sorting type popular`, () => {
    expect(selectCityOffers.resultFunc(mockOffers, SotringType.POPULAR, City.AMSTERDAM)).toEqual([
      {city: `Amsterdam`, rating: 4, accommodation: {price: 300}},
      {city: `Amsterdam`, rating: 3, accommodation: {price: 100}},
      {city: `Amsterdam`, rating: 1, accommodation: {price: 200}},
    ]);
  });
  it(`state when sorting type low to high`, () => {
    expect(selectCityOffers.resultFunc(mockOffers, SotringType.LOW_TO_HIGH, City.AMSTERDAM)).toEqual([
      {city: `Amsterdam`, rating: 3, accommodation: {price: 100}},
      {city: `Amsterdam`, rating: 1, accommodation: {price: 200}},
      {city: `Amsterdam`, rating: 4, accommodation: {price: 300}}
    ]);
  });
  it(`state when sorting type top rated`, () => {
    expect(selectCityOffers.resultFunc(mockOffers, SotringType.TOP_RATED, City.AMSTERDAM)).toEqual([
      {city: `Amsterdam`, rating: 4, accommodation: {price: 300}},
      {city: `Amsterdam`, rating: 3, accommodation: {price: 100}},
      {city: `Amsterdam`, rating: 1, accommodation: {price: 200}}
    ]);
  });
});
