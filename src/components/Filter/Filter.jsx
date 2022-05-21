import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { filterAction } from '../../redus/actions';
// import PropTypes from 'prop-types';

export default function Filter() {
  const filter = useSelector(state => state.contacts.filter);
  const dispath = useDispatch();

  return (
    <label>
      <p>Find contact by name</p>
      <input
        type="input"
        name="filter"
        onChange={event => dispath(filterAction(event.currentTarget.value))}
        value={filter}
      />
    </label>
  );
}

// Filter.propTypes = {
//   onFilter: PropTypes.func.isRequired,
//   filter: PropTypes.string.isRequired,
// };

// const mapStateProps = state => {
//   return {
//     filter: state.contacts.filter,
//   };
// };

// const mapDispathToProps = dispath => {
//   return {
//     onFilter: event => dispath(filterAction(event.currentTarget.value)),
//   };
// };

// export default connect(mapStateProps, mapDispathToProps)(Filter);
