import React  from "react";
import Card from "./card";

function Cards({users,removeCard}){
return( 
<div className="bg-zinc-00 flex-wrap gap-5 px-5 py-5 flex items-center justify-center " >
    {users.map((item,index)=>{      
          return <Card removeCard={removeCard} id={index} users={item} item={item} key={index} />
    })}
</div>
 ) 
}
export default Cards;