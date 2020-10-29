import React, {PureComponent} from 'react';

const withReviewForm = (WrappedComponent) => {
  return class WithReviewForm extends PureComponent {
    constructor() {
      super();
      this._onInputChange = this._onInputChange.bind(this);

      this.state = {
        rating: ``,
        review: ``
      };
    }

    _onInputChange(evt) {
      evt.preventDefault();
      const {name, value} = evt.target;
      this.setState({[name]: value});
    }

    render() {
      const {rating, review} = this.state;
      return <WrappedComponent
        rating={rating}
        review={review}
        onChange={this._onInputChange}
        {...this.props}
      />;
    }
  };
};

export default withReviewForm;
