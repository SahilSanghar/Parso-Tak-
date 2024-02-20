import { useEffect, useState } from 'react';
import './App.css';
import News from './News';

function App() {

  let [articles, setArticles] = useState([]);
  let [category, setCategory] = useState("India");

  useEffect(()=>{
    fetch(`https://newsapi.org/v2/everything?q=${category}&from=2024-02-17&apiKey=35d9c1575305430fb8856299feec24f2`)
    .then((Response)=> Response.json())
    .then((news)=>{
      setArticles(news.articles)
      console.log(news.articles)
    })
    .catch((err)=>{
      console.log(err)
    })
  }, [category])

  return (
    <div className="App">
      
      <header className='header'>
        <h1>Parso Tak</h1>
        <input type='text' placeholder='search news' onChange={(event) => {
          if(event.target.value !== "") {
            setCategory(event.target.value)
          } else {
            setCategory("india")
          }
        }}/>
      </header>
      <section className='news-article'>
      {

        articles.length!==0?

        articles.map((article) => {
          return(
              <News article = {article} />
          )
        })
        :
        <h3>No news for searched text</h3>
      }
      </section>
    </div>
  );
}

export default App;
