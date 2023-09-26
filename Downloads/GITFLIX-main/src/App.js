import { RouterProvider } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "./styles/global.style";
import router from "./routes/router";
import theme from "./styles/theme.style";
import { QueryClient, QueryClientProvider, useInfiniteQuery } from "@tanstack/react-query";

function App() {

  console.log(process.env.NODE_ENV);
  const queryClient = new QueryClient({
    defaultOptions: {},
  });

  // const LIMIT = 10;

  // const fetchRep = async (page) => {
  //   const response = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=###&page=${LIMIT}`);
  //   return response.json();
  // };

  // const { data, isSuccess, hasNextPage, fetchNextPage, isFetchingNextPage } = useInfiniteQuery("repo", ({ pageParam = 1 }) => fetchRep(pageParam), {
  //   getNextPageParam: (lastPage, allPages) => {
  //     const nextPage = allPages.length + 1;
  //     return nextPage;
  //   },
  // });
  // development
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        {/* provider */}
        <GlobalStyles />
        <RouterProvider router={router} />
        {/* provider */}
      </ThemeProvider>
    </QueryClientProvider>
  );

}
export default App;
