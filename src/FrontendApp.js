import React from 'react';
import ReactDOM from 'react-dom';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
function App() {
  return (
    <Router>
      <div>
        <h1>Task Tracker</h1>
        <Switch>
          <Route exact path="/">
            <TaskList />
          </Route>
          <Route path="/create">
            <TaskCreate />
          </Route>
          {/* Add more routes if needed */}
        </Switch>
      </div>
    </Router>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));