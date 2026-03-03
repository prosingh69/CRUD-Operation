import React, { useState } from 'react'
import { AddData } from '../Api/AuthApi';

const Form = ({DisplayData,setDisplayData}) => {
    const [Data, setData] = useState({ title: "", body: "" })
    const handleFormData = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setData((prevData) => {
            return {
                ...prevData,
                [name]: value
            }
        })
    }

    const AddingDataToApi = async() => {
        const res = await AddData(Data);
        console.log(res)
        if(res.status === 201){
            setDisplayData([...DisplayData,res.data])
            setData({title:"",body:""})
        }
    }

    const SubmitFormData = (e) => {
        e.preventDefault();
        AddingDataToApi()
    }

    return (
        <form onSubmit={SubmitFormData} className='border-2 flex w-fit p-5 m-5 rounded-lg '>
            <div className='border-2 mx-2 flex items-center px-2 rounded-[5px] '>
                <label className='' >Title :</label>
                <input onChange={handleFormData} name='title' value={Data.title} className='outline-none mx-1' type="text" placeholder='Type Your Title' />
            </div>
            <div className='border-2 mx-2 flex items-center px-2 rounded-[5px]'>
                <label className=''> Descrption : </label>
                <input onChange={handleFormData} name='body' value={Data.body} className='outline-none mx-1' type="text" placeholder='Type Your Description' />
            </div>
            <button className='border-2 mx-3 px-6 py-2 rounded-[5px] active:scale-95' type='submit'>Add</button>
        </form>
    )
}

export default Form