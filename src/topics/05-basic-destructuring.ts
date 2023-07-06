interface AudioPlayer {
  audioVolume: number;
  songDuration: number;
  song: string;
  details: Details;
}

interface Details {
  author: string;
  year: number;
}

const audioPlayer: AudioPlayer = {
  audioVolume: 90,
  songDuration: 34,
  song: "AUhhh",
  details: {
    author: "Manolo",
    year: 2020,
  },
};

console.log("Song: ", audioPlayer.song);
console.log("Author: ", audioPlayer.details.author);

const song = "new song"; //Declaaro variable con mismo nombre que propiedad del objeto

const { song: anotherSong } = audioPlayer; //Destructuring cambiando el nombre de la propiedad

console.log("Song: ", anotherSong);

const { details } = audioPlayer;

const { author } = details;

console.log(author);

export {};
