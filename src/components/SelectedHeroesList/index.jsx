import React from 'react'
import {connect} from 'react-redux'
import HeroCard from "../HeroCard"
import RemoveHeroButton from '../RemoveHeroButton'

const SelectedHeroesList = ({selectedHeroes}) => {
    return (
        selectedHeroes.map(it => (
            <HeroCard
                hero={it}
                key={it.id}
            >
                <RemoveHeroButton heroId={it.id} />
            </HeroCard>
        ))
    )
}

const mapStateToProps = (state) => {
    return {
        selectedHeroes: state.selectedHeroes,
    }
}

export default connect(mapStateToProps)(SelectedHeroesList)