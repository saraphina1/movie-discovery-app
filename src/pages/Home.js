import React, { useState } from "react";
import Header from "../Components/Header";
import Moviedetails from "../Components/Moviedetails";
import Footer from "../Components/Footer";

function Home() {
  const [movies, setMovies] = useState([
    {
      backdrop_path: "/9faGSFi5jam6pDWGNd0p8JcJgXQ.jpg",
      first_air_date: "2008-01-20",
      genre_ids: [18, 80],
      id: 1396,
      name: "Breaking Bad",
      origin_country: ["US"],
      original_language: "en",
      original_name: "Breaking Bad",
      overview:
        "When Walter White, a New Mexico chemistry teacher, is diagnosed with Stage III cancer and given a prognosis of only two years left to live. He becomes filled with a sense of fearlessness and an unrelenting desire to secure his family's financial future at any cost as he enters the dangerous world of drugs and crime.",
      popularity: 320.635,
      poster_path: "/3xnWaLQjelJDDF7LT1WBo6f4BRe.jpg",
      vote_average: 8.9,
      vote_count: 12294,
    },
    {
      backdrop_path: "/rkB4LyZHo1NHXFEDHl9vSD9r1lI.jpg",
      first_air_date: "2021-11-06",
      genre_ids: [16, 18, 10765, 10759],
      id: 94605,
      name: "Arcane",
      origin_country: ["US"],
      original_language: "en",
      original_name: "Arcane",
      overview:
        "Amid the stark discord of twin cities Piltover and Zaun, two sisters fight on rival sides of a war between magic technologies and clashing convictions.",
      popularity: 105.619,
      poster_path: "/fqldf2t8ztc9aiwn3k6mlX3tvRT.jpg",
      vote_average: 8.7,
      vote_count: 3300,
    },
    {
      backdrop_path: "/a6ptrTUH1c5OdWanjyYtAkOuYD0.jpg",
      first_air_date: "1999-10-20",
      genre_ids: [10759, 35, 16],
      id: 37854,
      name: "One Piece",
      origin_country: ["JP"],
      original_language: "ja",
      original_name: "ワンピース",
      overview:
        'Years ago, the fearsome Pirate King, Gol D. Roger was executed leaving a huge pile of treasure and the famous "One Piece" behind. Whoever claims the "One Piece" will be named the new King of the Pirates.\n\nMonkey D. Luffy, a boy who consumed a "Devil Fruit," decides to follow in the footsteps of his idol, the pirate Shanks, and find the One Piece. It helps, of course, that his body has the properties of rubber and that he\'s surrounded by a bevy of skilled fighters and thieves to help him along the way.\n\nLuffy will do anything to get the One Piece and become King of the Pirates!',
      popularity: 392.794,
      poster_path: "/fcXdJlbSdUEeMSJFsXKsznGwwok.jpg",
      vote_average: 8.7,
      vote_count: 3987,
    },
    {
      backdrop_path: "/qvbFdPvXMliwwrWlfUStcHc96JQ.jpg",
      first_air_date: "2019-04-21",
      genre_ids: [18, 10751],
      id: 85077,
      name: "The Chosen",
      origin_country: ["US"],
      original_language: "en",
      original_name: "The Chosen",
      overview:
        "The life of Christ through the eyes of those who encountered him called The Chosen.",
      popularity: 90.308,
      poster_path: "/2pnZWHg9E34LLwLBLYUPLdZwer8.jpg",
      vote_average: 8.7,
      vote_count: 108,
    },
    {
      backdrop_path: "/A6tMQAo6t6eRFCPhsrShmxZLqFB.jpg",
      first_air_date: "2009-04-05",
      genre_ids: [10759, 16, 10765],
      id: 31911,
      name: "Fullmetal Alchemist: Brotherhood",
      origin_country: ["JP"],
      original_language: "ja",
      original_name: "鋼の錬金術師 FULLMETAL ALCHEMIST",
      overview:
        "Edward and Alphonse Elric's reckless disregard for alchemy's fun­damental laws ripped half of Ed's limbs from his body and left Al's soul clinging to a cold suit of armor. To restore what was lost, the brothers scour a war-torn land for the Philosopher's Sto­ne, a fabled relic which grants the ability to perform alchemy in impossible ways.\n\nThe Elrics are not alone in their search; the corrupt State Military is also eager to harness the artifact's power. So too are the strange Homunculi and their shadowy creator. The mythical gem lures exotic alchemists from distant kingdoms, scarring some deeply enough to inspire murder. As the Elrics find their course altered by these enemies and allies, their purpose remains unchanged – and their bond unbreakable.",
      popularity: 120.353,
      poster_path: "/5ZFUEOULaVml7pQuXxhpR2SmVUw.jpg",
      vote_average: 8.7,
      vote_count: 1733,
    },
    {
      backdrop_path: "/9In9QgVJx7PlFOAgVHCKKSbo605.jpg",
      first_air_date: "2013-12-02",
      genre_ids: [16, 35, 10765, 10759],
      id: 60625,
      name: "Rick and Morty",
      origin_country: ["US"],
      original_language: "en",
      original_name: "Rick and Morty",
      overview:
        "Rick is a mentally-unbalanced but scientifically gifted old man who has recently reconnected with his family. He spends most of his time involving his young grandson Morty in dangerous, outlandish adventures throughout space and alternate universes. Compounded with Morty's already unstable family life, these events cause Morty much distress at home and school.",
      popularity: 739.045,
      poster_path: "/cvhNj9eoRBe5SxjCbQTkh05UP5K.jpg",
      vote_average: 8.7,
      vote_count: 8550,
    },
    {
      backdrop_path: "/70YdbMELM4b8x8VXjlubymb2bQ0.jpg",
      first_air_date: "2017-03-19",
      genre_ids: [18, 10751],
      id: 70785,
      name: "Anne with an E",
      origin_country: ["CA"],
      original_language: "en",
      original_name: "Anne with an E",
      overview:
        "A coming-of-age story about an outsider who, against all odds and numerous challenges, fights for love and acceptance and for her place in the world. The series centers on a young orphaned girl in the late 1890’s, who, after an abusive childhood spent in orphanages and the homes of strangers, is mistakenly sent to live with an elderly woman and her aging brother. Over time, 13-year-old Anne will transform their lives and eventually the small town in which they live with her unique spirit, fierce intellect and brilliant imagination.",
      popularity: 102.884,
      poster_path: "/6P6tXhjT5tK3qOXzxF9OMLlG7iz.jpg",
      vote_average: 8.7,
      vote_count: 4370,
    },
    {
      backdrop_path: "/kU98MbVVgi72wzceyrEbClZmMFe.jpg",
      first_air_date: "2005-02-21",
      genre_ids: [16, 10759, 10765],
      id: 246,
      name: "Avatar: The Last Airbender",
      origin_country: ["US"],
      original_language: "en",
      original_name: "Avatar: The Last Airbender",
      overview:
        "In a war-torn world of elemental magic, a young boy reawakens to undertake a dangerous mystic quest to fulfill his destiny as the Avatar, and bring peace to the world.",
      popularity: 91.893,
      poster_path: "/cHFZA8Tlv03nKTGXhLOYOLtqoSm.jpg",
      vote_average: 8.7,
      vote_count: 3464,
    },
    {
      backdrop_path: "/nTvM4mhqNlHIvUkI1gVnW6XP7GG.jpg",
      first_air_date: "2019-04-06",
      genre_ids: [16, 10759, 10765],
      id: 85937,
      name: "Demon Slayer: Kimetsu no Yaiba",
      origin_country: ["JP"],
      original_language: "ja",
      original_name: "鬼滅の刃",
      overview:
        "It is the Taisho Period in Japan. Tanjiro, a kindhearted boy who sells charcoal for a living, finds his family slaughtered by a demon. To make matters worse, his younger sister Nezuko, the sole survivor, has been transformed into a demon herself. Though devastated by this grim reality, Tanjiro resolves to become a “demon slayer” so that he can turn his sister back into a human, and kill the demon that massacred his family.",
      popularity: 106.399,
      poster_path: "/xUfRZu2mi8jH6SzQEJGP6tjBuYj.jpg",
      vote_average: 8.7,
      vote_count: 5578,
    },
    {
      backdrop_path: "/hMjvf1xGcCbbobFuM2iYR9Tj0Yr.jpg",
      first_air_date: "2022-04-22",
      genre_ids: [18],
      id: 124834,
      name: "Heartstopper",
      origin_country: ["GB"],
      original_language: "en",
      original_name: "Heartstopper",
      overview:
        "Teens Charlie and Nick discover their unlikely friendship might be something more as they navigate school and young love in this coming-of-age series.",
      popularity: 166.535,
      poster_path: "/p0AtD0ivSlHq2MHY6JFgyhNqAQY.jpg",
      vote_average: 8.7,
      vote_count: 1025,
    },
  ]);
  return (
    <div fluid>
      <Header />
      <div>
        <Moviedetails movies={movies} />
      </div>
      <Footer/>
    </div>
  );
}

export default Home;
