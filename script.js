document.addEventListener('DOMContentLoaded', () => {
    const apiUrl = 'https://jsonplaceholder.typicode.com/posts'; // Sample API
    const apiList = document.getElementById('api-list');
    const searchBar = document.getElementById('search-bar');

    const fetchData = async () => {
        try {
            const response = await fetch(apiUrl);
            const data = await response.json();
            displayData(data);
            searchBar.addEventListener('input', () => filterData(data));
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    const displayData = (data) => {
        apiList.innerHTML = data.map(item => 
            <li>${item.title}</li>
        ).join('');
    };

    const filterData = (data) => {
        const query = searchBar.value.toLowerCase();
        const filteredData = data.filter(item => 
            item.title.toLowerCase().includes(query)
        );
        displayData(filteredData);
    };

    fetchData();
});