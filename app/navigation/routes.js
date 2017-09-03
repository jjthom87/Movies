import OmdbItem from './../components/OmdbItem';
import HomeScreen from './../components/HomeScreen';
import OmdbTop from './../components/OmdbTop';
import MovieTop from './../components/MovieTop';

export default Routes = {
  Main: { screen: HomeScreen, navigationOptions: { header: null } },
  OmdbItem: { screen: OmdbItem, navigationOptions: { header: null } },
  OmdbTop: { screen: OmdbTop, navigationOptions: { header: null } },
  MovieTop: { screen: MovieTop, navigationOptions: { header: null } }
};