'use client' // Error components must be Client Components

import Link from 'next/link'
import '@/app/styles/Error.css'

export default function NotFound() {
    return (
        <div className='PageNotFound'>
            <div className='PageNotFound_container'>
                <button className='PageNotFound_button'>خطأ 404</button>
                <h1>عذرا لم يتم العثور علي الصفحه</h1>
                <p>نأسف لم نتمكن من العثور على الصفحة التي تبحث عنها</p>
                <div className='PageNotFound_btns'>
                    <Link href='/'>
                        <button className='PageNotFound_button'>العوده الي الصفحه الرئيسيه</button>
                    </Link>
                    <button className='PageNotFound_try' onClick={()=>reset()}>اعاده المحاوله</button>
                </div>
            </div>
        </div>
    )
}