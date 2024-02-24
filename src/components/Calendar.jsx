
import React from "react";
import Event from "./Event";

const Calendar = () =>{

    return(
        <>
        <div className="calendar"></div>
        <table>
            <thead>
            <tr>
                <th></th>
                <th>Sunday</th>
                <th>Monday</th>
                <th>Tuesday</th>
                <th>Wednesday</th>
                <th>Thursday</th>
                <th>Friday</th>
                <th>Saturday</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td className="time">8 am</td>
                <td><Event event='Start hike @ trailhead' color='green'/></td>
                <td><Event event='Wake up' color='green'/></td>
                <td><Event event='Wake up' color='green'/></td>
                <td><Event event='Wake up' color='green'/></td>
                <td><Event event='Go home ' color='green'/></td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td className="time">9 am</td>
                <td></td>
                <td><Event event='Dismantle tent' color='pink'/></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td className="time">10 am</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td className="time">11 am</td>
                <td><Event event='Stop @ Harpers Ferry' color='pink'/></td>
                <td></td>
                <td><Event event='Hike to the top of Maryland Heights' color='pink'/></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td className="time">12 pm</td>
                <td><Event event='Have lunch' color='blue'/></td>
                <td><Event event='Have lunch' color='blue'/></td>
                <td><Event event='Have lunch' color='blue'/></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td className="time">1 pm</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td className="time">2 pm</td>
                <td><Event event='Get back on the trail' color='green'/></td>
                <td></td>
                <td><Event event='Get back on the trail' color='green'/></td>
                <td></td>
                <td><Event event='Explore historic sites' color='green'/></td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td className="time">3 pm</td>
                <td></td>
                <td></td>
                <td></td>
                <td><Event event='Get back on the trail' color='green'/></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td className="time">4 pm</td>
                <td><Event event='Arrive @ shelter' color='green'/></td>
                <td><Event event='Arrive @ shelter' color='green'/></td>
                <td><Event event='Arrive @ shelter' color='green'/></td>
                <td><Event event='Arrive @ shelter' color='green'/></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td className="time">5 pm</td>
                <td><Event event='Set up camp' color='green'/></td>
                <td><Event event='Set up camp' color='green'/></td>
                <td><Event event='Set up camp' color='green'/></td>
                <td><Event event='Set up camp' color='green'/></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
                
            </tbody>
        </table>
        </>
    )
}

export default Calendar;