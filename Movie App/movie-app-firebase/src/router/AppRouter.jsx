import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "../components/Navbar";
import Home from "../pages/Home";
import Login from "../pages/Login";
import MovieDetails from "../pages/MovieDetails";
import Register from "../pages/Register";
import PrivateRouter from "./PrivateRouter";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        {/* <Route path="/details/:id" element={ currentUser ? <MovieDetails /> : <Navigate to='/login' replace/>} /> */}
        <Route path="/details/:id" element={<PrivateRouter />}>
          <Route path="" element={<MovieDetails />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
