import React from 'react';
import Header from "./Header";
function App() {
  return (
    <div>
      <div style={{textAlign: 'center', padding: 20, background: '#000', color: '#fff', textTransform: 'uppercase'}}>
      <Header/>
</div>
      
      <button>Add</button>
      <div>
        <span>Name</span><br />
        <span>Phone Number</span>
      </div>
    </div>
  );
}

export default App;
