import React from 'react'
import HeroesList from '../HeroesList'
import {ColumnsWrapper, Column, ColumnTitle} from "./styled"
import SelectedHeroesList from '../SelectedHeroesList'
import SelectedHeroesTotals from '../SelectedHeroesTotals'
import soundtrack from '../../assets/sounds/soundtrack.mp3'

const App = () => {
    return (
        <>
            <ColumnsWrapper>
                <Column>
                    <ColumnTitle>Heroes</ColumnTitle>
                    <HeroesList/>
                </Column>
                <Column>
                    <ColumnTitle>Selected Heroes</ColumnTitle>
                    <SelectedHeroesList/>
                </Column>
                <Column>
                    <ColumnTitle>Team Totals</ColumnTitle>
                    <SelectedHeroesTotals/>
                </Column>
            </ColumnsWrapper>
            <audio src={soundtrack} loop="true" autoPlay="true" />
        </>
    )
}

export default App
