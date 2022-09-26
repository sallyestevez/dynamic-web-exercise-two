import React from "react";
import ArticleCard from '../components/ArticleCard'

function List() {
    return (
        <main className="pageWrapper">
            <h1>Articles</h1>
            <ArticleCard 
                blurb="Blurb" 
                date="Date" 
                imageAlt="hi" 
                imageSrc="hi again" 
                title="Article Title"
            />
            <ArticleCard 
                blurb="Blurb" 
                date="Date" 
                imageAlt="hi" 
                imageSrc="hi again" 
                title="Article Title"
            />
            <ArticleCard 
                blurb="Blurb" 
                date="Date" 
                imageAlt="hi" 
                imageSrc="hi again" 
                title="Article Title"
            />
        </main>
    )
}

export default List;