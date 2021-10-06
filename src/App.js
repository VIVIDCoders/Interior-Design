import './App.css';
import Header from './Header';
import Gallery from './Gallery';
function App() {
  const images = [
    {
      name:'img1',
      url:'https://images.pexels.com/photos/3356416/pexels-photo-3356416.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
    },
    {
      name:'img2',
      url:'https://images.pexels.com/photos/3797991/pexels-photo-3797991.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
    },
    {
      name:'img3',
      url:'https://images.pexels.com/photos/3965509/pexels-photo-3965509.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
    },
    {
      name:'img4',
      url:'https://images.pexels.com/photos/3209045/pexels-photo-3209045.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
    }
  ]
  return (
    <div className="App">
    <div className="App-header">

      <Header/>
     
      </div>
      <Gallery images={images}/>

   
    </div>
  );
}

export default App;
