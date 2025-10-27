fetch('http://whatyearisit-backend-five-gold.vercel.app/year')
  .then(response => response.json())
  .then(data => {
    const yearEl = document.querySelector('#year')
    yearEl.textContent = data.year
  })