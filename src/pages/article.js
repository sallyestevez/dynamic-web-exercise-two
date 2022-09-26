import React from "react";

function Article(){
    const backgroundImageUrl = "url('https://media.istockphoto.com/photos/neon-background-abstract-blue-and-pink-with-light-shapes-line-picture-id1191658515?b=1&k=20&m=1191658515&s=612x612&w=0&h=BtKT_wMgQzpsM_m_AkKciHxT7cY0kW7FijIzryc1cMk=')"
    return (
        <main className="article--content">
            <header 
                className="article--header"
                style={{
                    backgroundImage: backgroundImageUrl,
                    padding: "40px 25px"
                }}
            >
                <div className="article-header-text">
                    <h1 className="articleTitle">Article Title</h1>
                    <p className="articleDate">Date</p>
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