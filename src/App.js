import {
  RouterProvider,
} from "react-router-dom";

import router from "./routes/route";
import GlobalStyles from "styles/global.style";
import { ThemeProvider } from "styled-components";
import theme from "styles/theme.style";

function App() { 
  return <ThemeProvider theme={theme}>
    <GlobalStyles/>
    <RouterProvider router={router} />
  </ThemeProvider>
  
  // return <BrowserRouter>
  //   {/*HTML을 지원하는 브라우저의 url path를 감지*/}
  // <Routes>
  //     {/**Route의 path와 감지한 url이 일치하면 일치한 Route만 랜더링 */}
  //     <Route path="/" element={<HomePage/>}/>
  //       {/** url과 보여줄 요소의 매칭 */}
  //       {/** url 감지 -> 일치하는 Route 찾기 -> 해당하는 Route만 랜더링 */}
  //     <Route path="/todo/:todoId" element={<TodoPage/>}/>
  // </Routes>
  // </BrowserRouter>
}
export default App;
