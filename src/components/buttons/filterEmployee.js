import React from "react"
import "./style.css"



function filterEmployees(props) {
    return (
        <div>
        <div className="buttons">
            <button onClick={() => props.filterEmployee()} className="remove">Only 50 cool +</button>
        </div>
        <div className="buttons">
            <button onClick={() => props.sortEmployee()} className="remove">Sort by coolness</button>
        </div>
        </div>
    )
}

export default filterEmployees