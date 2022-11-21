// Add your cohort name to the cohortName variable below, replacing the 'COHORT-NAME' placeholder
const cohortName = '2209-ftb-et-web-pt';
// Use the APIURL variable for fetch requests
const APIURL = `https://fsa-puppy-bowl.herokuapp.com/api/${cohortName}/`;


export const fetchAllPlayers = async () => {
    try {
        let response = await fetch(`${APIURL}players`);
        let result = await response.json();
        if(result.error) {
            throw result.error;
        }
        return result.data.players;
    } catch (error) {
        console.log("Uh oh, trouble fetching data", error);
    }
};

export const fetchSinglePlayer = async (playerId) => {
    try {
        let response = await fetch(`${APIURL}players/${playerId}`);
        let result = await response.json();
        if(result.error) {
            throw result.error;
        }
        return result.data.player;
    } catch (error) {
        console.log("Uh oh, trouble fetching data", error);
    }
};

export const addNewPlayer = async (playerObj) => {
    let options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({...playerObj}),
    };
    console.log(options);
    try {
        const response = await fetch(`${APIURL}players/`, options);
        const result = await response.json();
        if (result.error) throw result.error;
        return result.data.player;
      } catch (err) {
        console.error("Uh oh, trouble fetching data", err);
      }
};

export const removePlayer = async (playerId) => {
    try {
        const response = await fetch(`${APIURL}/players/${playerId}`, {
            method: 'DELETE',
        });
        const result = await response.json();
        if (result.error) throw result.error;
        return;
    } catch (error) {
        console.log("Uh oh, trouble removing player from the roster", error);
    }
};
