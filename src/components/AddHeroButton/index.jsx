import React from 'react'
import {Icon} from 'antd'
import {connect} from 'react-redux'
import {addHero} from "../../actions"

const AddHeroButton = ({heroId, addHero}) => {
    return (
        <Icon
            type="plus-circle"
            theme="filled"
            onClick={() => addHero(heroId)}
            style={{fontSize: '20px'}}
        />
    )
}

export default connect(
    null,
    {addHero}
)(AddHeroButton)