import React, {useState} from 'react';
import './App.css';

import Pricing from './Pricing';

// Step 1: Create nav menu 
// Step 2: Define pageNumber
// Step 3: Render based on pageNumber

function App() {
  const [pageType, setPageType] = useState(0);

  return (
    <>
      <div className="main-logo">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQhBxob-6yeTiZKW_ep9WsuSgTYKSEGaqIFXw&usqp=CAU"/>
      </div>

      <div className="nav-bar">
        <div className="nav-item" onClick={() => setPageType(0)}> Home </div>
        <div className="nav-item" onClick={() => setPageType(1)}> Pricing </div>
        <div className="nav-item" onClick={() => setPageType(2)}> FAQ </div>
        <div className="nav-item" onClick={() => setPageType(3)} > Gallery </div>
      </div>

      <div className="break"> </div>
      <div className="body">
        {/* //Based on pageNumber, we display body */}
        {pageType === 0 && 
          <>Home Page</>
        }
        {pageType === 1 &&
          <Pricing />
        }
         {pageType === 2 &&
          <>FAQ Page</>
        }
         {pageType === 3 &&
          <>Gallery Page</>
        }
      </div>
    </>
  );
}

export default App;
