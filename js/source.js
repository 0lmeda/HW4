// *********************************************************************
// Homework 4 APIs
// *********************************************************************

function convertMsToMinSec(ms) {
  const minutes = Math.floor(ms / 60000);
  const seconds = Math.floor((ms % 60000) / 1000);
  const paddedSeconds = String(seconds).padStart(2, '0');
  return `${minutes}:${paddedSeconds}`;
}

// **************** Update code below  **************** 


// IDs and secret token should come from Spotify
localStorage.setItem("artist_id", "6XkjpgcEsYab502Vr1bBeW");
localStorage.setItem("access_token", "BQDYn3wEw5fIZFD_Wst59tIK0JYpr6kKiQ8EAUJp5ZNfD7_-1WBA3k6w8lVR7alIXusROSilB0whTpRtTv20ogWqh1Zdygwq-EXnReGxeeIC6zXgPKnIkmzlJVCr8iIRWe1_IJSxrFyo");
localStorage.setItem("track_id_1", "");
localStorage.setItem("track_id_2", "");
localStorage.setItem("track_id_3", "");


async function load(){
    
    let artistID = localStorage.getItem("artist_id");
    let accessToken = localStorage.getItem("access_token");
    let trackID1 = localStorage.getItem("track_id_1");
    let trackID2 = localStorage.getItem("track_id_2");
    let trackID3 = localStorage.getItem("track_id_3");
    




  const response = await fetch(
  `https://api.spotify.com/v1/artists/${artistID}`,
  {
  headers: {
  Authorization: `Bearer ${accessToken}`
  }
  }
  );
  const artist = await response.json();

  console.log(artist);
  let artistName = document.querySelector(`#artist-name`);
  artistName.textContent = artist.name;

  let artistIMG = document.querySelector(`.artist-image img`);
  artistIMG.src = artist.images[0].url;
}
load();




