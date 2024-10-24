import Header from './Header/Header';
import Content from './Content/Content';
import Footer from './Footer/Footer';
import User_list from './User_list/User_list';
function App() {

  return (
    <div className="App">
      <Header title="Homepage"/>
      <Content/>
      <User_list/>
      <Footer/>
    </div>
  );
}

export default App;
