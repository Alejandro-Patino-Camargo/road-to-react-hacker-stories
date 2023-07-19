import * as React from "react";

const list = [
  {
    title: "NVIM config",
    author: "Alejandro",
    url: "LazyVim.com",
    points: "5",
    objectID: "0",
  },
];

function List() {
  return (
    <ul>
      {list.map(function (items) {
        return (
          <li key={items.objectID}>
            <span>
              <a href={items.url}>{items.title}</a>
            </span>
            <span> by {items.author}</span>
            <span> {items.points}</span>
          </li>
        );
      })}
    </ul>
  );
}

function Search() {
  return (
    <div>
      <label htmlFor="search">Search</label>
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
