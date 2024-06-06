document.addEventListener('DOMContentLoaded', function() {
    const url = './test.json';
    console.log('Fetching data from URL:', url);

    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            console.log('Data fetched successfully:', data);
            const container = document.getElementById('passenger-container');
            data.forEach(passenger => {
                const card = document.createElement('div');
                card.classList.add('card');

                const header = document.createElement('div');
                header.classList.add('card-header');
                const headerText = document.createElement('h2');
                headerText.textContent = passenger.Name;
                header.appendChild(headerText);
                card.appendChild(header);

                const body = document.createElement('div');
                body.classList.add('card-body');
                const details = document.createElement('p');
                details.innerHTML = `<strong>Sesso:</strong> ${passenger.Sex}<br>
                                     <strong>Età:</strong> ${passenger.Age || 'N/A'}<br>
                                     <strong>Sopravvissuto:</strong> ${passenger.Survived ? 'Sì' : 'No'}`;
                body.appendChild(details);
                card.appendChild(body);

                container.appendChild(card);
            });
        })
        .catch(error => console.error('Errore nel caricamento dei dati:', error));
});
