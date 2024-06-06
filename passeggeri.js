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
            const passengerData = document.getElementById('passenger-data');
            data.forEach(passenger => {
                const row = document.createElement('tr');
                
                const nameCell = document.createElement('td');
                nameCell.textContent = passenger.name;
                row.appendChild(nameCell);
                
                const sexCell = document.createElement('td');
                sexCell.textContent = passenger.sex;
                row.appendChild(sexCell);
                
                const ageCell = document.createElement('td');
                ageCell.textContent = passenger.age || 'N/A';
                row.appendChild(ageCell);
                
                const embarkedCell = document.createElement('td');
                embarkedCell.textContent = passenger.embarked;
                row.appendChild(embarkedCell);
                
                const classCell = document.createElement('td');
                classCell.textContent = passenger.class;
                row.appendChild(classCell);
                
                const survivedCell = document.createElement('td');
                survivedCell.textContent = passenger.survived ? 'Yes' : 'No';
                row.appendChild(survivedCell);
                
                passengerData.appendChild(row);
            });
        })
        .catch(error => console.error('Errore nel caricamento dei dati:', error));
});

