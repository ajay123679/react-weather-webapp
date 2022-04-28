import React, { useEffect, useState } from 'react';
import "./css/style.css";


     
const Tempapp = () =>{
    

    const [city,setCity]=useState(null);
    const [search,setSearch]=useState("Mumbai");

    useEffect( ()=>{
        const fetchApi=async()=>{
             const url=`https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=344cb7dbcfe2dd456c6a8e57a12bf200`;
             const response=await fetch(url);
             const resJson=await response.json();
             setCity(resJson.main);
        };

        fetchApi();
    },[search])
        const getCurrentDay=()=>{
        var weekday = new Array(7);
          weekday[0] = "Sun";
          weekday[1] = "Mon";
          weekday[2] = "Tue";
          weekday[3] = "Wed";
          weekday[4] = "Thur";
          weekday[5] = "Fri";
          weekday[6] = "Sat";
  
          
          let currentTime=new Date();
          let day=weekday[currentTime.getDay()];
          return day;
          };
          const getCurrentMonth=()=>{
            var months = [
             "Jan",
             "Feb",
             "Mar",
             "Apr",
             "May",
             "Jun",
             "Jul",
             "Aug",
             "Sep",
             "Oct",
            "Nov",
             "Dec"
            ];
            var now=new Date();
            var month=months[now.getMonth()];
            return month;
        };
        const getCurrentDate=()=>{
            var now=new Date();
            var date=now.getDate();
            return date;
        };
        const getCurrentHours=()=>{
            var now=new Date();
            var hours=now.getHours();
            return hours;
        };
        const getCurrentMinutes=()=>{
            var now=new Date();
            var mins=now.getMinutes();
            return mins;
        };
      
        const getPeriod=()=>{
            let periods="AM";
            var now=new Date();
            var hours=now.getHours();
            var mins=now.getMinutes();
            if(hours>11)
            {
              periods="PM";
              if(hours>12) hours-=12;
            }
            if(mins<10)
            {
              mins="0"+mins;
            }
            //return (month+" "+date+" | "+hours+":"+mins+":"+periods);
            return periods;
        };

    return(
        <>


        <div className='box'>
            <div className='inputData'>
                <input type="search" value={search} className='inputFeild' onChange={(event)=>{setSearch(event.target.value)}}/>
            </div>
            {!city?(
            <p className="errorMsg">No Data Found</p>
        ):
         (
            <div>

            <div className="info">
            <h2 className="location">
            <i className="fas fa-street-view">
            </i>{search}</h2>
            <p id="date">{getCurrentDay()} | {getCurrentMonth()} {getCurrentDate()} | {getCurrentHours()}:{getCurrentMinutes()} {getPeriod()}</p>
            <h1 className="temp">{city.temp}℃el</h1>
            <h3 className="tempmin_max">Min : {city.temp_min}℃el | Max : {city.temp_max}℃el</h3>
            
          </div>
          <div className='wave -one'></div>
          <div className='wave -two'></div>
          <div className='wave -three'></div>
          <div id="weathercon"><i class="fas fa-cloud-sun" style={{color: "yellow"}}></i>
           </div>
          </div>
        )

        }
        
        </div>
        </>
    )
}

export default Tempapp;