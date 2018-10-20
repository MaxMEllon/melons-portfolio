import { compose, lifecycle } from "recompose";
import { connect } from 'react-redux'
import { fetch as fetchRepos } from '../../modules/redux/repos/index'
import Top from "./Top";

const mapStateToProps = (state) => ({
  repos: state.github.model.repos,
})

const mapDispatchToProps = (dispatch) => ({
  fetchRepos: () => dispatch(fetchRepos()),
})

const EnhancedTop = compose(
  connect(mapStateToProps, mapDispatchToProps),
  lifecycle({
    componentDidMount() {
      this.props.fetchRepos()
    },
  })
)(Top)

export default EnhancedTop;
