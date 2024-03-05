interface Album{
    artist: string;
    title: string;
    tracks?: number;
}

function make_album(artistName: string, albumTitle: string ,
 numTracks: number): Album{
    const album: Album ={artist: artistName , title: albumTitle};
    if(numTracks !== undefined){
        album.tracks = numTracks;
    }
    return album;
 }
 const album1 = make_album("Himesh Reshammiya","Aap ka Suroor",18);
 const album2 = make_album("Lata Mangeshkar","Mohobatien",9);
 const album3 = make_album("Mehdi Hassan","Album by Mehdi Hassan",9);

 console.log(album1);
 console.log(album2);
 console.log(album3);