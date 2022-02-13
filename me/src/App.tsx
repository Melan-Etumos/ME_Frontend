import { ThemeProvider } from "styled-components";
import theme from "./style/theme";
import RootRouter from "./route";

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <div>me</div>
        <RootRouter />
      </ThemeProvider>
    </>
  );
}

export default App;
