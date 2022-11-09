import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import icon from './../assets/imgs/album-icon.png'
 
export const loader = async () => {
    const albums = await fetch(
        'https://jsonplaceholder.typicode.com/albums'
    ).then((r) => r.json())
    return { albums }
}


export default function Albums(){
    const { albums } = useLoaderData();
    console.log(albums)
    return(
        <div className="flex flex-col">
            {albums.map((el) =>( el.id <= 100 ?
                <div>
                    <Link 
                    className="text-lg bold font-medium  hover:text-blue-600 hover:border-blue-600 flex items-center  gap-x-1"
                    key={el.id}
                    to={`/albums/${el.id}`}
                    >
                            <img className="w-5 h-4"  src={icon}/>
                            <div className="border-b border-black hover:border-blue-600">
                                {el.title[0].toUpperCase() + el.title.slice(1)}
                            </div>
                    </Link>
                </div>
                : ''
            ))}
        </div>
    )        
}