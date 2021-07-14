import React from 'react';


const CitySelector = (props) => {
    const selectionItems = props.cities.map((optionCity) => 
    <option value = {optionCity}>{optionCity}</option>
    );
    return(<div>
        <select onChange = {(selectedOption) => {
            props.citySelected(selectedOption.target.value);
            }}>
            {selectionItems}
        </select>
    </div>)
};

export default CitySelector;