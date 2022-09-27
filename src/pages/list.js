import React from "react";
import ArticleCard from '../components/ArticleCard'
import data from "../components/data"

console.log(data)

function List() {
    return (
        <main className="pageWrapper">
            <h1>Articles</h1>
            {data.map((article, i) => (
                <ArticleCard 
                    // react requires a key identifying value for anything you map over
                    key={i}
                    blurb={article.blurb} 
                    date={article.publishedDate} 
                    imageAlt={article.image.alt} 
                    imageSrc={article.image.url} 
                    title={article.title}
                />
            ))}

            
        </main>
    )
}

export default List;