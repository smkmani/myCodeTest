import { Provider } from "react-redux";
import store from "./stores";
import Home from "./Home";

//HomeScreen

function App() {
  return (
    <Provider store={store}>
      <Home />
    </Provider>
  );
}

export default App;
