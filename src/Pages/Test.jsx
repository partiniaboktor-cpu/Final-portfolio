// import React, { Component, useEffect, useState } from 'react';
// import { supabase } from '../Supabase';

// const Test = () => {
// const [Projects, setProjects] = useState ([

// {    title:"",
//     category:[],
//     Cover_image:"",
//     date:"",
//     Role:"",
//     Tools:"",
//     Project_overview:"",
//     Project_overview:"",
// }
// ]);
// useEffect(()=>{

//  async function callGetApi(){

//     const projectapi = await supabase.from("Projects").select("*");
//     setProjects(projectapi.data)
    
// }



// callGetApi();
// },[]);


//     return (  <>
    
//     123456789
    
//     <p>
//         {Projects[0].title}
//     </p>
    
// {

//     // console.log(Projects[0])
// Projects[0].category.map((c)=>{
//     return <h1>{c}</h1>

// <div>

// <p>{Image.alt}</p>
// <img src={image.url} alt={image.alt} />

// </div>

// })
// }


    
//     </>);
// }
 
// export default Test;