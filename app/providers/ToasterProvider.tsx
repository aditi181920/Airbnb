'use client';

import { Toaster } from "react-hot-toast";  //toaster is  a foriegn library, so it is not adjuster to next app router. We need to wrap it around a wrapper or provider component


const ToasterProvider = () => {
  return (
    <Toaster/>
  )
}

export default ToasterProvider