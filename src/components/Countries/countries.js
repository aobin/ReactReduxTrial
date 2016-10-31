import React from "react";


export default class Countries extends React.Component {
    render()
    {
        const componentStyle =
        {
            "background-color": "lightblue",
            "align": "middle",
            "height": "100px",
            "text-align": "left",
            "vertical-align": "middle",
            "line-height": "90px",
            "display": "block"

        }

        return
        (

            <select id="countries">
                <option>Test1</option>
                <option>Test2</option>
                <option>Test3</option>
            </select>


        );
    }

}
