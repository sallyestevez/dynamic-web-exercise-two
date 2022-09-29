import react, { useMemo } from "react";

function ArticleCard( { blurb, date, id, imageAlt, imageSrc, title,
} ) {
    const articleDate = useMemo(() => {
        if(!date) return '';
        const parsedDate = new Date(date);
        return parsedDate.toDateString();
    }, [date]);

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
                <p className="date">{articleDate}</p>
                <p className="blurb">{blurb}</p>
                <p className="link">
                    <a href={`/article/${id}`}>Read More</a>
                </p>
            </div>
        </div>
    )
}

export default ArticleCard;