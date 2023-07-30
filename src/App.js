import './App.scss';

import 'bootstrap/dist/js/bootstrap.bundle';
import { Provider } from 'react-redux';

import Routes from './pages/Routes/Routes';
import store from './store/reduxStore';

function App() {
  return (
    <div className="App">

      <Provider store={store}>
        <Routes />
      </Provider>

    </div>
  );
}

export default App;
