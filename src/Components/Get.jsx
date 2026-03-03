import React, { useEffect, useState } from 'react'
import { GetData } from './../Api/AuthApi';
import Card from './Card';
import Form from './Form';

const Get = () => {
    const [Data, setData] = useState([])

    useEffect(() => {
        const getFetchData = async () => {
            const res = await GetData();
            setData(res.data);
            console.log(res.data);
        }
        getFetchData();
    }, [])
    const handleDeleteData = (id) => {
        setData((prevPosts) => prevPosts.filter((post) => post.id !== id))
    }


    return (
        <div className='flex justify-center items-center flex-col text-white'>
            <Form DisplayData = {Data} setDisplayData ={setData}/>
            <div className='flex flex-wrap justify-center items-center gap-4 '>
                {Data.map((data , index) => {
                    return <Card index={index} data={data} key={data.id} DeleteCard={handleDeleteData} />
                })}
            </div>
        </div>
    )
}

export default Get