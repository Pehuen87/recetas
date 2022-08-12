import React from 'react';

import './toggle.css'


function Toggle({ name, checked, readOnly }: { name: string, checked?: boolean, readOnly: boolean }) {

    return (
        <div className="toggle-switch">

            {readOnly?
            <input
                type="checkbox"
                className="toggle-switch-checkbox"
                name={name}
                id={name}
                checked={checked}
                readOnly={readOnly}
            />:
            <input
                type="checkbox"
                className="toggle-switch-checkbox"
                name={name}
                id={name}
            />}
            <label className="toggle-switch-label" htmlFor={name}>
                <div className="toggle-switch-visible"></div>
            </label>
        </div>
    )
}
export default Toggle;