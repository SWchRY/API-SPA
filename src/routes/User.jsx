import React, { Suspense } from "react";
import { useEffect, useState } from "react";
import { Await, useLoaderData, useParams, Link } from "react-router-dom";
import icon from './../assets/imgs/album-icon.png'
import {redirect} from "react-router-dom";
import NoUser from "./NoUser";
import Album from "./Album";


export const loader = async ({params: { id }}) => {
    const userPromise = await fetch(
        `https://jsonplaceholder.typicode.com/users/${id}`
    )
    .then((r) => {
        if(r.ok){
            return r.json()
        } 
        else{
            throw new Error('fuck')
    }})
    
    
    const albumsPromise = await fetch(
        `https://jsonplaceholder.typicode.com/albums`
    )
    .then((r) => r.json())
    
    return { userPromise, albumsPromise }
}



export default function User(){
    const { userPromise } = useLoaderData()
    const { albumsPromise } = useLoaderData()
    console.log(userPromise)
    return (<Suspense fallback={<div>Loading...</div>}>
        <Await resolve={userPromise} errorElement={<NoUser/>}>
            {(user) =>{
            return(
                <div>
                    <div>
                        <div className="text-lg bold font-medium">{user.name}</div>
                        <div className="text-slate-400">Username: {user.username}</div>
                        <div className="text-slate-400">Email: <a href={"mailto:" + `${user.email}`}>{user.email}</a></div>
                        <div className="text-slate-400">Phone: <a href={"tel:" + `${user.phone}`}>{user.phone}</a></div>
                        <div className="text-slate-400">Site: <a href={"http://" + `${user.website}`}>{user.website}</a></div>
                    </div>
                    <div className="mt-10">
                        <p className="text-xl mb-2.5">Albums</p>
                        <div className="flex flex-col items-start bold font-medium">
                        {
                            albumsPromise.map((albumsPromise) => albumsPromise.userId == user.id ?
                            <Link 
                            to={`/albums/${albumsPromise.id}`}
                            className="hover:text-blue-600 flex items-center gap-x-1"
                            ><img src={icon} className="w-4 h-3"/><div className="border-b border-black hover:border-blue-600">{albumsPromise.title[0].toUpperCase() + albumsPromise.title.slice(1)}</div>
                            </Link>
                            :
                            '')
                        }
                        </div>
                    </div>
                </div>

            )
            }
            }
        </Await>
    </Suspense>
    )
}
