const baseurl = `https://itunes.apple.com/search?`;
const searchurl = (ARTIST_NAME) =>
  `term=${ARTIST_NAME}&media=music&entity=album&attribute=artistTerm&limit=500`;

 const getAllAlbums = (input) =>
   fetch([baseurl, searchurl(input)].join(""), { mode: "no-cors" }).then(
     (response) => response.json()
   );
export default getAllAlbums