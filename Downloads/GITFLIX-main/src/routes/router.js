import { createBrowserRouter } from "react-router-dom";
import MainPage from "../pages/main";
import DetailPage from "../pages/detail";
import SearchPage from "../pages/search";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />,
  },
  { path: "/detail", element: <DetailPage /> },
  {
    path: "/search",
    element: <SearchPage />,
  },
]);
export default router;
