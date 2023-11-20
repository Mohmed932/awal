"use client"
import Link from "next/link";
import '@/app/styles/Miscellaneous.css'
import { useContext, useState } from "react";
import SimpleSlider from "./Views";
import { DataContext } from "@/app/context";

const Miscellaneous = ({News,kind,NewsMiscellaneous}) => {
    const [count,setCount] = useState(1);
    const {isDarkMode} = useContext(DataContext)
    return (
        <div 
        className={isDarkMode ? "AllMiscellaneous dark-mode" : "AllMiscellaneous"}
        >
            <div className='AllMiscellaneous_container'>
                <div className='AllMiscellaneous_left'>
                    <div className='AllMiscellaneous_left_line'>
                        <h1>{kind}</h1>
                    </div>
                    <div className='AllMiscellaneous_items' >
                        {News?.map(({_id, title, more_details: { date, largeImage, one } }, idx) => (
                            <div className='AllMiscellaneous_item' key={idx}>
                                <div className='AllMiscellaneous_item_img'>
                                    <img src={largeImage} alt={title} loading='lazy' />
                                </div>
                                <Link href={`/single/${_id}`} onClick={()=>window.scrollTo({top:"0"})}><h1>{title}</h1></Link>
                                <span>{date}</span>
                                <p>{one}... فراءه المزيد</p>
                            </div>
                        ))}
                    </div>
                    <div className='AllMiscellaneous_pagnation'>
                        <button>تحميل المزيد</button>
                    </div>
                </div>
                <div className='AllMiscellaneous_rifht'>
                    <div className='AllMiscellaneous_views'>
                        <div className='AllMiscellaneous_views_word'>
                            <h1>زوار بشاهدون الان</h1>
                        </div>
                      <SimpleSlider NewsMiscellaneous={NewsMiscellaneous}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Miscellaneous