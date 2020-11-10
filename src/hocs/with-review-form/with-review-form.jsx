import React, {PureComponent} from 'react';

const withReviewForm = (WrappedComponent) => {
  return class WithReviewForm extends PureComponent {
    constructor() {
      super();
      this._handleInputChange = this._handleInputChange.bind(this);
      this._resetState = this._resetState.bind(this);
      this._changeDisableFormAttribute = this._changeDisableFormAttribute.bind(this);

      this.state = {
        rating: ``,
        review: ``,
        isDisabled: false,
      };
    }

    render() {
      const {rating, review, isDisabled} = this.state;
      return <WrappedComponent
        rating={rating}
        review={review}
        resetState={this._resetState}
        onChange={this._handleInputChange}
        isDisabled={isDisabled}
        changeDisableFormAttribute={this._changeDisableFormAttribute}
        {...this.props}
      />;
    }

    _changeDisableFormAttribute(status) {
      this.setState({isDisabled: status});
    }

    _handleInputChange(evt) {
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
