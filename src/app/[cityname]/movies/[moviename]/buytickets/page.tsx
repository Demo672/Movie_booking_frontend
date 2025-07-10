"use client"

import React from 'react'
import DatePicker from 'react-horizontal-datepicker';
import './BuyTicketsPage.css'
import Link from 'next/link'
import {usePathname} from 'next/navigation'

// This is the page for buying tickets for a specific movie in a specific city
// The path is: /[cityname]/movies/[moviename]/buy_tickets  

// The page will display a datepicker for selecting the date of the movie
// The datepicker will be horizontal and will allow the user to select a date

const page = () => {

  const pathname = usePathname();
  const movie = {
    moviename: "Jawan",
    date: new Date(),
    language: "Hindi",
    type: "Action/Thriller",
    screens: [
      {
        name: "Screen 1",
        location: "PVR Cinemas, Forum Mall, Koramangala",
      },
      {
        name: "Screen 2",
        location: "INOX, Brigade Road, Bangalore",
      }, {
        name: "Screen 3",
        location: "Cinepolis, Orion Mall, Rajajinagar",
      }
    ]

  }


  const selectedDay = (val:any) =>{
        console.log(val)
    };


  return (
    <div className='buytickets'>
       <div className="s1">
        <div className="head">
          <h1>{movie.moviename} - {movie.language}</h1>
          <h3>{movie.type}</h3>
        </div>
        <DatePicker getSelectedDay={selectedDay}
                  endDate={100}
                  selectDate={new Date("2020-04-30")}
                  labelFormat={"MMMM"}
                  color={"var(--col1)"}          
/>
       </div>
       <div className="screens">
        {
          movie.screens.map((screen, index) => {
            return (
              <div className="screen" key={index}>
                <h2>{screen.name}</h2>
                <p>{screen.location}</p>
                <Link href={`${pathname}/${screen.name}`} className='theme_btn1 linkestylenone'>Select</Link>
              </div>
            )
          })    
        }
       </div>

    </div>
  )
}

export default page