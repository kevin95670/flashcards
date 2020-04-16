import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as retournerCarte from '../actions/actions'
import CardList from '../components/Card/CardList'
//import { getVisibleTodos } from '../selectors'

const mapStateToProps = (state) => ({
	cards: state.cardsData.cards
})

const mapDispatchToProps = (dispatch) => ({
	actions: bindActionCreators(retournerCarte, dispatch),
})

const CardContainer = connect(
	mapStateToProps,
	mapDispatchToProps,
)(CardList)

export default CardContainer