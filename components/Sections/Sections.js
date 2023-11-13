import Link from "next/link"
import '../../styles/Sections.css'
import { Suspense } from "react"

const Sections = ({ Data }) => {
    const news = Data.map(
        ({ _id, title, more_details: { largeImage, date, one } }) => (
            <Link href={`/news/${_id}`} key={_id}>
                <div className="kindOfnews_items">
                    <div className="img_date">
                        <div className="img_date_loader">
                            <img
                                src={largeImage}
                                alt={title}
                                loading="lazy"
                                className="kindOfnews_items_largeImage"
                            />
                        </div>
                        <span>{date}</span>
                    </div>
                    <div className="title_desc">
                        <h4>{title}</h4>
                        <div>
                            {one.slice(0, 100)}..{" "}
                            <p className="Nav_paragraph">قراءه المزيد</p>
                        </div>
                    </div>
                </div>
            </Link>
        )
    )
    return <Suspense fallback={<h1>Loading.... ..</h1>}>
        <div className="kindOfnews_main">
            <div className="news_main">
                {news}
            </div>
        </div>
    </Suspense>
}

export default Sections
