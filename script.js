document.getElementById('contactButton').addEventListener('click', function () {
    const contactDetails = document.getElementById('contactDetails');
    if (contactDetails.classList.contains('hidden')) {
      contactDetails.classList.remove('hidden');
      this.textContent = 'Hide Contact Details';
    } else {
      contactDetails.classList.add('hidden');
      this.textContent = 'Show Contact Details';
    }
  });
  