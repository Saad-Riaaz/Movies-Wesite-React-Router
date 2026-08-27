import "./App.css";

import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";

import { Home } from "./Pages/home";
import { Genres } from "./Pages/Genres";
import { Login } from "./Pages/Login";

import {
  Contact,
  ContactData
} from "./Pages/Contact";

import { LayOut } from "./MovieComponents/PageLayOut";
import { ErrorPage } from "./Pages/ErrorPage";

import {
  Api,
  BollywoodApi,
  HollywoodApi,
  LollywoodApi,
  TrendingApi,
  TopRatedApi,
  UpcomingApi,
  MovieDetailsApi,
  GenreApi
} from "./MovieComponents/API";

import { MovieDetails } from "./Pages/MovieDetails";
import { GenresDetail } from "./Pages/GenresDetail";
import { GenreMovies } from "./GenreMovies";
import { Signup } from "./Pages/Signup";


export const App = () => {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <LayOut />,
      errorElement: <ErrorPage />,

      children: [

        // ================= HOME =================

        {
          index: true,
          element: <Home />,

          loader: async () => {

            const [
              popular,
              bollywood,
              hollywood,
              lollywood,
              trending,
              topRated,
              upcoming
            ] = await Promise.all([
              Api(),
              BollywoodApi(),
              HollywoodApi(),
              LollywoodApi(),
              TrendingApi(),
              TopRatedApi(),
              UpcomingApi()
            ]);

            return {
              popular,
              bollywood,
              hollywood,
              lollywood,
              trending,
              topRated,
              upcoming
            };
          }
        },


        // ================= MOVIES =================

        {
          path: "Genres",
          element: <Genres />,
          loader: Api
        },


        // ================= MOVIE DETAILS =================

        {
          path: "MovieDetails/:id",
          element: <MovieDetails />,
          loader: MovieDetailsApi
        },


        // ================= LOGIN =================

        {
          path: "Login",
          element: <Login />
        },


        // ================= GENRES LIST =================

        {
          path: "GenresDetail",
          element: <GenresDetail />
        },


        // ================= GENRE MOVIES =================

        {
          path: "Genres/:id",
          element: <GenreMovies />,
          loader: GenreApi
        },


        // ================= CONTACT =================

        {
          path: "Contact",
          element: <Contact />,
          action: ContactData
        },
        {
  path: "Signup",
  element: <Signup />
},

      ]
    }
  ]);

  return <RouterProvider router={router} />;
};