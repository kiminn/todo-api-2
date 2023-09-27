import { createBrowserRouter } from 'react-router-dom';
import MainPage from '../pages/main';
import DetailPage from '../pages/detail';
import SearchPage from '../pages/search';
import Popular from '../pages/main/popular';
import TopRated from '../pages/main/top-rated';
import NowPlaying from '../pages/main/now-playing';
import UpComing from '../pages/main/upcoming';

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainPage />,
    },
    { path: '/detail', element: <DetailPage /> },
    {
        path: '/search',
        element: <SearchPage />,
    },
    {
        path: '/popular',
        element: <Popular />,
    },
    {
        path: '/top-rated',
        element: <TopRated />,
    },
    {
        path: '/now-playing',
        element: <NowPlaying />,
    },
    {
        path: '/upcoming',
        element: <UpComing />,
    },
]);
export default router;
