import { privateInfo } from "./05_symbol.js";
// const name ={
//     firstName: "Rohit",
//     lastName: "Sharma",
//     bongsho: {
//       name: "bhuiyan",
//       personality: "kopakopi",
//     },
//   }

const player = {
  name: {
    firstName: "Rohit",
    lastName: "Sharma",
    bongsho: {
      name: "bhuiyan",
      personality: "kopakopi",
    },
  },
  age: 34,
  height: 5.8,
  country: "Bangladesh",
  available: false,
  playedTournament: ["IPL", "BPL", "BBL"],
  [privateInfo]: "sldkfjdlsjfsdlfj",
};

// console.log(player.height);
// console.log(typeof player.name.firstName);
// console.log(player.playedTournament[1]);

// console.log(player["height"]);
// console.log(player[privateInfo]);

const socialmedia = {
  type: "website",
  socialHandle: {
    name: ["faisal90", "faisal89", "kdslfjalks"],
  },
};

player["socialmedia"] = socialmedia;

console.log(player);
delete player.socialmedia;
console.log(player);
