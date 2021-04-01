import { createContext, useEffect, useState, ReactNode } from 'react'
import { api } from './services/api';

interface Transaction {
  id: number;
  title: string;
  amount: number;
  type: string;
  category: string;
  createdAt: string;
}

// interface TransactionInput { 
//   title: string;
//   amount: number;
//   type: string;
//   category: string;
// }
//   !!! Pode-se criar uma nova interface como acima...OU...

// type TransactionInput = Pick<Transaction, 'title' | 'amount' | 'type' | 'category'>;
//                          => "Pick", seleciona de entre vários quais quer selecionar...
//      OU...

type TransactionInput = Omit<Transaction, 'id' | 'createdAt'>;
//                          => "Omit" seleciona todos, e omite os informados: id e createdAt...

interface TransactionsProviderProps {
  children: ReactNode;
}

interface TransactionsContextData {
  transactions: Transaction[];
  createTransaction: (transaction: TransactionInput) => void;
}

export const TransactionsContext = createContext<TransactionsContextData>(
  {} as TransactionsContextData
);

export function TransactionsProvider({ children }: TransactionsProviderProps) {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  useEffect(() => {
    api.get('transactions')
      .then(response => setTransactions(response.data.transactions))
  }, []);

  function createTransaction(transaction: TransactionInput) {
    api.post('/transactions', transaction)
  }

  return (
    <TransactionsContext.Provider value={{ transactions, createTransaction }}>
      {children}
    </TransactionsContext.Provider>
  );
}