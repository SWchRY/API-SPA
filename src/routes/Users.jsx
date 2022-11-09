import React from "react";
import { useCallback } from "react";
import {useEffect, useState} from 'react'
import { Navigate, useLoaderData, useNavigate, Link} from "react-router-dom";
import './../dist/output.css'


export const loader = async () => {
    const users = await fetch(
        'https://jsonplaceholder.typicode.com/users'
    ).then((r) => r.json())
    return { users }
}

export default function Users(){
    const { users } = useLoaderData();
    return(
        <div className="flex flex-col">
            {users.map((el) => (
                <div>
                    <Link 
                    className="text-lg bold font-medium border-b border-black hover:text-blue-600 hover:border-blue-600" 
                    key={el.id}
                    to={`/users/${el.id}`}
                    >
                        {el.name}
                    </Link>
                </div>
            ))}
        </div>
    )
}

