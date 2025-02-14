async function fetchLatestLaunch() {
    try {
        const response = await fetch('https://api.spacexdata.com/v4/launches');
        const launches = await response.json();
        
        const randomIndex = Math.floor(Math.random() * launches.length);
        const data = launches[randomIndex];
        
        const rocketResponse = await fetch(`https://api.spacexdata.com/v4/rockets/${data.rocket}`);
        const rocketData = await rocketResponse.json();
        
        const launchpadResponse = await fetch(`https://api.spacexdata.com/v4/launchpads/${data.launchpad}`);
        const launchpadData = await launchpadResponse.json();
        
        document.getElementById('launch-name').textContent = `${data.name || 'Unknown'}`;
        document.getElementById('launch-date').textContent = `${data.date_utc || 'Unknown'}`;
        document.getElementById('rocket-name').textContent = `${rocketData.name || 'Unknown'}`;
        document.getElementById('launchpad-name').textContent = `${launchpadData.name || 'Unknown'}`;
    } catch (error) {
        console.error('Error fetching SpaceX launch data:', error);
    }
}

async function fetchTotalLaunches() {
    try {
        const response = await fetch('https://api.spacexdata.com/v4/launches');
        const launches = await response.json();
        document.getElementById('total-launches').textContent = `${launches.length}`;
    } catch (error) {
        console.error('Error fetching total launches:', error);
    }
}

fetchLatestLaunch();
fetchTotalLaunches();