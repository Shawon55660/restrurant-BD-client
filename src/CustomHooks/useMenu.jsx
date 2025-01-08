import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import UseAxiosPublic from "./UseAxiosPublic";

const useMenu = ()=>{
    // const [menu,setMenu] = useState([]);
    // const [loading,setLoading] = useState(true)
  // useEffect(()=>{
      
  //     fetch(`${import.meta.env.VITE_SERVER_URL}/menus`)
  //             .then(res => res.json())
  //             .then(data => {setMenu(data)
  //               setLoading(false)
  //             })
  //             .catch(error => console.error('Error fetching menu:', error));
  // },[])
  const axiosPublic = UseAxiosPublic()
 const {data:menu=[],isPending:loading} = useQuery({
 queryKey:['menu'],
 queryFn:async()=>{
  const res = await axiosPublic.get('/menus')

  return res.data

 }
 })

  return [menu,loading]
}
export default useMenu