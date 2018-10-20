const clientId = '906171acc93940b2b0ef52b0f4633767'; // Insert client ID here.
const redirectUri = 'http://localhost:3000/callback'; // Have to add this to your accepted Spotify redirect URIs on the Spotify API.
let accessToken;
let term = 'Royals lorde'

const Spotify = {
  getAccessToken() {
    if (accessToken) {
      return accessToken;
    }

    const accessTokenMatch = window.location.href.match(/access_token=([^&]*)/);
    const expiresInMatch = window.location.href.match(/expires_in=([^&]*)/);
    if (accessTokenMatch && expiresInMatch) {
      accessToken = accessTokenMatch[1];
      const expiresIn = Number(expiresInMatch[1]);
      window.setTimeout(() => accessToken = '', expiresIn * 1000);
      window.history.pushState('Access Token', null, '/'); // This clears the parameters, allowing us to grab a new access token when it expires.
      return accessToken;
    } else {
      const accessUrl = `https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=token&scope=playlist-modify-public&redirect_uri=${redirectUri}`;
      window.location = accessUrl;
    }
  },

  search() {
    const accessToken = Spotify.getAccessToken();
    return fetch('https://api.spotify.com/v1/playlists/4oDf6qLBzwYbJe3aWyQDoa?si=JQMJxtV9RXW-GR9Rv3xrbw', {
      headers: {
        Authorization: `Bearer ${accessToken}`
      }
    }).then(response => {
      return response.json();
    }).then(jsonResponse => {
      if (!jsonResponse.tracks) {
        return [];
      }
      console.log(jsonResponse.tracks.items);


      return jsonResponse.tracks.items.map(track => ({
        id: track.id,
        name: track.name,
        artist: track.track.artists[0].name,
        album: track.track.album.name,
        uri: track.uri
      }));




    });
  },

  // savePlaylist(name, trackUris) {
  //   if (!name || !trackUris.length) {
  //     return;
  //   }
  //
  //   const accessToken = Spotify.getAccessToken();
  //   const headers = { Authorization: `Bearer ${accessToken}` };
  //   let userId;
  //
  //   return fetch('https://api.spotify.com/v1/me', {headers: headers}
  //   ).then(response => response.json()
  //   ).then(jsonResponse => {
  //     userId = jsonResponse.id;
  //     return fetch(`https://api.spotify.com/v1/users/${userId}/playlists`, {
  //       headers: headers,
  //       method: 'POST',
  //       body: JSON.stringify({name: name})
  //     }).then(response => response.json()
  //     ).then(jsonResponse => {
  //       const playlistId = jsonResponse.id;
  //       return fetch(`https://api.spotify.com/v1/users/${userId}/playlists/${playlistId}/tracks`, {
  //         headers: headers,
  //         method: 'POST',
  //         body: JSON.stringify({uris: trackUris})
  //       });
  //     });
  //   });
  // }
};

export default Spotify;
