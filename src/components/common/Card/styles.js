import styled from 'styled-components'

export const ProductContainer = styled.div`
  background-color: ${({ theme }) => theme.COLORS.WHITE};
  color: ${({ theme }) => theme.COLORS.BLACK};
  margin: 0 auto;
  border-radius: 8px;
  padding: 16px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  width: 180px;
  height: auto;
`

export const ImageContainer = styled.div`
  background-color: ${({ theme }) => theme.COLORS.GRAY};
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  width: 100%;
  height: 150px;
`

export const ProductName = styled.div`
  color: ${({ theme }) => theme.COLORS.BLACK};
  font-size: 1.2rem;
  font-weight: bold;
  margin-top: 12px;
`

export const ProductPrice = styled.div`
  color: ${({ theme }) => theme.COLORS.ORANGE};
  font-size: 1.5rem;
  margin-top: 8px;
  font-weight: bold;
`
export const ProductImage = styled.img`
  max-width: 100%;
  max-height: 100%;
  object-fit: cover;
`
