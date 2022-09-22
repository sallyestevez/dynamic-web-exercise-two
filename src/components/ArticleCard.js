import react from "react";

function ArticleCard( {blurb, date, imageAlt, imageSrc, title} ) {
    // props is always an object 
    // that comes from the parent
    // TODO: make sure to go over link
    return (
        <div className="articleCard">
            <div className="articleCard--image">
                <img src={imageSrc} alt={imageAlt}></img>
            </div>
            <div className="articleCard--text">
                <h2 className="title">{title}</h2>
                <p className="date">{date}</p>
                <p className="blurb">{blurb}</p>
                <p className="link">
                    <a href="">Link</a>
                </p>
            </div>
        </div>
    )
}

export default ArticleCard;