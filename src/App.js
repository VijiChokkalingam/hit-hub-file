import {createBrowserRouter,RouterProvider,} from "react-router-dom"; 
import Home from './Components/pages/home';
import TvShows from './Components/pages/tv';
import Movies from './Components/pages/movies';
import Sports from './Components/pages/sports';
import SignUp from './Components/pages/signUp';
import PageNotFound from './Components/pages/pageNotFound';
import SearchPage from './Components/pages/search';
import MovieView from './Components/pages/movieView';
import RootLayout from './Components/pages/rootLayout';
import LandPage from './Components/pages/landPage';
import LifeCycleMethods from "./Components/pages/lifeCycleMethods";
import Edit from "./Components/pages/edit";
import UseCallback from "./Components/pages/useCallback";


function App() {
const router = createBrowserRouter([
  {
    path:"",
    element:<RootLayout/>,
    errorElement:<PageNotFound/>,
    children:[
      {path:"", element:<LandPage/>},
      {path:"home", element:<Home/>},
      {path:"shows", element:<TvShows/>},
      {path:"sports", element:<Sports/>},
      {
        path:"movies", 
      element:<Movies/>,
      children:[{path:":movieName/:id",element:<MovieView/>}],
    },
      {path:"signup",element:<SignUp/>},
      {path:"/edit/:userId",element:<Edit/>},
      {path:"search",element:<SearchPage/>}, 
      {path:"lifecycle",element:<LifeCycleMethods/>}, 
      {path:"callback",element:<UseCallback/>}, 
    ],
  },
]);
  return <RouterProvider router={router}/>;
  
}

export default App;
