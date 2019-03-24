import React from 'react'
import {connect} from 'react-redux'
import HeroCard from "../HeroCard"
import AddHeroButton from "../AddHeroButton"

const HeroesList = ({heroes}) => {
    return (
        heroes.map(it => (
            <HeroCard
                hero={it}
                key={it.id}
            >
                <AddHeroButton heroId={it.id} />
            </HeroCard>
        ))
    )
}

const mapStateToProps = (state) => {
    return {
        heroes: state.heroes,
    }
}

export default connect(mapStateToProps)(HeroesList)