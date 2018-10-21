import { compose, pure } from 'recompose';
import { connect } from 'react-redux';
import loadingSelector from '../../modules/redux/loading/selector';
import Loading from './Loading';

const mapStateToProps = (state) => ({
  loading: loadingSelector(state),
});

const EnhancedLoading = compose(
  connect(mapStateToProps),
  pure
)(Loading);

export default EnhancedLoading;
