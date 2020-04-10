import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { CardActions } from '../actions/actions'
import Card from '../components/Card/Card'
//import { getVisibleTodos } from '../../selectors'

const mapStateToProps = (state) => ({
	cards: state
})

const mapDispatchToProps = (dispatch) => ({
	actions: bindActionCreators(CardActions, dispatch),
})

const CardList = connect(
	mapStateToProps,
	mapDispatchToProps,
)(CardList)

export default CardList