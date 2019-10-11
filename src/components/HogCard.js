import React, { Component } from 'react';




class HogCard extends Component {
    state = {
        currentSide: 'cube'
    }

    renderTile = () => {

        const changeSide = (event) => {
            const side = 'cube show-' + event.target.value
            
            this.setState({
                currentSide: side
            })
        }

        const { name, specialty, greased, weight } = this.props.hog
        const highestMedalAchieved = this.props.hog['highest medal achieved']
        
        return (
            <div key={name}>
                <div className="scene" >
                    <div id='cube' className={this.state.currentSide}>
                        <div className="cube__face cube__face--front">
                            <img width='200px' height='200px' src={this.props.hogImgSrc} alt={name} />
                        </div>
                        <div className="cube__face cube__face--back">
                            <h3>{weight} </h3>
                        </div>
                        <div className="cube__face cube__face--right">
                            <h3> {name} </h3>
                        </div>
                        <div className="cube__face cube__face--left">
                            <h3>{greased ? 'YESS!!' : 'NAHH' }</h3>
                        </div>
                        <div className="cube__face cube__face--top">
                            <h3 className='achievementText'>{highestMedalAchieved} </h3>
                        </div>
                        <div className="cube__face cube__face--bottom">
                            <h3>{specialty}</h3>
                        </div>
                    </div>
                </div>
                <p className="radio-group" 
                onChange={(e) => {changeSide(e)}}
                >
                    <label>
                        <input type="radio" name="rotate-cube-side" value="front"  /> Picture
                    </label>
                    <label>
                        <input type="radio" name="rotate-cube-side" value="right" /> Name
                    </label>
                    <label>
                        <input type="radio" name="rotate-cube-side" value="back" /> Weight
                    </label>
                    <label>
                        <input type="radio" name="rotate-cube-side" value="left" /> Greased?
                    </label>
                    <label>
                        <input type="radio" name="rotate-cube-side" value="top" /> Highest Medal
                    </label>
                    <label>
                        <input type="radio" name="rotate-cube-side" value="bottom" /> Specialty
                    </label>
                </p>    
            </div>
        )
    }

    render() {
        return <div>{this.renderTile()}</div>
    }
    
}


export default HogCard;