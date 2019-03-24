import React from 'react'
import {Icon} from 'antd'
import {connect} from 'react-redux'
import {removeHero} from "../../actions"

const RemoveHeroButton = ({heroId, removeHero}) => {
    return (
        <Icon
            type="minus-circle"
            theme="filled"
            style={{fontSize: '20px'}}
            onClick={() => removeHero(heroId)}
        />
    )
}

export default connect(
    null,
    {removeHero}
)(RemoveHeroButton)