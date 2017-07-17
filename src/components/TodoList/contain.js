import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import {
  getTodo,
  getFilter
} from 'src/reducers/todos'

import {
  toggleCompleted,
  removeTodo,
  setFilter
} from 'src/actions/todos'

const mapStateToProps = (state) => {
  return {
    todos: getTodo(state),
    filter: getFilter(state)
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    toggleCompleted,
    removeTodo,
    setFilter
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)
