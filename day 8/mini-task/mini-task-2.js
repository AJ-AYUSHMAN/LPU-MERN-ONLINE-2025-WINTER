const events = [
    {
        title: "Welcome Week",
        description: "Kick off the year with fun activities and events for new students.",
    },
    {
        title: "Club Fair",
        description: "Explore different student clubs and organizations on campus.",
    },
    {
        title: "Career Fair",
        description: "Network with potential employers and learn about career opportunities.",
    },
    {
        title: "Homecoming Game",
        description: "Cheer on the school's football team at the annual homecoming game.",
    },
    {
        title: "Fall Festival",
        description: "Enjoy seasonal festivities, food, and music at the fall festival.",
    },
    {
        title: "Guest Speaker Series",
        description: "Hear from influential figures in various fields.",
    },
    {
        title: "Study Abroad Fair",
        description: "Learn about study abroad programs and opportunities.",
    },
    {
        title: "Volunteer Day",
        description: "Give back to the community by participating in a volunteer event.",
    },
    {
        title: "Spring Concert",
        description: "Enjoy live music performances by student and professional artists.",
    },
];

// ROOT ELEMENT to insert CARD
const parent = document.getElementById("cards-container");

for (let i = 0; i < events.length; i++) {
    // CREATE A CARD
    const newCard = document.createElement("div"); // <div></div>
    newCard.className = "card"; //  <div class='card'></div>

    // CREATE h2
    const newH2 = document.createElement("h2"); // <h2></h2>
    newH2.innerText = events[i].title; // <h2>title</h2>
    // and PUT h2 inside card
    newCard.appendChild(newH2); // <div class='card'><h2>title</h2></div>

    // CREATE p
    const newP = document.createElement("p"); // <p></p>
    newP.innerText = events[i].description; // <p>description</p>
    // and PUT p inside card
    newCard.appendChild(newP); // <div class='card'><h2>title</h2><p>description</p></div>

    // PUT the card inside parent (#cards-container)
    parent.appendChild(newCard);
}

// REMOVE
// const child = document.getElementsByClassName("card");
// parent.removeChild(child[0]);

const handleClick = () => {
    const card = document.getElementsByClassName("card");
    const newP = document.createElement("p");
    newP.innerText = "More info....";
    card[0].appendChild(newP);
};
