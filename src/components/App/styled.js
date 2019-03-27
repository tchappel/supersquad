import styled from 'styled-components'
import bgImage from '../../assets/img/bg_image.jpg'

export const ColumnsWrapper = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: space-around;
    align-items: flex-start;
    padding-top: 64px;
    &:before {
        background-image: url(${bgImage});
        background-size: cover;
        content: "";
        display: block;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: -2;
        opacity: 0.3;
    }
`

export const Column = styled.div`
    width: 250px;
    >* {
        margin-bottom: 15px;
    }
`

export const ColumnTitle = styled.div`
    font-weight: bold;
    font-size: 20px;
    text-align: center;
`