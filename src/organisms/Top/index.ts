import { compose, lifecycle, pure } from 'recompose';
import { hot } from 'react-hot-loader';
import { connect } from 'react-redux';
import { fetch as fetchRepos, reposSelector } from '../../modules/redux/repos';
import { fetch as fetchProfile } from '../../modules/redux/profile';
import Top from './Top';

export type State = {
  repos: any
}

const mapStateToProps = (state: State) => ({
  repos: reposSelector(state),
});

const mapDispatchToProps = (dispatch) => ({
  fetchRepos: () => dispatch(fetchRepos()),
  fetchProfile: () => dispatch(fetchProfile()),
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
      this.props.fetchProfile();
    },
  })
)(Top);

export default EnhancedTop;
