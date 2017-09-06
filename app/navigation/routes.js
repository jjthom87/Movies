import OmdbItem from './../components/omdb/OmdbItem';
import HomeScreen from './../components/main_screens/HomeScreen';
import OmdbTop from './../components/main_screens/OmdbTop';
import MovieTop from './../components/main_screens/MovieTop';
import MovieItem from './../components/movie/MovieItem';

export default Routes = {
  Main: { screen: HomeScreen, navigationOptions: { header: null } },
  OmdbItem: { screen: OmdbItem, navigationOptions: { header: null } },
  OmdbTop: { screen: OmdbTop, navigationOptions: { header: null } },
  MovieTop: { screen: MovieTop },
  MovieItem: { screen: MovieItem }
};