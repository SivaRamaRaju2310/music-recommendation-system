function getRecommendations() {
    let genre = document.getElementById("genre").value;
    let mood = document.getElementById("mood").value;

    let url = `/recommend?genre=${genre}&mood=${mood}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            let recommendationsDiv = document.getElementById("recommendations");
            recommendationsDiv.innerHTML = "";

            if (data.length === 0) {
                recommendationsDiv.innerHTML = "<p class='text-gray-500 text-center'>😔 No recommendations found.</p>";
                return;
            }

            data.forEach(song => {
                let songCard = document.createElement("div");
                songCard.classList.add(
                    "bg-gradient-to-r", "from-pink-400", "to-purple-500", "shadow-lg", 
                    "p-4", "rounded-xl", "border", "text-white", "text-center", 
                    "hover:scale-105", "transition", "duration-300"
                );

                songCard.innerHTML = `
                    <h3 class="text-xl font-bold">🎵 ${song["Song Name"]}</h3>
                 <p class="text-lg">🎤 Artist: <span class="font-semibold">${song["Artist"]}</span></p>
                    <!-- <p class="text-md">🎼 Genre: <span class="font-semibold">${song["Genre"]}</span> | 😊 Mood: <span class="font-semibold">${song["Mood"]}</span></p> -->
                `;

                recommendationsDiv.appendChild(songCard);
            });
        });
}
