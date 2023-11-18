async function updatecounselorData() {
    try {
      // Assume you have some data stored in sessionStorage
      const storedData = JSON.parse(sessionStorage.getItem('counselorData'));
  
      const response = await fetch('/updateCounselorData', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ clientData: storedData }),
      });
  
      if (response.ok) {
        const data = await response.json();
        console.log('Updated Student Data:', data.counselorData);
        return data.counselorData; // Return the updated data
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
    // Call updatecounselorData to fetch and send data to the server
    const updatedcounselorData = await updatecounselorData();
  
    if (updatedcounselorData) {
      // Now you can use the fetched counselorData in your page
      console.log('Fetched Student Data:', updatedcounselorData);
      }
  }
  
  // Initialize the Student Homepage when the DOM is ready
  document.addEventListener('DOMContentLoaded', initStudentHomepage);
  