import React, { useState } from 'react';
import ProblemDetails from './ProblemDetailsPage'; 
import Compiler from './Compiler'; 


const ProblemPage = () => {
  // Example problems with IDs and titles
  const problems = [
    { id: '660a9c8b0356a176e308fc71', title: 'Two Sum 1' },
    { id: '660a9cdb0356a176e308fc73', title: 'Reverse Integer' },
    { id: '660a9ce80356a176e308fc75', title: 'Palidrome Checker' },
    { id: '660a9cf80356a176e308fc77', title: 'FizzBuzz' },
    { id: '660a9d090356a176e308fc79', title: 'Merge Two Sorted Listsr' },
    { id: '66757b1332dac6b5236c0c7e', title: 'Longest Substring Without Repeating Characters' },
    { id: '66757b1332dac6b5236c0c7', title: 'Two Sum' },
    { id: '66757b1332dac6b5236c0c80', title: 'Add Two Numbers' },
    { id: '66757b1332dac6b5236c0c81', title: 'Container With Most Water' },
    { id: '66757b1332dac6b5236c0c81', title: 'Container With Most Water' },
    { id: '66757b1332dac6b5236c0c81', title: 'Container With Most Water' },
    { id: '66757b1332dac6b5236c0c81', title: 'Container With Most Water' },
    { id: '66757b1332dac6b5236c0c81', title: 'Container With Most Water' },
    { id: '66757b1332dac6b5236c0c81', title: 'Container With Most Water' },
    // Add more problems as needed
  ];

  // State to keep track of the selected problem ID
  const [selectedProblemId, setSelectedProblemId] = useState(null);

  // Function to handle problem selection
  const handleProblemClick = (id) => {
    setSelectedProblemId(id);
  };

  return (
    <div>
      <h1>Problem Details</h1>
      {selectedProblemId ? (
        <div>
          <ProblemDetails problemId={selectedProblemId} />
          <div className="compiler-section">
            <Compiler problemId={selectedProblemId} />
          </div>
        </div>
      ) : (
        <div>
          <h2>Select a problem to view details:</h2>
          <ul>
            {problems.map((problem) => (
              <li key={problem.id}>
                <button 
                 style={{
                  display: 'block',
                  margin: '10px 0',
                  width: '100%',
                  maxWidth: '400px', 
                  whiteSpace: 'normal',
                  textAlign: 'left',
                }}
                onClick={() => handleProblemClick(problem.id)}>
                {problem.title}
                </button>
                
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default ProblemPage;
