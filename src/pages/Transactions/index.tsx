import { TransactionsContainer } from './styles'

import { useWindowSize } from '../../hooks/useWindowSize()'
import { Header } from '../../components/Header'
import { Summary } from '../../components/Summary'
import { SearchForm } from './components/SearchForm'
import { TransactionsTable } from './components/TransactionsTable'
import { TransactionsList } from './components/TransactionsList'

export function Transactions() {
  const windowSize = useWindowSize()

  return (
    <div>
      <Header />
      <Summary />

      <TransactionsContainer>
        <SearchForm />
        {windowSize === 'desktop' ? (
          <TransactionsTable />
        ) : (
          <TransactionsList />
        )}
      </TransactionsContainer>
    </div>
  )
}
