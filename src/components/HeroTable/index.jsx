import React from 'react'
import {TableHeader} from './styled'

export const heroProperties = [
    'intelligence',
    'speed',
    'strength'
]

const renderHeroTableRows = (hero) => {
    return Object.keys(hero).map(property => {
        if (heroProperties.includes(property)) {
            return (
                <tr key={property}>
                    <TableHeader>{property}</TableHeader>
                    <td>{hero[property]}</td>
                </tr>
            )
        }
        return null
    })
}

const HeroTable = ({hero}) => {
    return (
        <table>
            <tbody>
            {renderHeroTableRows(hero)}
            </tbody>
        </table>
    )
}

export default HeroTable