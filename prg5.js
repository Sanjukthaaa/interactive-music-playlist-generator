document.addEventListener("DOMContentLoaded", function () {
    const moodSelect = document.getElementById("mood");
    const genreSelect = document.getElementById("genre");
    const playlistContainer = document.getElementById("playlist");
  
    function generatePlaylist() {
      const mood = moodSelect.value;
      const genre = genreSelect.value;
  
      // Simulate fetching playlist from the backend based on mood and genre
      const playlist = fetchPlaylistFromBackend(mood, genre);
  
      // Update the playlist in the frontend
      displayPlaylist(playlist);
    }
  
    function fetchPlaylistFromBackend(mood, genre) {
      // In a real-world scenario, this function would make a request to the backend
      // to get a playlist based on the selected mood and genre.
      // For simplicity, we'll use a predefined playlist here.
  
      const playlists = {
        happy: {
          pop: ["lover", "young and beautiful", "memories"],
          rock: ["alright", "merry go around", "chateau"],
          "hip-hop": ["lock on me", "raindrops", "around me"],
        },
        chill: {
          pop: ["never not", "let go", "london boy"],
          rock: ["indulge", "crazy", "come through"],
          "hip-hop": ["vanilla sky", "blase", "powder blue"],
        },
        energetic: {
          pop: ["cincinnati", "cabo", "highs&lows"],
          rock: ["story of the staris", "hummingbird", "stay ready"],
          "hip-hop": ["houdini","purple grass", "west side story"],
        },
      };
  
      return playlists[mood][genre] || [];
    }
  
    function displayPlaylist(playlist) {
      // Clear previous playlist
      playlistContainer.innerHTML = "";
  
      // Display the new playlist
      playlist.forEach(song => {
        const listItem = document.createElement("li");
        listItem.textContent = song;
        playlistContainer.appendChild(listItem);
      });
    }
  
    // Attach the generatePlaylist function to the global scope for testing purposes
    window.generatePlaylist = generatePlaylist;
  });
