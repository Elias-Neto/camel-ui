import styled from 'styled-components'

export const Container = styled.div`
  background-color: ${({ theme }) => theme.COLORS.WHITE};
  color: ${({ theme }) => theme.COLORS.ORANGE};
  margin: 0 auto;
  border-radius: 8px;
  padding: 16px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  text-align: center;
  box-sizing: border-box;
  width: 1100px;
  max-width: 80%;
  margin-top: 10px;
`

export const Title = styled.h1`
  color: ${({ theme }) => theme.COLORS.BLACK};
  padding: 10px;
`
export const ProductContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  flex-wrap: wrap;
`
