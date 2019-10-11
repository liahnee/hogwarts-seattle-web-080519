import React from 'react'

class Filter extends React.Component {

    handleChange = (event) => {
        this.props.handleFilter(event.target.value);
    }

    render() {
        return (
            <div>
                <label>Filter Hogs </label>
                <select onChange={(e) => this.handleChange(e)}>
                    <option selected value='Please Select an Option'> Please Select an Option</option> 
                    <option value="all">All</option>
                    <option value="true">Greased</option>
                    <option value="false">Ungreased</option>
                </select>                
            </div>
        );
    };

}

export default Filter;