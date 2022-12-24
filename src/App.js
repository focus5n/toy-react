import logo from './logo.svg';
import './App.css';

function Header() {
  return <header className="App-header">
      <h1><a href='https://ko.reactjs.org/'>React</a></h1>
    </header>
}

function Nav() {
  return  <nav>
      <li><a href='https://ko.reactjs.org/docs/getting-started'>문서</a></li>
      <li><a href='https://ko.reactjs.org/ko.reactjs.org/tutorial/tutorial'>자습서</a></li>
      <li><a href='https://ko.reactjs.org/blog'>블로그</a></li>
      <li><a href='https://ko.reactjs.org/community/support'>커뮤니티</a></li>
    </nav>
}

function Article() {
  return  <article>
      <h2>Welcome</h2>
      <p>Hello, React!</p>
    </article>
}

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Nav></Nav>
      <Article></Article>
    </div>
  );
}

export default App;
