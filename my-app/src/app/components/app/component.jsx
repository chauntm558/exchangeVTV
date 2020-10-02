import React from "react";
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
/*
left menu
right menu
header 
main content
footer
*/

const appCtl = props => {
    
    return (
        <div className="container" name={props.name}>
            {props.text}- name={props.name}    
            <div className="modalMain">{props.children}</div>
            <input
                type="text"
                onChange={props.change}
                
            />
            <Button 
                variant="warning" 
                size="md"
                onClick={props.clickMethod}
                >OTher button
            </Button>
            <hr />
        </div>
    )
}
export default appCtl;