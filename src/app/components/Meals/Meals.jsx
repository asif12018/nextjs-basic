'use client'
import error from '@/app/error';
import Image from 'next/image';
import React, { useState } from 'react'

function Meals() {
    const [search, setSearch] = useState();
    const [meals, setMeals] = useState([]);
    const [error, setError] = useState('')
    const loadData = async(name) =>{
        try{
            const res = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${name}`)
        const data = await res.json()
        setMeals(data);
        } catch(error){
            console.log(error)
            setError('no data found')
        }
    }
    const handler = (e) =>{
        console.log(e.target.value)
        setSearch(e.target.value);
    }
   

    return (
        
             <div className='mt-12'>
                <input onChange={handler} className='p-4 outline-none border-2 text-slate-900' type="text" placeholder='search meal..' />
                <button onClick={()=>loadData(search)} className='bg-red-400 p-4'>Search</button>
                <div className='mt-12 grid grid-cols-3 gap-12'>
                     
                     {
                         meals?.meals?.map(({idMeal,strMeal, strInstructions, strMealThumb})=><div className='border-2 p-4' key={idMeal}>
                            <Image src={strMealThumb} alt={'pic'} width={500} height={500}/>
                            <h6>{strMeal}</h6>
                            <p>{strInstructions}</p>
                        </div>)
                     }

                </div>
            </div>
      
    )
}

export default Meals
