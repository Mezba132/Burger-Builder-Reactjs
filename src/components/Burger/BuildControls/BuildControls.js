import React from 'react';
import Classes from './BuildControls.module.css';
import BuildControl from './BuildControl/BuildControl';

const controls = [
    { label : "Salad" , type : "Salad"},
    { label : "Meat" , type : "Meat"},
    { label : "Cheese" , type : "Cheese"},
    { label : "Bacon" , type : "Bacon"},
];

const buildControls = () => (
        <div className={Classes.BuildControls}>
            {controls.map( bctrl => {
            return <BuildControl key={bctrl.label} label={bctrl.label} />
            })}
        </div>
)
    

export default buildControls;