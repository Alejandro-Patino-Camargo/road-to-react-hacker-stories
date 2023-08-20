import * as React from "react";

function App() {
  const stories = [
    {
      title: "NVIM config",
      author: "Alejandro",
      url: "LazyVim.com",
      num_comments: "3",
      points: "5",
      objectID: "0",
    },
    {
      title: "Git cook book",
      author: "some nerd",
      url: "https://git.seveas.net/",
      num_comments: "2",
      points: "3",
      objectID: "2",
    },
  ];

  function handleSearch(event) {
    console.log(event.target.value);
  }

  return (
    <div>
      <h1>Hacker Stories</h1>
      <Search onSearch={handleSearch} />
      <hr />
      <List list={stories} title="React Ecosystem" />
    </div>
  );
}

function List(props) {
  return (
    <div>
      <h2>{props.title}</h2>
      <ul>
        {props.list.map(function (item) {
          return <Item key={item.objectID} item={item} />;
        })}
      </ul>
    </div>
  );
}

const Item = (props) => {
  const { item } = props;
  return (
    <li>
      <span>
        <a href={item.url}>{item.title}</a>
      </span>
      <span> by {item.author}</span>
      <span> {item.points}</span>
    </li>
  );
};

function Search(props) {
  const [searchTerm, setSearchTerm] = React.useState("");

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
    props.onSearch(event);
  };

  return (
    <div>
      <label htmlFor="search">Search</label>
      <input id="search" type="text" onChange={handleChange} />
      <p>
        Search for <strong>{searchTerm}</strong>
      </p>
    </div>
  );
}

export default App;
