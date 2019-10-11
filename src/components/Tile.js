import React from 'react';
import HogCard from './HogCard'
import aug from '../hog-imgs/augustus_gloop.jpg';
import bay from '../hog-imgs/bay_of_pigs.jpg';
import che from '../hog-imgs/cherub.jpg';
import gal from '../hog-imgs/galaxy_note.jpg';
import leg from '../hog-imgs/leggo_my_eggo.jpg';
import mud from '../hog-imgs/mudblood.jpg';
import pig from '../hog-imgs/piggy_smalls.jpg';
import por from '../hog-imgs/porkchop.jpg';
import rai from '../hog-imgs/rainbowdash.jpg';
import sob from '../hog-imgs/sobriety.jpg';
import the from '../hog-imgs/the_prosciutto_concern.jpg';
import tro from '../hog-imgs/trouble.jpg';
import tru from '../hog-imgs/truffleshuffle.jpg';


class Tile extends React.Component {

    renderTile = () => {
        const imgSrc = { 
            'Augustus Gloop': aug, 
            'Bay of Pigs': bay, 
            'Cherub': che, 
            'Galaxy Note': gal, 
            'Leggo My Eggo': leg, 
            'Mudblood': mud, 
            'Piggy smalls': pig, 
            'Porkchop': por, 
            'Rainbowdash': rai, 
            'Sobriety': sob, 
            'The Prosciutto Concern':the, 
            'Trouble': tro, 
            'TruffleShuffle': tru 
        };


        const tile = this.props.hogs.map( hog => { 
            const hogImgSrc = imgSrc[hog.name]
            const tile = <div key={hog.name}><HogCard hog={hog} hogImgSrc={hogImgSrc}/> </div>
            return tile   
        })
        return tile;
    }

    render() {
        return <div className='tiles'>{this.renderTile()}</div>
    };

}

export default Tile;