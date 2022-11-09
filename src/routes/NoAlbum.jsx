import React from "react";
import { Navigate, useLoaderData, useNavigate, Link} from "react-router-dom";

export default function noUser(){
    return(
        <div className="justify-center flex flex-col text-center mt-24 gap-y-3">
            <p className="text-5xl">No such album</p>
            <p className="text-3xl mt-2 text-gray-500">Go to page <Link className="border-b border-gray-500 hover:text-blue-600 hover:border-blue-600" to={`/`}>Albums</Link></p>
        </div>
    )
}