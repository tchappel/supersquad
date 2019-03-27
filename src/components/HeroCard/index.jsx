import React from 'react'
import {Avatar, Collapse} from 'antd'
import {Wrapper} from './styled'
import Herotable from '../HeroTable'

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
                <Herotable hero={hero}/>
            </Collapse.Panel>
        </Collapse>
    )
}

export default HeroCard