import React from "react"

function internationalLinks(props) {
    return (
        <div>
            <input type="checkbox" />
            <p>{props.item.language}</p>
        </div>
    )
}

export default internationalLinks