const agentsAPI = "https://valorant-api.com/v1/agents?isPlayableCharacter=true";

const divAgents = document.querySelector("#agents");

document.addEventListener('DOMContentLoaded', function() {
    const toggleButton = document.getElementById('hs-navbar-collapse');
    const navbar = document.getElementById('hs-navbar');
    const icon = toggleButton.querySelector('i');

    toggleButton.addEventListener('click', function() {
      const isExpanded = toggleButton.getAttribute('aria-expanded') === 'true';
      toggleButton.setAttribute('aria-expanded', !isExpanded);
      navbar.classList.toggle('hidden');
      icon.classList.toggle('fa-bars');
      icon.classList.toggle('fa-times');
    });
});

async function getAgents() {
    const response = await fetch(agentsAPI);
    const agents = await response.json();
    agents.data.forEach(agent => addImage(agent.displayIcon, () => {
        window.location.href = 'info.html?id='+agent.uuid;
    }));
    return agents;
}

getAgents();

const addImage = (src, click) => {
    const itemImg = document.createElement("img");
    itemImg.src = src;
    itemImg.width = 150;
    itemImg.classList = 'transition duration-300 ease-in-out hover:scale-110';
    itemImg.onclick = click;
    divAgents.appendChild(itemImg);
}