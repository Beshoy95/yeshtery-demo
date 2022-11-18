import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { SCREEN_URLS } from './config/constants';
import '../src/Styles/Global/Global.css';
import {
  Men,
  Woman,
  Unisex,
  Kids,
  BestSellers,
  NewArrivals,
  Offers,
  NotFound,
} from './pages';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path={SCREEN_URLS.HOME} element={<Men />} />
          <Route path={SCREEN_URLS.WOMAN} element={<Woman />} />
          <Route path={SCREEN_URLS.UNISEX} element={<Unisex />} />
          <Route path={SCREEN_URLS.KIDS} element={<Kids />} />
          <Route path={SCREEN_URLS.BESTSELLERS} element={<BestSellers />} />
          <Route path={SCREEN_URLS.NEW_ARRIVALS} element={<NewArrivals />} />
          <Route path={SCREEN_URLS.OFFERS} element={<Offers />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
