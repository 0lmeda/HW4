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
localStorage.setItem("access_token", "BQBR_WC6dMz7oh2qZDNyO8PQvY4yXytdPX0xoOxva7HEkHy5mq5uVJKTN9pc_DQjI9mCXi3M3Ea_GnKCrME6osdjF3npDPouhB2Z9QwL4tHUD0xPPsZxVcLhN-0z4bf0rK5gVDRzUWJi");
localStorage.setItem("track_id_1", "1PREzVLuDT6PSE9sej4wnV");
localStorage.setItem("track_id_2", "3D24ErT1MMmUfXWotSj2A2");
localStorage.setItem("track_id_3", "34vXRJ2bCSFiZKQzVUYVOb");


localStorage.setItem("album_id_1", "5utxE1ImIDJFXRHf137hoy");
localStorage.setItem("album_id_2", "2aTxD6We9GbBFXi3oKoPat");
localStorage.setItem("album_id_3", "1rQaw35QueiDUvAhvTOWZi");
localStorage.setItem("album_id_4", "3fsVOb8vnAjEaxfuh5Kqdd");

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

let albums = document.querySelectorAll('.album-card');
let albumIds = [
    localStorage.getItem("album_id_1"),
    localStorage.getItem("album_id_2"),
    localStorage.getItem("album_id_3"),
    localStorage.getItem("album_id_4")
];
for(let i = 0; i<albumIds.length; i++){

        const response = await fetch(
        `https://api.spotify.com/v1/albums/${albumIds[i]}`,
        {
            headers: {
                Authorization: `Bearer ${accessToken}`
            }
        }
        );


    const album = await response.json();

    albums[i].querySelector('img').src = album.images[0].url;
    albums[i].querySelector('h3').textContent = album.name;
    //Instructions are asking to use convertMStosec function however, the album.release_data shows some like 2024-10-12. If I use it, got some like NaNa
    albums[i].querySelector('p').textContent =  `${(album.release_date.substring(0,4))}  ${album.album_type}`;
    };
    document.querySelector('.player img').src = track1.album.images[0].url;
    document.querySelector('.player strong').textContent = track1.name;
    document.querySelector('.player span').textContent = artist.name;


}
load();




