import './App.css';

function Header(props) {
  return <header className="App-header">
      {/*https://ko.reactjs.org/*/}
      <h1><a href='/' onClick={ event => {
        event.preventDefault();
        props.onChangeMode();
      }
      }>{props.title}</a></h1>
    </header>
}

function Alert() {
    return alert("I am Header!");
}

function Nav(props) {
    const li = [];

    for (let i=0; i < props.topics.length; i++) {
        let topic = props.topics[i];
        li.push(<li key={topic.id}><a href={topic.link}>{topic.title}</a></li>);
    }

  return  <nav>
      <ol>
          {li}
      </ol>
    </nav>
}

function Article(props) {
  return  <article>
      <h2>{props.title}</h2>
      <p>{props.description}</p>
    </article>
}

function App() {
    const topics = [
        {id:crypto.randomUUID(), title:"문서", link:"https://ko.reactjs.org/docs/getting-started.html"},
        {id:crypto.randomUUID(), title:"자습서", link:"https://ko.reactjs.org/tutorial/tutorial.html"},
        {id:crypto.randomUUID(), title:"블로그", link:"https://ko.reactjs.org/blog"},
        {id:crypto.randomUUID(), title:"커뮤니티", link:"https://ko.reactjs.org/community/support.html"}
    ]

  return (
    <div className="App">
        <Header title="React Props" onChangeMode={Alert}></Header>
        <Nav topics={topics}></Nav>
        <Article title="Welcome, Props!" description="I am Props."></Article>
    </div>
  );
}

export default App;
