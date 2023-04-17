import styled from 'styled-components'

export const TransactionsListContainer = styled.ul`
  margin: 0.75rem 0;

  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  list-style-type: none;
`

export const TransactionsCard = styled.li`
  padding: 1.25rem;
  background-color: ${(props) => props.theme['gray-700']};
  border-radius: 6px;

  p {
    margin-bottom: 0.25rem;

    line-height: 1.6;
    color: ${(props) => props.theme['gray-300']};
  }
`

interface PriceHighlightProps {
  variant: 'income' | 'outcome'
}

export const PriceHighlight = styled.span<PriceHighlightProps>`
  font-size: 1.25rem;
  font-weight: 700;
  line-height: 1.6;

  color: ${(props) =>
    props.variant === 'income'
      ? props.theme['green-300']
      : props.theme['red-300']};
`

export const DetailsContainer = styled.div`
  margin-top: 0.75rem;

  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 0.5rem;
`

export const Detail = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;

  color: ${(props) => props.theme['gray-500']};

  svg {
    width: 1rem;
    height: 1rem;
  }
`
