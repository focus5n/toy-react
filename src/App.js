import './App.css';
import {useState} from "react";

function Header(props) {
  return <header className="App-header">
      <h1><a href='/' onClick={ event => {
        event.preventDefault();
        props.onChangeMode();
      }
      }>{props.title}</a></h1>
    </header>
}

function Nav(props) {
    const li = [];

    for (let i=0; i < props.topics.length; i++) {
        let topic = props.topics[i];
        li.push(<li key={topic.id}><a href={topic.link}>{topic.title}</a></li>);
    }

  return  <nav className="Nav">
      <ol>
          {li}
      </ol>
    </nav>
}

function Article(props) {
  return  <article className="Article">
      <h2>{props.title}</h2>
      <p>{props.description}</p>
    </article>
}



function App() {
    // const _mode = useState("WELCOME");
    // const mode = _mode[0];
    // const setMode = _mode[1];
    const [mode, setMode] = useState('WELCOME');

    const topics = [
        {id:crypto.randomUUID(), title:"문서", link:"https://ko.reactjs.org/docs/getting-started.html"},
        {id:crypto.randomUUID(), title:"자습서", link:"https://ko.reactjs.org/tutorial/tutorial.html"},
        {id:crypto.randomUUID(), title:"블로그", link:"https://ko.reactjs.org/blog"},
        {id:crypto.randomUUID(), title:"커뮤니티", link:"https://ko.reactjs.org/community/support.html"}
    ]
    let content;

    if (mode === "WELCOME") {
        content = <Article title="Welcome!" description="I am Welcome."></Article>;
    } else if (mode === "REACT") {
        content = <Article title="Welcome, React!" description="I am React."></Article>;
    } else {
        content = <Article title="Welcome!" description="I am Welcome."></Article>;
    }

  return (
    <div className="App">
        <Header title="React Props" onChangeMode={() => {
            if (mode === "WELCOME") {
                setMode("REACT");
            } else {
                setMode("WELCOME");
            }
        }
        }></Header>
        <Nav topics={topics}></Nav>
        {content}
    </div>
  );
}

export default App;
