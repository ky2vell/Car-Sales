import React from 'react';
import { connect } from 'react-redux';

import { addFeature } from '../actions/carActions';

const AdditionalFeature = props => {
  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      {props.disabled ? (
        <button className='button is-success add-feature cursor-default'>
          <span className='icon is-small'>
            <i className='fas fa-check'></i>
          </span>
        </button>
      ) : (
        <button
          className='button add-feature'
          onClick={() => props.addFeature(props.feature)}
        >
          Add
        </button>
      )}
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};

export default connect(null, { addFeature })(AdditionalFeature);
