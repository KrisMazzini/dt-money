import { useContextSelector } from 'use-context-selector'

import {
  Detail,
  DetailsContainer,
  PriceHighlight,
  TransactionsCard,
  TransactionsListContainer,
} from './styles'

import { dateFormatter, priceFormatter } from '../../../../utils/formatter'
import { TransactionsContext } from '../../../../contexts/TransactionsContext'
import { CalendarBlank, TagSimple } from 'phosphor-react'

export function TransactionsList() {
  const transactions = useContextSelector(
    TransactionsContext,
    (context) => context.transactions,
  )

  return (
    <TransactionsListContainer>
      {transactions.map((transaction) => {
        return (
          <TransactionsCard key={transaction.id}>
            <p>{transaction.description}</p>
            <PriceHighlight variant={transaction.type}>
              {transaction.type === 'outcome' && '- '}
              {priceFormatter.format(transaction.price)}
            </PriceHighlight>
            <DetailsContainer>
              <Detail>
                <TagSimple />
                {transaction.category}
              </Detail>
              <Detail>
                <CalendarBlank />
                {dateFormatter.format(new Date(transaction.createdAt))}
              </Detail>
            </DetailsContainer>
          </TransactionsCard>
        )
      })}
    </TransactionsListContainer>
  )
}
