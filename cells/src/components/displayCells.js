import React from 'react';
import { Button } from 'react-bootstrap';

export default function DisplayCells(props) {
    var config = props.config;
    var cells = [];
    if (config) {
        config.forEach(function (current, index) {
            if (current === '1')
                cells.push(<Button variant='danger' className="roundButton" key={index}></Button>)
            else
                cells.push(<Button variant='secondary' className="roundButton" key={index}></Button>)
            console.log(cells)
        });

    }

    return <div>
        {cells.length > 0 ? (<><>{cells[cells.length - 1]} </>  <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-chevron-bar-right" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" d="M4.146 3.646a.5.5 0 0 0 0 .708L7.793 8l-3.647 3.646a.5.5 0 0 0 .708.708l4-4a.5.5 0 0 0 0-.708l-4-4a.5.5 0 0 0-.708 0zM11.5 1a.5.5 0 0 1 .5.5v13a.5.5 0 0 1-1 0v-13a.5.5 0 0 1 .5-.5z" />
        </svg></>) : ''}
        {cells}
        {cells.length > 0 ? (<><> <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-chevron-bar-left" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" d="M11.854 3.646a.5.5 0 0 1 0 .708L8.207 8l3.647 3.646a.5.5 0 0 1-.708.708l-4-4a.5.5 0 0 1 0-.708l4-4a.5.5 0 0 1 .708 0zM4.5 1a.5.5 0 0 0-.5.5v13a.5.5 0 0 0 1 0v-13a.5.5 0 0 0-.5-.5z" />
        </svg></>{cells[0]}</>) : ''
        }

    </div >;
}


