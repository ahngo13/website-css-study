import logo from './images/mainLogo.png';
import './App.css';

function App() {
  return (
    <>
      <section id="wrap">
          <h1>이지스 퍼블리싱</h1>
          <header>
              <strong className="logo_box"><img src={logo} alt="이지스 퍼블리싱"/></strong>
              <nav>
                  <ul>
                    <li><a href="#">회사소개</a></li>
                    <li><a href="#">도서소개</a></li>
                    <li><a href="#">FAQ</a></li>
                    <li><a href="#">Contact Us</a></li>
                  </ul>
              </nav>
          </header>
      </section>
      <section id="container">

      </section>
      <footer>

      </footer>
    </>
  );
}

export default App;
