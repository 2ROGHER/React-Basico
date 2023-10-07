import React from 'react'
import { connect } from 'react-redux'
import Filter from '../pure/Filter';
import { setVisibilyFilter } from '../../redux/actions/actions'

// Nota: 
// Las ownsprops son props propias de este componente
const mapStateToProps = (state,ownProps) => {
    return {
        active: ownProps.filter === state.filterState,
    }
}

const mapDispatchToProps = (dispatch, ownProps) =>  {
    return {
        onClick: () => {
            dispatch(setVisibilyFilter(ownProps.filter));
        }
    }
}

const FilterContainer = connect(mapStateToProps, mapDispatchToProps)(Filter);
export default FilterContainer;