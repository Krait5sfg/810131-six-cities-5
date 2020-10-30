import React, {PureComponent} from 'react';

const withReviewForm = (WrappedComponent) => {
  return class WithReviewForm extends PureComponent {
    constructor() {
      super();
      this._onInputChange = this._onInputChange.bind(this);
      this._resetState = this._resetState.bind(this);

      this.state = {
        rating: ``,
        review: ``
      };
    }

    render() {
      const {rating, review} = this.state;
      return <WrappedComponent
        rating={rating}
        review={review}
        resetState={this._resetState}
        onChange={this._onInputChange}
        {...this.props}
      />;
    }

    _onInputChange(evt) {
      evt.preventDefault();
      const {name, value} = evt.target;
      this.setState({[name]: value});
    }

    _resetState() {
      this.setState({
        rating: ``,
        review: ``
      });
    }
  };
};

export default withReviewForm;
