import { easePolyOut } from 'd3-ease'
import Animate from 'react-move/Animate'


import Foden from '../../../Resources/images/players/Foden.png'
import Mahrez from '../../../Resources/images/players/Mahrez.png'
import Kevin from '../../../Resources/images/players/Kevin.png'
import Raheem from '../../../Resources/images/players/Raheem.png'
import PlayerCard from '../../Utils/PlayerCard'

let cards = [
    {
        bottom:90,
        left:300,
        player:Foden,
        num:47
    },
    {
        bottom:60,
        left:200,
        player:Mahrez,
        num:25
    },
    {
        bottom:30,
        left:100,
        player:Raheem,
        num:7
    },
    {
        bottom:0,
        left:0,
        player:Kevin,
        num:17
    }
]

const HomeCards = (props) => {

    const showAnimateCards = () => (
        cards.map((card,i)=>(
            <Animate
                key={i}
                show={props.show}
                start={{
                    left:0,
                    bottom:0
                }}
                enter={{
                    left:[card.left],
                    bottom:[card.bottom],
                    timing:{ delay:500,duration: 500, ease:easePolyOut}
                }}
            >
                {({left,bottom})=>(
                    <div
                        style={{
                            position:'absolute',
                            left,
                            bottom
                        }}
                    >
                       <PlayerCard
                            number={card.num}
                            name="Kevin"
                            lastname="De Bruyne"
                            bck={card.player}
                       />
                    </div>
                )}
            </Animate>
        ))
    )


    return(
        <div>
            {showAnimateCards()}
        </div>
    )
}

export default HomeCards;