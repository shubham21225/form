import React  from "react";
import { TiDelete } from "react-icons/ti";

function Card({users,removeCard,id}){
return( <>
<div className="bg-zinc-600 w-45 hover:scale-105 duration-200 ease-in rounded overflow-hidden" >
    <div className=" h-40 w-full p-1 relative " >
      <div  onClick={()=>removeCard(id)}
       className="absolute  right-0 top-0  rounded  " >
        <TiDelete  className="text-zinc-200 bg-zinc-600 rounded hover:text-zinc-600 hover:bg-zinc-200 "   />
      </div>
         <img className=  "h-full w-full object-cover rounded bg-zinc-200   "  src={users.image} alt="" />
        
    </div>
    <div className="flex flex-col items-center flex-wrap justify-center" >
      <h4 className=" text-red-500 px-3 pb-1 text-xl  text-center  " >{users.name}</h4>
      <h6 className="text-xs text-zinc-300  px-3 pb-3" >{users.disc}</h6>  

    </div>

    
</div>

</> )

}

export default Card;