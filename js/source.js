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
localStorage.setItem("track_id_1", "1PREzVLuDT6PSE9sej4wnV");
localStorage.setItem("track_id_2", "3D24ErT1MMmUfXWotSj2A2");
localStorage.setItem("track_id_3", "34vXRJ2bCSFiZKQzVUYVOb");


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

  const trackResponse1 = await fetch(
    `https://api.spotify.com/v1/tracks/${trackID1}`,
    {
        headers: {
            Authorization: `Bearer ${accessToken}`
        }
    }
);

const trackResponse2 = await fetch(
    `https://api.spotify.com/v1/tracks/${trackID2}`,
    {
        headers: {
            Authorization: `Bearer ${accessToken}`
        }
    }
);

const trackResponse3 = await fetch(
    `https://api.spotify.com/v1/tracks/${trackID3}`,
    {
        headers: {
            Authorization: `Bearer ${accessToken}`
        }
    }
);


const track1 = await trackResponse1.json();
const track2 = await trackResponse2.json();
const track3 = await trackResponse3.json();

let tracks = document.querySelectorAll(`.track`);

let firstTrack = tracks[0];

firstTrack.querySelector('img').src = track1.album.images[0].url;
firstTrack.querySelector('.track-title').textContent = track1.name;
firstTrack.querySelector('.track-album').textContent = track1.album.name;
firstTrack.querySelector('.track-number').textContent = track1.track_number;
firstTrack.querySelector('.track-duration').textContent = convertMsToMinSec(track1.duration_ms);

let secondTrack = tracks[1];
secondTrack.querySelector('img').src = track2.album.images[0].url;
secondTrack.querySelector('.track-title').textContent = track2.name;
secondTrack.querySelector('.track-album').textContent = track2.album.name;
secondTrack.querySelector('.track-number').textContent = track2.track_number;
secondTrack.querySelector('.track-duration').textContent = convertMsToMinSec(track2.duration_ms);

let thirdTrack = tracks[2];
thirdTrack.querySelector('img').src = track3.album.images[0].url;
thirdTrack.querySelector('.track-title').textContent = track3.name;
thirdTrack.querySelector('.track-album').textContent = track3.album.name;
thirdTrack.querySelector('.track-number').textContent = track3.track_number;
thirdTrack.querySelector('.track-duration').textContent = convertMsToMinSec(track3.duration_ms);
}
load();




