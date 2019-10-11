import React from 'react'

class Sort extends React.Component {
    state = { };
    handleChange = (event) => {
        this.props.handleSort(event.target.value);
    }

    render() {
        return (
            <div>
                <label>Sort Hogs </label>
                <select onChange={(e) => this.handleChange(e)}>
                    <option selected value='Please Select an Option'> Please Select an Option</option> 
                    <option value="name">Name</option>
                    <option value="weight">Weight</option>
                </select>                
            </div>
        );
    };

}

export default Sort;