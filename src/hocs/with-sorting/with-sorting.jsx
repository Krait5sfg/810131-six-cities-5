import React, {PureComponent} from 'react';

const withSorting = (WrappedComponent) => {
  return class WithSorting extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        isOpen: false,
      };

      this._onSortingClick = this._onSortingClick.bind(this);
    }

    render() {
      const {isOpen} = this.state;
      return <WrappedComponent
        isOpen={isOpen}
        onSortingClick={this._onSortingClick}
        {...this.props} />;
    }

    _onSortingClick() {
      this.setState(({isOpen}) => ({
        isOpen: !isOpen
      }));
    }
  };
};

export default withSorting;
