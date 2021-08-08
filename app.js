async function getApis() {
    const response = await fetch("https://api.publicapis.org/entries");
    const api = await response.json();
    return api.entries;
}

function displayApihtml(api) {
    return `
    <div class="an_Api">
    <div class="api_name">Name: ${api.API} (${api.Category} api)</div>
    <div class="api_description">Description: ${api.Description}</div>
    <div class="api_auth">Auth: ${api.Auth ? api.Auth : "none"}</div>
    <div class="api_https">Https: ${api.HTTPS}</div>
    <div class="api_link" ><a href=${
      api.Link
    } target='blank'>Official Website</a></div> 
    
    
    </div>
    `;
}

function displayApi(apis) {
    document.body.innerHTML = `
     <div class="head">List Of Open Source APIS</div>
    
    <div class="all_apis">
    ${apis.map((api) => displayApihtml(api)).join("")}
    
    </div>
    
    `;
}

getApis()
    .then(displayApi)
    .catch((error) => alert(error));