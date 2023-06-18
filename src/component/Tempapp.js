import React,{useState,useEffect} from 'react'
import { FcGlobe } from "react-icons/fc";
import image from "./img/backimage.png"
// import style from "./css/Style.css"

const Tempapp = () => {

  const style = {display: 'inline' , fontSize: "50px"}
  const [city, setCity] = useState(null)
  const [search, setSearch] = useState("")

  useEffect(() => {
    const fetchApi = async()=>{
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=9c1b54b4fbaddc0e8a469a7259fec5e5`
      const response = await fetch(url)
      const resJson = await response.json();
      setCity(resJson.main)
    }
    fetchApi();

  },[search])

  
  return (
    <div className=" mx-auto h-screen flex item-center justify-center flex-col"
    style={{ backgroundImage:`url(${image})`,backgroundRepeat: "no-repeat", backgroundSize: "contian"}}
    > 
      <div className='mx-auto w-50 h-[500] border-5 m-7 p-10 rounded-lg shadow-2xl '>
        <div className="h-[7rem] ">
         
          <input className='font-bold font-display rounded-3xl text-2xl p-3 focus:outline-none ' placeholder='Search' type="search" value={search} onChange={(event)=>{
                setSearch(event.target.value)
          
          }}>

          </input>
        </div>
       

        
      {!city ? (<p className='text-center font-display font-extrabold'><FcGlobe style={style}/>No Data Found</p>):
      (
        <div className=' h-60 text-center'>
          <div>
          {/* <IconContext.Provider value={{color: 'blue',size: '100px' }}/> */}
          <h1 className='text-5xl p-3 font-display font-black'><FcGlobe style={style}/>{search}</h1>
          </div>
          <h2 className='text-3xl px-2 font-display font-bold'>{city.temp}°Cel</h2>
          <h3 className='text-2xl px-3 font-display font-semibold text-slate-700'>{city.temp_min}°Cel || {city.temp_max}°Cel</h3>
        </div>
      )} 

      </div>
    </div>
  )
}

export default Tempapp