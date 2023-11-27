'use client' // Error components must be Client Components

import { useEffect } from 'react'
import Link from 'next/link'
import '@/app/styles/Error.css'

export default function Error({ error, reset }) {
    useEffect(() => {
        // Log the error to an error reporting service
        console.error(error)
    }, [error])

    return (
        <div className='PageNotFound'>
            <div className='PageNotFound_container'>
                <button className='PageNotFound_button'>خطأ 500</button>
                <h1>حدث خطأ ما</h1>
                <p>حدث خطأ ما سيتم اصلاحه في اقرب وقت ممكن</p>
                <div className='PageNotFound_btns'>
                    <Link href='/'>
                        <button className='PageNotFound_button'>العوده الي الصفحه الرئيسيه</button>
                    </Link>
                    <button className='PageNotFound_try' onClick={() => reset()}>اعاده المحاوله</button>
                </div>
            </div>
        </div>
    )
}