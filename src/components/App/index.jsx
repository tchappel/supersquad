import React from 'react'
import HeroesList from '../HeroesList'
import {ColumnsWrapper, Column, ColumnTitle} from "./styled"
import  SelectedHeroesList from '../SelectedHeroesList'


const App = () => {
    return (
        <ColumnsWrapper>
            <Column>
                <ColumnTitle>Heroes</ColumnTitle>
                <HeroesList/>
            </Column>
            <Column>
                <ColumnTitle>Selected Heroes</ColumnTitle>
                <SelectedHeroesList />
            </Column>
        </ColumnsWrapper>
    )
}

export default App
