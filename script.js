document.addEventListener('DOMContentLoaded', function() {
    const suggestionForm = document.getElementById('suggestionForm');
    
    if (suggestionForm) {
        suggestionForm.addEventListener('submit', async function(e) {
            e.preventDefault();
            
            const formData = {
                name: document.getElementById('name').value,
                email: document.getElementById('email').value,
                suggestion: document.getElementById('suggestion').value
            };

            try {
                // Here you would typically send this to your backend server
                // For now, we'll just show a success message
                alert('Thank you for your suggestion! We will review it and get back to you soon.');
                suggestionForm.reset();
            } catch (error) {
                alert('There was an error submitting your suggestion. Please try again later.');
                console.error('Error:', error);
            }
        });
    }
}); 