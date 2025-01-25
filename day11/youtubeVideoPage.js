const addIframe = () => {
    const locationInfo = window.location;
    const searchQuery = locationInfo.search;
    const textArray = searchQuery.split("=");
    const videoId = textArray[1];

    console.log("videoId:", videoId);

    const parent = document.getElementById("root");
    parent.innerHTML = `
        <iframe width="560" height="315" src="https://www.youtube.com/embed/${videoId}"
            title="Likhilesh's Youtube Video Palyer" frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin" allowfullscreen>
        </iframe>
        `;
};

addIframe();
