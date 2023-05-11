import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useQuery } from '@tanstack/react-query';
import './App.css';
import React from 'react';
import { Jokes } from './components/MyJokes';


function App() {
  const client = new QueryClient({defaultOptions:{
    queries:{
      refetchOnWindowFocus:false
    }
  }});
  return (
    <QueryClientProvider client={client}>
      <div className="App">
      < Jokes />
      </div>
    </QueryClientProvider>
  );
}

export default App;
