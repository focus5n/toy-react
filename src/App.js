// noinspection JSUnresolvedVariable

import './App.css';
import {useState} from "react";

function Header(props) {
    return <header className="App-header">
        <h1><a href='/' onClick={event => {
            event.preventDefault();
            props.onChangeMode();
        }}>{props.title}</a></h1>
    </header>
}

function Nav(props) {
    const li = [];

    for (let i = 0; i < props.topics.length; i++) {
        let topic = props.topics[i];
        li.push(<li key={topic.id}><a href={topic.link}>{topic.title}</a></li>);
    }

    return <nav className="Nav">
        <ol>
            {li}
        </ol>
    </nav>
}

function Article(props) {
    return <article className="Article">
        <h2>{props.title}</h2>
        <p>{props.description}</p>
    </article>
}

function Create(props) {
    return <article>
        <h2>Create</h2>
        <form onSubmit={event => {
            event.preventDefault();
            const title = event.target.title.value;
            const body = event.target.body.value;
            props.onCreate(title, body);
        }}>
            <p><input type="text" name="title" placeholder="title"/></p>
            <p><textarea name="body" placeholder="body"></textarea></p>
            <p><input type="submit" value="Create"/></p>
        </form>
    </article>
}


function Update(props) {
    return <article>
        <h2>Update</h2>
        <form onSubmit={event => {
            event.preventDefault();
            const title = event.target.title.value;
            const body = event.target.body.value;
            props.onUpdate(title, body);
        }}>
            <p><input type="text" name="title" placeholder="title"/></p>
            <p><textarea name="body" placeholder="body"></textarea></p>
            <p><input type="submit" value="Update"/></p>
        </form>
    </article>
}

function App() {
    // const _mode = useState("WELCOME");
    // const mode = _mode[0];
    // const setMode = _mode[1];
    const [mode, setMode] = useState('WELCOME');
    const [nextId, setNextId] = useState(5);
    const [topics, setTopics] = useState([{
        id: 1,
        title: "??????",
        link: "https://ko.reactjs.org/docs/getting-started.html"
    }, {id: 2, title: "?????????", link: "https://ko.reactjs.org/tutorial/tutorial.html"}, {
        id: 3,
        title: "?????????",
        link: "https://ko.reactjs.org/blog"
    }, {id: 4, title: "????????????", link: "https://ko.reactjs.org/community/support.html"}]);
    let content;
    let contextControl = null;

    if (mode === "WELCOME") {
        content = <Article title="Welcome!" description="I am Welcome."></Article>;
        contextControl = <>
            <li><a id="updateButton" href={"/update/" + nextId} onClick={event => {
                event.preventDefault();
                setMode("UPDATE")
            }}>isUpdate?</a>
            </li>
            <li>
                <input type="button" value="Delete" onClick={() => {
                    const newTopics = [];
                    for (let i=0; topics.length; i++) {
                        if(topics[i] !== nextId) {
                            newTopics.push(topics[i]);
                        }
                    }
                    setTopics(newTopics);
                    setMode("WELCOME");
                }}/>
            </li>
        </>;
    } else if (mode === "REACT") {
        content = <Article title="Welcome, React!" description="I am React."></Article>;
    } else if (mode === "CREATE") {
        content = <Create onCreate={(_title, _body) => {
            const newTopic = {id: nextId, title: _title, body: _body}
            const newTopics = [...topics];
            // noinspection JSCheckFunctionSignatures
            newTopics.push(newTopic);

            setTopics(newTopics);
            setMode("WELCOME");
            setNextId(nextId + 1);
        }}></Create>
    } else if (mode === "UPDATE") {
        content = <Update title="" body="" onUpdate={(_title, _body) => {
            const newTopic = {id: nextId, title: _title, body: _body};
            const newTopics = [...topics];
            newTopics.push(newTopic);
            setMode("REACT");
            setNextId(nextId + 1);
        }}></Update>
    } else {
        content = <Article title="Welcome!" description="I am Welcome."></Article>;
    }

    return (<div className="App">
        <Header title="React Props" onChangeMode={() => {
            if (mode === "WELCOME") {
                setMode("REACT");
            } else {
                setMode("WELCOME");
            }
        }}></Header>
        <Nav topics={topics}></Nav>
        {content}
        <ul>
            <li><a id="CreateButton" href="/create" onClick={event => {
                event.preventDefault();
                setMode("CREATE");
            }}>isCreate?</a></li>
            {contextControl}
        </ul>

    </div>);
}

export default App;
