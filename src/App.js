import * as React from "react";

const list = [
  {
    title: "vim cheat sheet",
    author: "some nerd",
    num_comments: "5",
    points: "3",
    objectID: "0",
    url: "google.com",
  },
];

function List() {
  return (
    <ul>
      {list.map(function (item) {
        return (
          <li key={item.objectID}>
            <span>
              <a href={item.url}>{item.title}</a>
            </span>
            <span> by {item.author}</span>
            <span>{item.num_comments}</span>
            <span>{item.points}</span>
          </li>
        );
      })}
    </ul>
  );
}

function Search() {
  return (
    <div>
      <label htmlFor="search"> Search: </label>
      <input id="search" type="text" />
    </div>
  );
}

function App() {
  return (
    <div>
      <h1>Hacker Stories</h1>
      <Search />
      <hr />
      <List />
    </div>
  );
}

export default App;
