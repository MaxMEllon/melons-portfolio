import { compose, lifecycle, pure } from "recompose";
import { hot } from "react-hot-loader";
import { connect } from "react-redux";
import { fetch as fetchRepos, reposSelector } from "../../modules/redux/repos";
import Top from "./Top";

const mapStateToProps = (state) => ({
  repos: reposSelector(state),
});

const mapDispatchToProps = (dispatch) => ({
  fetchRepos: () => dispatch(fetchRepos()),
});

const EnhancedTop = compose(
  hot(module),
  connect(
    mapStateToProps,
    mapDispatchToProps
  ),
  pure,
  lifecycle({
    componentDidMount() {
      this.props.fetchRepos();
    },
  })
)(Top);

export default EnhancedTop;
