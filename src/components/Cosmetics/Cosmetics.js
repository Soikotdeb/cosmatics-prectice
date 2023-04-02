import React, { useEffect, useState } from 'react';
import Cosmatic from '../Cosmatic/Cosmatic';


const Cosmetics = () => {



const [cosmetics,setCosmetics] = useState([]);
useEffect(()=>{
    fetch('data.json')
    .then(res=>res.json())
    .then(data=>setCosmetics(data))
},[])

    return (
      
        <div>
            <h1>Wellcome To my  Cosmetics Store</h1>
        
         {
            cosmetics.map(cosmatic=><Cosmatic
                 key={cosmatic.id}
                 cosmatic={cosmatic}
            ></Cosmatic>)
        }

        </div>
    );
};

export default Cosmetics;