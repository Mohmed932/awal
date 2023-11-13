import Link from 'next/link'
import { Fragment } from "react"
// import '../../styles/SectionsViews.css'

const SectionsViews = ({ ViewsData }) => {
    const maiNewsViews = ViewsData.map(
        ({ _id, title, more_details: { date, largeImage } }) => (
            <Link href={`/news/${_id}`} key={_id} >
                <div className="kindOfnews_items">
                    <div className="img_date_loader">
                        <img
                            src={largeImage}
                            alt={title}
                            loading="lazy"
                            className="kindOfnews_items_largeImage"
                        />
                    </div>
                    <span>{date}</span>
                    <h5>{title}</h5>
                </div>
            </Link>
        )
    )
    return <Fragment>
        <div className="news_words">
            <div className="news_words_text">
                <h3>الاكثر مشاهده في التحقيقات</h3>
            </div>
            <div className="news_views">
                {maiNewsViews}
            </div>
        </div>
    </Fragment>
}

export default SectionsViews
