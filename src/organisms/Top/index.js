import { compose, lifecycle } from "recompose";
import { connect } from "react-redux";
import { fetch as fetchRepos, reposSelector } from "../../modules/redux/repos";
import Top from "./Top";

const mapStateToProps = state => ({
  repos: reposSelector(state)
});

const mapDispatchToProps = dispatch => ({
  fetchRepos: () => dispatch(fetchRepos())
});

const EnhancedTop = compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  ),
  lifecycle({
    componentDidMount() {
      this.props.fetchRepos();
    }
  })
)(Top);

export default EnhancedTop;
