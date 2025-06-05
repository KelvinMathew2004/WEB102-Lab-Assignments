import React from "react";
import Event from './Event'

const Calendar = () => {
    return (
        <div className="Calendar">
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
                        <Event event='Starbucks ☕️' color ='green' location='646 Michigan Ave'/>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <Event event='Yolk 🍳' color ='green' location='355 E Ohio St'/>
                        <td></td>
                    </tr>
                    <tr>
                        <td className="time">9 am</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <Event event='Subway 🚊' color ='pink' location='Roosevelt Station'/>
                        <td></td>
                        <td></td>
                        <Event event='The Bean 🫘' color ='blue' location='Millenium Park'/>
                    </tr>
                    <tr>
                        <td className="time">10 am</td>
                        <td></td>
                        <Event event='River Cruise ⛵️' color ='blue' location='Chicago River'/>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td className="time">11 am</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <Event event='Deep Dish 🍕' color ='green' location="Giodano's"/>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td className="time">12 pm</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <Event event='Subway 🚊' color ='pink' location='Roosevelt Station'/>
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
                        <td></td>
                        <td></td>
                        <Event event='Art Institute 🖼️' color ='blue' location='111 5 Michigan Ave'/>
                        <td></td>
                        <Event event='Girl & the Goat' color ='green' location='809 W Randolph St'/>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td className="time">3 pm</td>
                        <Event event='Cubs Game ⚾️' color ='blue' location='Wrigley Field'/>
                        <td></td>
                        <td></td>
                        <td></td>
                        <Event event='Subway 🚊' color ='pink' location='Roosevelt Station'/>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td className="time">4 pm</td>
                        <td></td>
                        <td></td>
                        <Event event='Fancy Dinner 🎩' color ='green' location='Maple & Ash'/>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td className="time">5 pm</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <Event event='Shopping 🛍️' color ='blue' location='Magnificent Mile'/>
                        <td></td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Calendar;