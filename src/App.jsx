import './App.css';

function App() {
  return (
    <div className="app-container">
      <header className="header">
        <h1>✈️ TripReserve</h1>
      </header>

      <main className="main-content">
        <div className="hero">
          <span className="badge">Developer Preview - Under Construction</span>
          <h2>Your Global Flight Aggregator</h2>
          <p>
            We are building a powerful React/Redux metasearch engine to help you find the cheapest flights worldwide. 
            Currently awaiting API integration for live airline data.
          </p>
        </div>

        {/* Dummy Search Form to show intent */}
        <div className="search-box-dummy">
          <div className="input-group">
            <label>Origin</label>
            <input type="text" placeholder="e.g. New York (JFK)" disabled />
          </div>
          <div className="input-group">
            <label>Destination</label>
            <input type="text" placeholder="e.g. London (LHR)" disabled />
          </div>
          <div className="input-group">
            <label>Departure Date</label>
            <input type="date" disabled />
          </div>
          <button className="search-btn" disabled>Search Flights</button>
        </div>
      </main>

      <footer className="footer">
        <p>© 2026 TripReserve. Partner API integration in progress.</p>
      </footer>
    </div>
  );
}

export default App;