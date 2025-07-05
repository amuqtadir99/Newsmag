
import image from "../assets/image.jpg"

const Newsitem = ({title, description, src, url}) => {
return (
    <div className="card news-item-card" style={{width: "320px"}}>
    <img src={src?src:image} style={{height:"200px", width:"100%"}} className="card-img-top" alt="..."/>
    <div className="card-body d-flex flex-column">
        <h5 className="card-title">{title.slice(0,50)}</h5>
        <p className="card-text">{description?description.slice(0,90):"News items description is not available at the moment please check back later.."}</p>
        <a href={url} target="_blank" rel="noreferrer" className="btn btn-info mt-auto">Read more</a>
    </div>
    </div>
)
}

export default Newsitem
