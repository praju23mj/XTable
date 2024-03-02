import React,{useState} from "react";
import './App.css';

function App() {
  const initialData=
  [
  
      { date: "2022-09-01", views: 100, article: "Article 1" },
  
      { date: "2023-09-01", views: 100, article: "Article 1" },
  
      { date: "2023-09-02", views: 150, article: "Article 2" },
  
      { date: "2023-09-02", views: 120, article: "Article 3" },
  
      { date: "2020-09-03", views: 200, article: "Article 4" }
  
  ]


  const [data, setData] = useState(initialData);
  const [sortBy, setSortBy] = useState(null);




  const sortByDate = () => {
    const sortedData = [...data].sort((a, b) => {
      if (a.date === b.date) {
        return b.views - a.views;
      }
      return new Date(b.date) - new Date(a.date);
    });
    setData(sortedData);
    setSortBy('date');
  };

  const sortByViews = () => {
    const sortedData = [...data].sort((a, b) => {
      if (a.views === b.views) {
        return new Date(b.date) - new Date(a.date);
      }
      return b.views - a.views;
    });
    setData(sortedData);
    setSortBy('views');
  };

  










  return (
    <div>
      <h1>Date and Views Table</h1>
      <button onClick={sortByDate}>Sort by Date</button>
      <button onClick={sortByViews}>Sort by Views</button>
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Viwes</th>
            <th>Article</th>
          </tr>
        </thead>
        <tbody>
          {data.map(({date,views,article}, index)=>(
          <tr key={index}>
            <td>{date}</td>
            <td>{views}</td>
            <td>{article}</td>
          </tr>
          ))}
        </tbody>
      </table>
     
    </div>
  );
}

export default App;
