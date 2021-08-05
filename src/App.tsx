import { Main } from "./Components/Main";
import { Sidebar } from "./Components/Sidebar";
import { GlobalStyle } from "./styles/global";

export function App() {
  return (
    <div className="App">
       <Sidebar />
       <Main />
       <GlobalStyle />
    </div>
  );
}
