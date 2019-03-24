import React from 'react'
import {Avatar, Collapse} from 'antd'
import {Wrapper, TableHeader} from './styled'

const HeroCard = ({hero, children}) => {
    return (
        <Collapse>
            <Collapse.Panel
                header={
                    <Wrapper>
                        <Avatar shape="square" src={hero.imgUrl}/>
                        {hero.name}
                        {children}
                    </Wrapper>
                }
            >
                <table>
                    <tbody>
                    <tr>
                        <TableHeader>Intelligence</TableHeader>
                        <td>{hero.intelligence}</td>
                    </tr>
                    <tr>
                        <TableHeader>Strength</TableHeader>
                        <td>{hero.strength}</td>
                    </tr>
                    <tr>
                        <TableHeader>Speed</TableHeader>
                        <td>{hero.speed}</td>
                    </tr>
                    </tbody>
                </table>
            </Collapse.Panel>
        </Collapse>
    )
}

export default HeroCard