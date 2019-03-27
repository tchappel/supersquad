import React from 'react'
import {connect} from 'react-redux'
import {Card} from 'antd'
import HeroTable, {heroProperties} from "../HeroTable"

const createSumOfHeroes = (selectedHeroes) => {
    const SumOfHeroes = {}
    selectedHeroes.forEach(hero => {
        Object.keys(hero).forEach(property => {
            if (heroProperties.includes(property)) {
                if (SumOfHeroes[property] === undefined) {
                    SumOfHeroes[property] = 0
                }
                SumOfHeroes[property] += hero[property]
            }
        })
    })
    return SumOfHeroes
}

const SelectedHeroesTotals = ({selectedHeroes}) => {
    const sumOfHeroes = createSumOfHeroes(selectedHeroes)
    if (selectedHeroes.length === 0) return null
    return (
        <Card>
            <HeroTable hero={sumOfHeroes}/>
        </Card>
    )
}

const mapStateToProps = (state) => ({
    selectedHeroes: state.selectedHeroes
})

export default connect(mapStateToProps)(SelectedHeroesTotals)