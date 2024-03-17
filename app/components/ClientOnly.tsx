'use client';   //since using useState so client component
//this component is used to wrap client components to avoid hydration problem..

import { useEffect, useState } from "react";

interface ClientOnlyProps {
    children: React.ReactNode;
}

const ClientOnly: React.FC<ClientOnlyProps> = ({
    children
}) => {
    const [hasMounted, setHasMounted] = useState(false);
    useEffect(()=>{ //why using useEffect here?
        //when this component loads implies it is finished with server side rendering and it can be mounted 
        setHasMounted(true);
    },[]);

    if(!hasMounted){
        return null;
    }

    return (
        <>
            {children}
        </>
    );
}

export default ClientOnly;