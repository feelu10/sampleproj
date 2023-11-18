// public/js/studentHomepage.js

// Function to send data to the server and update session
async function updateStudentData() {
    try {
      // Assume you have some data stored in sessionStorage
      const storedData = JSON.parse(sessionStorage.getItem('studentData'));
  
      const response = await fetch('/updateStudentData', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ clientData: storedData }),
      });
  
      if (response.ok) {
        const data = await response.json();
        console.log('Updated Student Data:', data.studentData);
        return data.studentData; // Return the updated data
      } else {
        console.error('Error updating student data:', response.statusText);
        return null;
      }
    } catch (error) {
      console.error('Unexpected error updating student data:', error);
      return null;
    }
  }
  
  // Function to initialize the Student Homepage
  async function initStudentHomepage() {
    // Call updateStudentData to fetch and send data to the server
    const updatedStudentData = await updateStudentData();
  
    if (updatedStudentData) {
      // Now you can use the fetched studentData in your page
      console.log('Fetched Student Data:', updatedStudentData);
  
      // Add your logic to update the page with the fetched data
    }
  }
  
  // Initialize the Student Homepage when the DOM is ready
  document.addEventListener('DOMContentLoaded', initStudentHomepage);
  
