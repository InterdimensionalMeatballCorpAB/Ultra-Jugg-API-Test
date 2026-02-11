

async function toggleDropdown() {
    var element = document.getElementById("navDropdown");

    if (element) {//unknown if this is necessary but stack overflow has it like this
        var display = element.style.display;

        if (display == "none") {
            element.style.display = "flex";
        } else {
            element.style.display = "none";
        }
    }
}


async function challengeData(params) { //mostly AI because i am not understanding
    const a = Math.floor(Math.random * 2); //randomly selects one of the two categories
    if (a == 0) endpoint = "fetch-2tc";
    else endpoint = "fetch-2mp"


    const baseURL = "btd6index.win";
    const URL = `${baseURL}/${endpoint}`; //generates the proper URL

    const response = await fetch('https://btd6index.win/fetch-2mp');

    if (!response.ok){ //checks if the fetch request went through
        throw new (`HTTP ${response.status}`); 
    }

    console.log(response.json());
    const outputData = await response.json();

    if(outputData.error){
        throw new Error(outputData.error);
    }

    return outputData;
}
