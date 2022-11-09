import React, { Suspense } from "react";
import { useState } from "react";
import { Await, useLoaderData, useParams, Link } from "react-router-dom";
import NoAlbum from "./NoAlbum"





export const loader = async ({params: { id }}) => {
    const albumPromise = await fetch(
        `https://jsonplaceholder.typicode.com/albums/${id}`
    )
    .then((r) => r.json())
    const currentUser = await fetch(
    `https://jsonplaceholder.typicode.com/users/${albumPromise.userId}`
    )
    .then((r) => r.json())

    const currentPhotos = fetch(
            `https://jsonplaceholder.typicode.com/photos`
        ).then((r) => r.json())
        
    return {currentUser, albumPromise, currentPhotos}
}


export default function Album(){
    

    const { albumPromise } = useLoaderData()
    const { currentUser } = useLoaderData()
    const { currentPhotos } = useLoaderData()
    console.log(albumPromise)
    return <Suspense fallback={<div>Loading...</div>}>
        <Await resolve={currentPhotos}  errorElement={<NoAlbum/>}>
            {(el) =>{
                let newStr = albumPromise.title[0].toUpperCase() + albumPromise.title.slice(1);
            return(
                <div>
                    <p className="text-2xl font-medium">{newStr}</p>
                    <p>Created by: <Link className="hover:text-blue-600" to={`/users/${currentUser.id}`}>{currentUser.name}</Link></p>
                    <div className="grid grid-cols-3 grid-rows-3 gap-16 mt-10">
                        {
                            el.map((el) => el.albumId == albumPromise.id ? 
                            <img src={el.url}/>
                            :
                             '')
                        }
                    </div>
                </div>
            )
            }}
        </Await>
    </Suspense>
}
