import './App.css';
import Routers from './routers';
import { QueryClientProvider } from 'react-query';
import { queryClient } from './globalState/queryClient';
import { AuthProvider } from './globalState/Auth';
function App() {
  return (
    <div className="App">
      <QueryClientProvider client={queryClient}>
        <AuthProvider>
          <Routers />
        </AuthProvider>
      </QueryClientProvider>
    </div>
  );
}

export default App;

