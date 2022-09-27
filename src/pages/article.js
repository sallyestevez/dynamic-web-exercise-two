import React from "react";
import { useParams } from "react-router";
import Data from '../components/data';

function Article(){
    const { id } = useParams();

    const articleData = Data.find((article) => article.id === id);

    console.log(articleData);

    return (
        <main className="article--content">
            <header 

            >
                <div className="article-header-text">
                    <h1>{articleData.title}</h1>
                    <p>Date</p>
                    <h2 className="articleBlurb">Blurb</h2>
                </div>
            </header>
            <section>
                <div className="bodySection">
                    <p class="articleBody">Article Body Paragraph 1</p>
                    <h2>Header Two Inserted</h2>
                    <p>Paragraph 2</p>
                    <h3>Header Three Inserted</h3>
                    <p>Paragraph 3</p>
                    <p>Paragraph 4</p>
                </div>
            </section>
        </main>
    )
}

export default Article;