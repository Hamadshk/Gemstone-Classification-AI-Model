// import React, { useState } from 'react';
// import './App.css';
// import ImageUploader from './components/imageUploader/imageUploader';

// function App() {
//   const [gemData, setGemData] = useState(null);

//   return (
//     <>
//       <div>
//         <h1>Upload an Image</h1>
//         <ImageUploader onResult={setGemData} />

//         {gemData && (
//           <div>
//             <h1>Gem Predicted</h1>
//             <div>
//               {/* Display gem data information */}
//               <p>Message: {gemData.message}</p>
//               <p>Gem Class: {gemData.gem_class}</p>
//               <p>Probability: {gemData.probability}</p>
//             </div>
//           </div>
//         )}
//       </div>
//     </>
//   );
// }

// export default App;
import React, { useState } from 'react';
import './App.css';
import ImageUploader from './components/imageUploader/imageUploader';
import Header from './components/Header/Header';
import Gem from "./components/Gem/Gem"
function App() {
  // Initialize state to store the index of the gem
  const [gems, setGems] = useState([]);
  // Array of gemstone names
 

  return (
    <>
      <div className='MainClass'>
        <div>
          <Header/>
        </div>
       




      <div className = "gem-predictions" >

      {gems.length && <div> <h1>Gem Predictions:</h1> <div className="gems-array">{gems.map((gem, index) => (
        <Gem key={index} url={gem.url} prediction={gem.prediction} />
      ))}</div> </div>}



      </div>
      

        <div className='Upload'>
          <h1>Upload an Image</h1>
        </div>


        <div className='ImageUploader'>
          <ImageUploader setGems={setGems} />
        </div>
      </div>
    </>
  );
}

export default App;
