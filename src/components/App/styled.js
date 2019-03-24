import styled from 'styled-components'

export const ColumnsWrapper = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: space-around;
    align-items: flex-start;
    padding-top: 64px;
`

export const Column = styled.div`
    width: 250px;
    >* {
        margin-bottom: 15px;
    }
`

export const ColumnTitle = styled.div`
    font-weight: bold;
    text-align: center;
`