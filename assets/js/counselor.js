async function updateCounselorData() {
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
      console.log('Updated Counselor Data:', data.counselorData);
      return data.counselorData; // Return the updated data
    } else {
      console.error('Error updating counselor data:', response.statusText);
      return null;
    }
  } catch (error) {
    console.error('Unexpected error updating counselor data:', error);
    return null;
  }
}

// Function to initialize the Counselor Homepage
async function initCounselorHomepage() {
  // Call updateCounselorData to fetch and send data to the server
  const updatedCounselorData = await updateCounselorData();

  if (updatedCounselorData) {
    // Now you can use the fetched counselorData in your page
    console.log('Fetched Counselor Data:', updatedCounselorData);
  }
}

// Initialize the Counselor Homepage when the DOM is ready
document.addEventListener('DOMContentLoaded', initCounselorHomepage);
