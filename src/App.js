import 'bootstrap/dist/css/bootstrap.min.css';
import BottomSection from './Components/BottomSection/BottomSection/BottomSection';
import HeadSection from './Components/HeadSection/HeadSection';
import MiddleSection from './Components/MiddleSection/MiddleSection';
import Navigation from './Components/Navigation/Navigation';

function App() {
  return (
    <div className="App">
     <Navigation></Navigation>
     <HeadSection></HeadSection>
     <MiddleSection></MiddleSection>
     <BottomSection></BottomSection>
    </div>
  );
}

export default App;
