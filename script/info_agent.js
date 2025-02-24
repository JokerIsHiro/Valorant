const idUrl = new URLSearchParams(window.location.search);

const agentID = idUrl.get("id");

const agentImg = document.querySelector('#portrait');
const agentName = document.querySelector('#agentName');
const agentDesc = document.querySelector('#agentDesc');

const skillDesc = document.querySelector('#skillDesc');
const spanDesc = document.querySelector('#desc');

const skillNames = [
    skillName1 = document.querySelector('#name1'),
    skillName2 = document.querySelector('#name2'),
    skillName3 = document.querySelector('#name3'),
    skillName4 = document.querySelector('#name4'),
];
const skillSet = [
    agentSkill1 = document.querySelector('#skill1'),
    agentSkill2 = document.querySelector('#skill2'),
    agentSkill3 = document.querySelector('#skill3'),
    agentSkill4 = document.querySelector('#skill4')
];

const slotSet = [
    slot1 = document.querySelector('#slot1'),
    slot2 = document.querySelector('#slot2'),
    slot3 = document.querySelector('#slot3'),
    slot4 = document.querySelector('#slot4')
];

async function getDetails(id) {
    const agentDetail = "https://valorant-api.com/v1/agents/" + id;

    const response = await fetch(agentDetail);

    const agent = await response.json();

    document.title = agent.data.displayName;

    agentImg.src = agent.data.fullPortrait;
    agentName.textContent = agent.data.displayName;
    agentDesc.textContent = agent.data.description;

    const skills = agent.data.abilities;

    const skillsLenght = Object.keys(agent.data.abilities).length;

    for (let i = 0; i < skillsLenght; i++) {
        skillNames[i].textContent = skills[i].displayName;
        skillSet[i].src = skills[i].displayIcon;

        slotSet[i].addEventListener("click", () =>{
            if(skillDesc.classList.contains("hidden")){
                skillDesc.classList.remove("hidden");
            }
            skillDesc.classList.add("flex");
            desc.textContent =skills[i].description;
        });
    }
}

getDetails(agentID);