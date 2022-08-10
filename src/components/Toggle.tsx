import React from 'react';

import './toggle.css'


function Toggle({Name}:{Name:string}){

    return(
            <div className="toggle-switch">
                <input
                    type="checkbox"
                    className="toggle-switch-checkbox"
                    name={Name}
                    id={Name}
                />
                <label className="toggle-switch-label" htmlFor={Name}>
                    <div className="toggle-switch-visible"></div>
                </label>
            </div>
        )
    }
export default Toggle;