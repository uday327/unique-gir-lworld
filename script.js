document.addEventListener('DOMContentLoaded', function() {
    // Function to fetch makeup services from backend API
    function fetchMakeupServices() {
        fetch('/api/makeup')
            .then(response => response.json())
            .then(data => {
                // Assuming data is an array of service objects
                const servicesContainer = document.getElementById('makeupServices');
                servicesContainer.innerHTML = ''; // Clear previous content
                
                data.forEach(service => {
                    const serviceElement = document.createElement('div');
                    serviceElement.classList.add('service');
                    
                    const serviceName = document.createElement('h3');
                    serviceName.textContent = service.name;
                    
                    const serviceDescription = document.createElement('p');
                    serviceDescription.textContent = service.description;
                    
                    serviceElement.appendChild(serviceName);
                    serviceElement.appendChild(serviceDescription);
                    
                    servicesContainer.appendChild(serviceElement);
                });
            })
            .catch(error => console.error('Error fetching makeup services:', error));
    }
    
    // Event listener for clicking on Makeup Services link in navigation
    const makeupLink = document.querySelector('a[href="#makeup"]');
    makeupLink.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent default link behavior
        
        // Scroll to the Makeup Services section
        const makeupSection = document.getElementById('makeup');
        makeupSection.scrollIntoView({ behavior: 'smooth' });
        
        // Fetch makeup services
        fetchMakeupServices();
    });
    
    // You can similarly define functions and event listeners for Mehndi Services and other sections
    
    // Example: Event listener for clicking on Mehndi Services link
    const mehndiLink = document.querySelector('a[href="#mehndi"]');
    mehndiLink.addEventListener('click', function(event) {
        event.preventDefault();
        
        const mehndiSection = document.getElementById('mehndi');
        mehndiSection.scrollIntoView({ behavior: 'smooth' });
        
        // You can fetch mehndi services similarly if you have an API endpoint for it
    });
    
    // Example: Event listener for form submission (assuming a booking form)
    const bookingForm = document.getElementById('bookingForm');
    bookingForm.addEventListener('submit', function(event) {
        event.preventDefault();
        
        // Example: Handle form submission (you would replace this with actual form handling logic)
        const formData = new FormData(bookingForm);
        const serviceName = formData.get('serviceName');
        const userName = formData.get('userName');
        const userEmail = formData.get('userEmail');
        
        // Example: Send data to backend API (you need to implement this)
        fetch('/api/bookings', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                serviceName: serviceName,
                userName: userName,
                userEmail: userEmail
            })
        })
        .then(response => response.json())
        .then(data => {
            console.log('Booking successful:', data);
            // Example: Show a success message to the user
            alert('Booking successful!');
        })
        .catch(error => {
            console.error('Error booking:', error);
            // Example: Show an error message to the user
            alert('Booking failed. Please try again later.');
        });
    });
});
