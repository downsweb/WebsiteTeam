// Sample team member data (you can replace this with team data)
const teamMembers = [
    { name: "Britney Downswell", role: "" },
    { name: "Gursimrat Kaur Singh", role: "" },
    { name: "Jevon Small", role: "" },
    { name: "Sukhjeet Malhi", role: "" },
    // Add more team members as needed
];

// Function to dynamically populate team members
function populateTeamMembers() {
    const teamMembersContainer = document.querySelector(".team-members");
//starting a for loop to load the member names and member roles in the div tag
    teamMembers.forEach(member => {
        const memberDiv = document.createElement("div");
        memberDiv.classList.add("team-member");
        memberDiv.innerHTML = `
            <h3>${member.name}</h3>
            <p>${member.role}</p>
        `;
        teamMembersContainer.appendChild(memberDiv);
    });
}


// Populate team members on page load from line #11
window.addEventListener("load", () => {
    populateTeamMembers();
});
