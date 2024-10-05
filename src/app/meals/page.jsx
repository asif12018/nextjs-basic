import Meals from "../components/Meals/Meals"



function MealsPage() {

    return (
        <div className='p-12'>
            <h1 className='text-3xl font-semibold text-red-400'>Choose your meals</h1>
            <p>Choose meals of your choice by searching</p>
            
            <Meals/>
            
        </div>
    )
}

export default MealsPage
