import React from "react"
import "./style.css"


function filterEmployees(props) {
    return (
        <div className="buttons">
            <button onClick={() => console.log()} className="remove">Only 50 cool +</button>
        </div>
    )
}

export default filterEmployees