import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import {
  addTodo,
  setDraftText
} from 'src/actions/todos'

import {
  getDraftText
} from 'src/reducers/todos'

const mapStateToProps = (state) => {
  return {
    draftText: getDraftText(state)
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    addTodo,
    setDraftText
  },dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)
