"use client";
import { JSX, Suspense, useEffect, useState } from "react";
import { ServerComponent } from "./server";



export const ClientComponent = (props:{ details:JSX.Element}) => {

    const [showDetails, setShowDetails] = useState<boolean>(false);

    

    return (
        <div>
           <button type='button' className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600" onClick={() => setShowDetails(true)}>Show Details</button>
              { showDetails && (
              props.details
              )}
        </div>
    )
}