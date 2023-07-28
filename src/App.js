import "./App.css";
import HomePage from "./pages/home/home";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import BuyNowPayLaterPage from "./pages/buynowpaylater";
import VideosPage from "./pages/videos";
import BlogsPage from "./pages/blogs";
import AbhaPage from "./pages/abha/abha";
import AboutUsPage from "./pages/aboutus";
import RootLayout from "./pages/rootLayout";
import ErrorPage from "./pages/errorPage";
import LoginPage from "./pages/loginPage/loginPage";
import SignUp from "./pages/signUpPage/signUp";
import SignUpForm from "./pages/signUpForm";
import ForgotPassword from "./pages/forgotPassword";

const router = createBrowserRouter([
  {
    path: "",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { path: "", element: <HomePage /> },
      { path: "buynowpaylater", element: <BuyNowPayLaterPage /> },
      { path: "videos", element: <VideosPage /> },
      { path: "blogs", element: <BlogsPage /> },
      { path: "abha", element: <AbhaPage /> },
      { path: "aboutus", element: <AboutUsPage /> },
    ],
  },
  { path: "login", element: <LoginPage /> },
  { path: "sign-up", element: <SignUp /> },
  { path: "application-form", element: <SignUpForm /> },
  { path: "forgot-password", element: <ForgotPassword /> },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
