import React from "react";
import { useForm } from "react-hook-form";



function Form({handleFormSubmit}){


const {register,handleSubmit,reset} = useForm();

const handleFormSubmitdata = (data) => {
     handleFormSubmit(data);
     reset();
}


return( 
<>
 <div className="h-30 mt-10 w-full rounded-md  bg-zinc-400 flex items-center justify-center " >
    <form onSubmit={handleSubmit(handleFormSubmitdata)}  
    
    className=" flex  flex-wrap items-center justify-center gap-2 px-4 py-4 rounded bg-zinc-300 " >
        <input {...register("name")}
        className="border w-50 outline-none px-2 py-1 text-xs rounded  " type="text" placeholder="Enter Name"  />

        <input {...register("disc")}
        className="border w-50 outline-none px-2 py-1 text-xs rounded " type="text" placeholder="Enter about" />

        <input {...register("image")}
        className="border w-50 outline-none px-2 py-1 text-xs rounded " type="text" placeholder="Image url" />
        <input className="bg-blue-400 w-50 rounded text-xs px-2 py-1 " type="submit" />
    </form>
 </div>

</>
)
}

export default Form;