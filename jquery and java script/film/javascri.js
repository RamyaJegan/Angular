$(function () {

  var film = [

    {
      "Year": "1990",
      "Length": "111",
      "Title": "Tie Me Up! Tie Me Down!",
      "Subject": "Comedy",
      "Actor": "Banderas, Antonio",
      "Actress": "Abril, Victoria",
      "Director": "Almod�var, Pedro",
      "Popularity": "68",
      "Awards": "No",
      "*Image": "NicholasCage.png"
    },
    {
      "Year": "1991",
      "Length": "113",
      "Title": "High Heels",
      "Subject": "Comedy",
      "Actor": "Bos�, Miguel",
      "Actress": "Abril, Victoria",
      "Director": "Almod�var, Pedro",
      "Popularity": "68",
      "Awards": "No",
      "*Image": "NicholasCage.png"
    },
    {
      "Year": "1983",
      "Length": "104",
      "Title": "Dead Zone, The",
      "Subject": "Horror",
      "Actor": "Walken, Christopher",
      "Actress": "Adams, Brooke",
      "Director": "Cronenberg, David",
      "Popularity": "79",
      "Awards": "No",
      "*Image": "NicholasCage.png"
    },
    {
      "Year": "1979",
      "Length": "122",
      "Title": "Cuba",
      "Subject": "Action",
      "Actor": "Connery, Sean",
      "Actress": "Adams, Brooke",
      "Director": "Lester, Richard",
      "Popularity": "6",
      "Awards": "No",
      "*Image": "seanConnery.png"
    },
    {
      "Year": "1978",
      "Length": "94",
      "Title": "Days of Heaven",
      "Subject": "Drama",
      "Actor": "Gere, Richard",
      "Actress": "Adams, Brooke",
      "Director": "Malick, Terrence",
      "Popularity": "14",
      "Awards": "No",
      "*Image": "NicholasCage.png"
    },
    {
      "Year": "1983",
      "Length": "140",
      "Title": "Octopussy",
      "Subject": "Action",
      "Actor": "Moore, Roger",
      "Actress": "Adams, Maud",
      "Director": "Glen, John",
      "Popularity": "68",
      "Awards": "No",
      "*Image": "NicholasCage.png"
    },
    {
      "Year": "1984",
      "Length": "101",
      "Title": "Target Eagle",
      "Subject": "Action",
      "Actor": "Connors, Chuck",
      "Actress": "Adams, Maud",
      "Director": "Loma, Jos� Antonio de la",
      "Popularity": "14",
      "Awards": "No",
      "*Image": "NicholasCage.png"
    },
    {
      "Year": "1989",
      "Length": "99",
      "Title": "American Angels: Baptism of Blood, The",
      "Subject": "Drama",
      "Actor": "Bergen, Robert D.",
      "Actress": "Adams, Trudy",
      "Director": "Sebastian, Beverly",
      "Popularity": "28",
      "Awards": "No",
      "*Image": "NicholasCage.png"
    },
    {
      "Year": "1985",
      "Length": "104",
      "Title": "Subway",
      "Subject": "Drama",
      "Actor": "Lambert, Christopher",
      "Actress": "Adjani, Isabelle",
      "Director": "Besson, Luc",
      "Popularity": "6",
      "Awards": "No",
      "*Image": "NicholasCage.png"
    },
    {
      "Year": "1990",
      "Length": "149",
      "Title": "Camille Claudel",
      "Subject": "Drama",
      "Actor": "Depardieu",
      "Actress": "Adjani, Isabelle",
      "Director": "Nuytten, Bruno",
      "Popularity": "32",
      "Awards": "No",
      "*Image": "NicholasCage.png"
    },
    {
      "Year": "1982",
      "Length": "188",
      "Title": "Fanny and Alexander",
      "Subject": "Drama",
      "Actor": "Ahlstedt Brje",
      "Actress": "Adolphson, Kristina",
      "Director": "Bergman, Ingmar",
      "Popularity": "81",
      "Awards": "Yes",
      "*Image": "Bergman.png"
    },
    {
      "Year": "1982",
      "Length": "117",
      "Title": "Tragedy of a Ridiculous Man",
      "Subject": "Drama",
      "Actor": "Tognazzi, Ugo",
      "Actress": "Aimee, Anouk",
      "Director": "Bertolucci, Bernardo",
      "Popularity": "17",
      "Awards": "No",
      "*Image": "NicholasCage.png"
    },
    {
      "Year": "1966",
      "Length": "103",
      "Title": "A Man & a Woman",
      "Subject": "Drama",
      "Actor": "Trintignant, Jean-Louis",
      "Actress": "Aimee, Anouk",
      "Director": "Lelouch, Claude",
      "Popularity": "46",
      "Awards": "Yes",
      "*Image": "NicholasCage.png"
    },
    {
      "Year": "1986",
      "Length": "112",
      "Title": "A Man & a Woman: Twenty Years Later",
      "Subject": "Drama",
      "Actor": "Trintignant, Jean-Louis",
      "Actress": "Aimee, Anouk",
      "Director": "Lelouch, Claude",
      "Popularity": "49",
      "Awards": "No",
      "*Image": "NicholasCage.png"
    },
    {
      "Year": "1966",
      "Length": "103",
      "Title": "Un Hombre y una Mujer",
      "Subject": "Drama",
      "Actor": "Trintignant, Jean-Louis",
      "Actress": "Aimee, Anouk",
      "Director": "Lelouch, Claude",
      "Popularity": "6",
      "Awards": "Yes",
      "*Image": "NicholasCage.png"
    },
    {
      "Year": "1985",
      "Length": "112",
      "Title": "Official Story, The",
      "Subject": "Drama",
      "Actor": "Alterio, Hector",
      "Actress": "Aleandro, Norma",
      "Director": "Puenzo, Luiz",
      "Popularity": "39",
      "Awards": "Yes",
      "*Image": "NicholasCage.png"
    },
    {
      "Year": "1976",
      "Length": "150",
      "Title": "Lindbergh Kidnapping Case, The",
      "Subject": "Drama",
      "Actor": "Hopkins, Anthony",
      "Actress": "Alexander, Denise",
      "Director": "Kulik, Buzz",
      "Popularity": "51",
      "Awards": "No",
      "*Image": "AnthonyHopkins.png"
    },
    {
      "Year": "1929",
      "Length": "84",
      "Title": "Blackmail",
      "Subject": "Mystery",
      "Actor": "Longden, John",
      "Actress": "Algood, Sara",
      "Director": "Hitchcock, Alfred",
      "Popularity": "2",
      "Awards": "No",
      "*Image": "alfredHitchcock.png"
    },
    {
      "Year": "1963",
      "Length": "109",
      "Title": "Donovan's Reef",
      "Subject": "Comedy",
      "Actor": "Wayne, John",
      "Actress": "Allen, Elizabeth",
      "Director": "Ford, John",
      "Popularity": "62",
      "Awards": "No",
      "*Image": "johnWayne.png"
    },
    {
      "Year": "1988",
      "Length": "110",
      "Title": "Tucker: The Man & His Dream",
      "Subject": "Drama",
      "Actor": "Bridges, Jeff",
      "Actress": "Allen, Joan",
      "Director": "Coppola, Francis Ford",
      "Popularity": "68",
      "Awards": "No",
      "*Image": "NicholasCage.png"
    },
    {
      "Year": "1988",
      "Length": "101",
      "Title": "Scrooged",
      "Subject": "Comedy",
      "Actor": "Murray, Bill",
      "Actress": "Allen, Karen",
      "Director": "Donner, Richard",
      "Popularity": "15",
      "Awards": "No",
      "*Image": "NicholasCage.png"
    },
    {
      "Year": "1981",
      "Length": "116",
      "Title": "Raiders of the Lost Ark",
      "Subject": "Action",
      "Actor": "Ford, Harrison",
      "Actress": "Allen, Karen",
      "Director": "Spielberg, Steven",
      "Popularity": "8",
      "Awards": "No",
      "*Image": "NicholasCage.png"
    },
    {
      "Year": "1987",
      "Length": "101",
      "Title": "Running Man, The",
      "Subject": "Science Fiction",
      "Actor": "Schwarzenegger, Arnold",
      "Actress": "Alonso, Maria Conchita",
      "Director": "Glaser, Paul Michael",
      "Popularity": "31",
      "Awards": "No",
      "*Image": "NicholasCage.png"
    },
    {
      "Year": "1991",
      "Length": "105",
      "Title": "Predator 2",
      "Subject": "Action",
      "Actor": "Glover, Danny",
      "Actress": "Alonso, Maria Conchita",
      "Director": "Hopkins, Stephen",
      "Popularity": "79",
      "Awards": "No",
      "*Image": "NicholasCage.png"
    },
    {
      "Year": "1988",
      "Length": "127",
      "Title": "Colors",
      "Subject": "Drama",
      "Actor": "Penn, Sean",
      "Actress": "Alonso, Maria Conchita",
      "Director": "Hopper, Dennis",
      "Popularity": "23",
      "Awards": "No",
      "*Image": "NicholasCage.png"
    },
    {
      "Year": "1990",
      "Length": "97",
      "Title": "Zandalee",
      "Subject": "Drama",
      "Actor": "Cage, Nicolas",
      "Actress": "Anderson, Erika",
      "Director": "Pillsbury, Sam",
      "Popularity": "80",
      "Awards": "No",
      "*Image": "NicholasCage.png"
    },
    {
      "Year": "1988",
      "Length": "108",
      "Title": "Miles from Home",
      "Subject": "Drama",
      "Actor": "Anderson, Kevin",
      "Actress": "Anderson, Jo",
      "Director": "Sinise, Gary",
      "Popularity": "53",
      "Awards": "No",
      "*Image": "NicholasCage.png"
    },
    {
      "Year": "1980",
      "Length": "",
      "Title": "Happy Birthday to Me",
      "Subject": "Horror",
      "Actor": "Ford, Glenn",
      "Actress": "Anderson, Melissa Sue",
      "Director": "Thompson, J. Lee",
      "Popularity": "88",
      "Awards": "No",
      "*Image": "glennFord.png"
    },
    {
      "Year": "1989",
      "Length": "88",
      "Title": "Final Notice",
      "Subject": "Mystery",
      "Actor": "Gerard, Gil",
      "Actress": "Anderson, Melody",
      "Director": "Stern, Steven Hilliard",
      "Popularity": "88",
      "Awards": "No",
      "*Image": "NicholasCage.png"
    },
    {
      "Year": "1979",
      "Length": "110",
      "Title": "Quintet",
      "Subject": "Drama",
      "Actor": "Newman, Paul",
      "Actress": "Andersson, Bibi",
      "Director": "Altman, Robert",
      "Popularity": "19",
      "Awards": "No",
      "*Image": "paulNewman.png"
    },
    {
      "Year": "1960",
      "Length": "90",
      "Title": "Devil's Eye, The",
      "Subject": "Drama",
      "Actor": "Kulle, Jarl",
      "Actress": "Andersson, Bibi",
      "Director": "Bergman, Ingmar",
      "Popularity": "20",
      "Awards": "No",
      "*Image": "Bergman.png"
    },
    {
      "Year": "1957",
      "Length": "91",
      "Title": "Wild Strawberries",
      "Subject": "Drama",
      "Actor": "Sj�str�m, Victor",
      "Actress": "Andersson, Bibi",
      "Director": "Bergman, Ingmar",
      "Popularity": "42",
      "Awards": "Yes",
      "*Image": "Bergman.png"
    },
    {
      "Year": "1956",
      "Length": "96",
      "Title": "Seventh Seal, The",
      "Subject": "Drama",
      "Actor": "Sydow, Max von",
      "Actress": "Andersson, Bibi",
      "Director": "Bergman, Ingmar",
      "Popularity": "62",
      "Awards": "No",
      "*Image": "Bergman.png"
    },
    {
      "Year": "1992",
      "Length": "90",
      "Title": "Germicide",
      "Subject": "Drama",
      "Actor": "Taylor, Rod",
      "Actress": "Andersson, Bibi",
      "Director": "",
      "Popularity": "36",
      "Awards": "No",
      "*Image": "NicholasCage.png"
    },
    {
      "Year": "1955",
      "Length": "86",
      "Title": "Dreams",
      "Subject": "Drama",
      "Actor": "Bj�rnstrand, Gunnar",
      "Actress": "Andersson, Harriet",
      "Director": "Bergman, Ingmar",
      "Popularity": "14",
      "Awards": "No",
      "*Image": "Bergman.png"
    },
    {
      "Year": "1955",
      "Length": "95",
      "Title": "Naked Night, The",
      "Subject": "Drama",
      "Actor": "Bj�rnstrand, Gunnar",
      "Actress": "Andersson, Harriet",
      "Director": "Bergman, Ingmar",
      "Popularity": "38",
      "Awards": "No",
      "*Image": "Bergman.png"
    },
    {
      "Year": "1962",
      "Length": "91",
      "Title": "Through a Glass Darkly",
      "Subject": "Drama",
      "Actor": "Bj�rnstrand, Gunnar",
      "Actress": "Andersson, Harriet",
      "Director": "Bergman, Ingmar",
      "Popularity": "64",
      "Awards": "Yes",
      "*Image": "Bergman.png"
    },
    {
      "Year": "1972",
      "Length": "91",
      "Title": "Cries & Whispers",
      "Subject": "Drama",
      "Actor": "Josephson, Erland",
      "Actress": "Andersson, Harriet",
      "Director": "Bergman, Ingmar",
      "Popularity": "18",
      "Awards": "Yes",
      "*Image": "Bergman.png"
    },
    {
      "Year": "1958",
      "Length": "104",
      "Title": "Barbarian & the Geisha, The",
      "Subject": "Action",
      "Actor": "Wayne, John",
      "Actress": "Ando, Eiko",
      "Director": "Huston, John",
      "Popularity": "52",
      "Awards": "No",
      "*Image": "johnWayne.png"
    },
    {
      "Year": "1967",
      "Length": "130",
      "Title": "Casino Royale",
      "Subject": "Comedy",
      "Actor": "Niven, David",
      "Actress": "Andress, Ursula",
      "Director": "Hughes, Ken",
      "Popularity": "11",
      "Awards": "No",
      "*Image": "NicholasCage.png"
    },
    {
      "Year": "1962",
      "Length": "",
      "Title": "Dr. No",
      "Subject": "Action",
      "Actor": "Connery, Sean",
      "Actress": "Andress, Ursula",
      "Director": "Young, Terence",
      "Popularity": "7",
      "Awards": "No",
      "*Image": "seanConnery.png"
    },
    {
      "Year": "1954",
      "Length": "103",
      "Title": "Elephant Walk",
      "Subject": "Drama",
      "Actor": "Finch, Peter",
      "Actress": "Andrews, Dana",
      "Director": "",
      "Popularity": "11",
      "Awards": "No",
      "*Image": "NicholasCage.png"
    },
    {
      "Year": "1979",
      "Length": "121",
      "Title": "Ten",
      "Subject": "Comedy",
      "Actor": "Moore, Dudley",
      "Actress": "Andrews, Julie",
      "Director": "Edwards, Blake",
      "Popularity": "60",
      "Awards": "No",
      "*Image": "NicholasCage.png"
    },
    {
      "Year": "1983",
      "Length": "118",
      "Title": "Man Who Loved Women, The",
      "Subject": "Comedy",
      "Actor": "Reynolds, Burt",
      "Actress": "Andrews, Julie",
      "Director": "Edwards, Blake",
      "Popularity": "67",
      "Awards": "No",
      "*Image": "NicholasCage.png"
    },
    {
      "Year": "1966",
      "Length": "190",
      "Title": "Hawaii",
      "Subject": "Drama",
      "Actor": "Sydow, Max von",
      "Actress": "Andrews, Julie",
      "Director": "Hill, George Roy",
      "Popularity": "8",
      "Awards": "No",
      "*Image": "NicholasCage.png"
    },
    {
      "Year": "1966",
      "Length": "125",
      "Title": "Torn Curtain",
      "Subject": "Mystery",
      "Actor": "Newman, Paul",
      "Actress": "Andrews, Julie",
      "Director": "Hitchcock, Alfred",
      "Popularity": "35",
      "Awards": "No",
      "*Image": "paulNewman.png"
    },
    {
      "Year": "1986",
      "Length": "107",
      "Title": "Duet for One",
      "Subject": "Drama",
      "Actor": "Bates, Alan",
      "Actress": "Andrews, Julie",
      "Director": "Konchalovsky, Andrei",
      "Popularity": "82",
      "Awards": "No",
      "*Image": "NicholasCage.png"
    },
    {
      "Year": "1965",
      "Length": "172",
      "Title": "Sound of Music, The",
      "Subject": "Music",
      "Actor": "Plummer, Christopher",
      "Actress": "Andrews, Julie",
      "Director": "Wise, Robert",
      "Popularity": "59",
      "Awards": "Yes",
      "*Image": "NicholasCage.png"
    },
    {
      "Year": "1985",
      "Length": "55",
      "Title": "Gonzo Presents Muppet Weird Stuff",
      "Subject": "Comedy",
      "Actor": "Cleese, John",
      "Actress": "Andrews, Julie",
      "Director": "",
      "Popularity": "88",
      "Awards": "No",
      "*Image": "NicholasCage.png"
    },
    {
      "Year": "1984",
      "Length": "140",
      "Title": "Tartuffe",
      "Subject": "Comedy",
      "Actor": "Depardieu, G�rard",
      "Actress": "Annen, Paule",
      "Director": "Depardieu, G�rard",
      "Popularity": "67",
      "Awards": "No",
      "*Image": "NicholasCage.png"
    },
    {
      "Year": "1988",
      "Length": "104",
      "Title": "A New Life",
      "Subject": "Comedy",
      "Actor": "Alda, Alan",
      "Actress": "Ann-Margret",
      "Director": "Alda, Alan",
      "Popularity": "53",
      "Awards": "No",
      "*Image": "NicholasCage.png"
    },
    {
      "Year": "1978",
      "Length": "106",
      "Title": "Magic",
      "Subject": "Mystery",
      "Actor": "Hopkins, Anthony",
      "Actress": "Ann-Margret",
      "Director": "Attenborough, Richard",
      "Popularity": "85",
      "Awards": "No",
      "*Image": "AnthonyHopkins.png"
    },
    {
      "Year": "1992",
      "Length": "286",
      "Title": "Tommy",
      "Subject": "Music",
      "Actor": "Daltry, Roger",
      "Actress": "Ann-Margret",
      "Director": "Russell, Ken",
      "Popularity": "5",
      "Awards": "No",
      "*Image": "NicholasCage.png"
    },
    {
      "Year": "1978",
      "Length": "108",
      "Title": "Big Fix, The",
      "Subject": "Mystery",
      "Actor": "Dreyfuss, Richard",
      "Actress": "Anspach, Susan",
      "Director": "Kagan, Jeremy Paul",
      "Popularity": "19",
      "Awards": "No",
      "*Image": "NicholasCage.png"
    },
    {
      "Year": "1992",
      "Length": "95",
      "Title": "Alan & Naomi",
      "Subject": "Drama",
      "Actor": "Haas, Lukas",
      "Actress": "Aquino, Vanessa",
      "Director": "Vanwagenen, Sterling",
      "Popularity": "3",
      "Awards": "No",
      "*Image": "NicholasCage.png"
    },
    {
      "Year": "1987",
      "Length": "120",
      "Title": "Fatal Attraction",
      "Subject": "Mystery",
      "Actor": "Douglas, Michael",
      "Actress": "Archer, Anne",
      "Director": "Lyne, Adrian",
      "Popularity": "61",
      "Awards": "No",
      "*Image": "NicholasCage.png"
    },
    {
      "Year": "1992",
      "Length": "117",
      "Title": "Patriot Games",
      "Subject": "Action",
      "Actor": "Ford, Harrison",
      "Actress": "Archer, Anne",
      "Director": "Noyce, Phillip",
      "Popularity": "28",
      "Awards": "No",
      "*Image": "NicholasCage.png"
    },
    {
      "Year": "1981",
      "Length": "106",
      "Title": "Woman Next Door, The",
      "Subject": "Drama",
      "Actor": "Depardieu, G�rard",
      "Actress": "Ardant, Fanny",
      "Director": "Truffaut, Fran�ois",
      "Popularity": "82",
      "Awards": "No",
      "*Image": "NicholasCage.png"
    },
    {
      "Year": "1992",
      "Length": "97",
      "Title": "Hunting",
      "Subject": "Mystery",
      "Actor": "Savage, John",
      "Actress": "Armstrong, Kerry",
      "Director": "Howson, Frank",
      "Popularity": "68",
      "Awards": "No",
      "*Image": "NicholasCage.png"
    },
    {
      "Year": "1991",
      "Length": "115",
      "Title": "Bataan",
      "Subject": "War",
      "Actor": "Taylor, Robert",
      "Actress": "Arnaz, Desi",
      "Director": "",
      "Popularity": "68",
      "Awards": "No",
      "*Image": "NicholasCage.png"
    },
    {
      "Year": "1924",
      "Length": "110",
      "Title": "Siegfried, The Nibelungenlied",
      "Subject": "Drama",
      "Actor": "Richter, Paul",
      "Actress": "Arnold, Gertrud",
      "Director": "Lang, Fritz",
      "Popularity": "79",
      "Awards": "No",
      "*Image": "NicholasCage.png"
    },
    {
      "Year": "1991",
      "Length": "90",
      "Title": "Henry, Portrait of a Serial Killer",
      "Subject": "Horror",
      "Actor": "Rooker, Michael",
      "Actress": "Arnold, Tracy",
      "Director": "",
      "Popularity": "69",
      "Awards": "No",
      "*Image": "NicholasCage.png"
    },
    {
      "Year": "1988",
      "Length": "118",
      "Title": "Big Blue, The",
      "Subject": "Drama",
      "Actor": "Barr, Jean-Marc",
      "Actress": "Arquette, Rosanna",
      "Director": "Besson, Luc",
      "Popularity": "7",
      "Awards": "No",
      "*Image": "NicholasCage.png"
    },
    {
      "Year": "1991",
      "Length": "115",
      "Title": "Flight of the Intruder",
      "Subject": "Drama",
      "Actor": "Glover, Danny",
      "Actress": "Arquette, Rosanna",
      "Director": "Milius, John",
      "Popularity": "51",
      "Awards": "No",
      "*Image": "NicholasCage.png"
    },
    {
      "Year": "1986",
      "Length": "108",
      "Title": "Nobody's Fool",
      "Subject": "Comedy",
      "Actor": "Roberts, Eric",
      "Actress": "Arquette, Rosanna",
      "Director": "Purcell, Evelyn",
      "Popularity": "52",
      "Awards": "No",
      "*Image": "NicholasCage.png"
    },
    {
      "Year": "1985",
      "Length": "97",
      "Title": "After Hours",
      "Subject": "Comedy",
      "Actor": "Dunne, Griffin",
      "Actress": "Arquette, Rosanna",
      "Director": "Scorsese, Martin",
      "Popularity": "81",
      "Awards": "No",
      "*Image": "NicholasCage.png"
    },
    {
      "Year": "1985",
      "Length": "104",
      "Title": "Desperately Seeking Susan",
      "Subject": "Comedy",
      "Actor": "Quinn, Aidan",
      "Actress": "Arquette, Rosanna",
      "Director": "Seidelman, Susan",
      "Popularity": "41",
      "Awards": "No",
      "*Image": "NicholasCage.png"
    },
    {
      "Year": "1971",
      "Length": "102",
      "Title": "A New Leaf",
      "Subject": "Comedy",
      "Actor": "Matthau, Walter",
      "Actress": "Arrick, Rose",
      "Director": "May, Elaine",
      "Popularity": "83",
      "Awards": "No",
      "*Image": "NicholasCage.png"
    },
    {
      "Year": "1959",
      "Length": "91",
      "Title": "Killers of Kilimanjaro",
      "Subject": "Action",
      "Actor": "Taylor, Robert",
      "Actress": "Aslan, Gregoire",
      "Director": "Thorpe, Richard",
      "Popularity": "11",
      "Awards": "No",
      "*Image": "NicholasCage.png"
    },
    {
      "Year": "1926",
      "Length": "126",
      "Title": "Don Juan",
      "Subject": "Action",
      "Actor": "Barrymore, John",
      "Actress": "Astor, Mary",
      "Director": "Crosland, Alan",
      "Popularity": "55",
      "Awards": "No",
      "*Image": "NicholasCage.png"
    },
    {
      "Year": "1987",
      "Length": "102",
      "Title": "Babette's Feast",
      "Subject": "Drama",
      "Actor": "LaFont, Jean-Philippe",
      "Actress": "Audran, St�phane",
      "Director": "Axel, Gabriel",
      "Popularity": "79",
      "Awards": "Yes",
      "*Image": "NicholasCage.png"
    },
    {
      "Year": "1989",
      "Length": "118",
      "Title": "Vincent, Francois, Paul & the Others",
      "Subject": "Drama",
      "Actor": "Montand, Yves",
      "Actress": "Audran, St�phane",
      "Director": "",
      "Popularity": "20",
      "Awards": "No",
      "*Image": "NicholasCage.png"
    },
    {
      "Year": "1988",
      "Length": "141",
      "Title": "Thunderball",
      "Subject": "Action",
      "Actor": "Connery, Sean",
      "Actress": "Auger, Claudine",
      "Director": "Young, Terrence",
      "Popularity": "8",
      "Awards": "No",
      "*Image": "seanConnery.png"
    },
    {
      "Year": "1926",
      "Length": "66",
      "Title": "Lodger (Story of the London Fog)",
      "Subject": "Mystery",
      "Actor": "Chesney, Arthur",
      "Actress": "Ault, Marie",
      "Director": "Hitchcock, Alfred",
      "Popularity": "76",
      "Awards": "No",
      "*Image": "alfredHitchcock.png"
    },
    {
      "Year": "1988",
      "Length": "103",
      "Title": "Appointment with Death",
      "Subject": "Mystery",
      "Actor": "Ustinov, Peter",
      "Actress": "Bacall, Lauren",
      "Director": "Donaggio, Michael Winner",
      "Popularity": "75",
      "Awards": "No",
      "*Image": "NicholasCage.png"
    },
    {
      "Year": "1974",
      "Length": "128",
      "Title": "Murder on the Orient Express",
      "Subject": "Mystery",
      "Actor": "Balsam, Martin",
      "Actress": "Bacall, Lauren",
      "Director": "Lumet, Sidney",
      "Popularity": "8",
      "Awards": "Yes",
      "*Image": "NicholasCage.png"
    },
    {
      "Year": "1955",
      "Length": "115",
      "Title": "Blood Alley",
      "Subject": "War",
      "Actor": "Wayne, John",
      "Actress": "Bacall, Lauren",
      "Director": "Wellman, William",
      "Popularity": "15",
      "Awards": "No",
      "*Image": "johnWayne.png"
    },
    {
      "Year": "1977",
      "Length": "136",
      "Title": "Spy Who Loved Me, The",
      "Subject": "Action",
      "Actor": "Moore, Roger",
      "Actress": "Bach, Barbara",
      "Director": "Gilbert, Lewis",
      "Popularity": "27",
      "Awards": "No",
      "*Image": "NicholasCage.png"
    },
    {
      "Year": "1988",
      "Length": "100",
      "Title": "Storm",
      "Subject": "Action",
      "Actor": "Palfy, David",
      "Actress": "Bahtia, Stacy Christensen",
      "Director": "Winning, David",
      "Popularity": "61",
      "Awards": "No",
      "*Image": "NicholasCage.png"
    },
    {
      "Year": "1991",
      "Length": "89",
      "Title": "Bloodbath",
      "Subject": "Horror",
      "Actor": "Hopper, Dennis",
      "Actress": "Baker, Carroll",
      "Director": "",
      "Popularity": "37",
      "Awards": "No",
      "*Image": "NicholasCage.png"
    },
    {
      "Year": "1989",
      "Length": "103",
      "Title": "Miami Cops",
      "Subject": "Action",
      "Actor": "Roundtree, Richard",
      "Actress": "Baker, Dawn",
      "Director": "Bradley, Al",
      "Popularity": "40",
      "Awards": "No",
      "*Image": "NicholasCage.png"
    },
    {
      "Year": "1996",
      "Length": "96",
      "Title": "Island of Dr. Moreau, The",
      "Subject": "Horror",
      "Actor": "Thewlis, David",
      "Actress": "Balk, Fairuza",
      "Director": "Frankenheimer, John",
      "Popularity": "39",
      "Awards": "No",
      "*Image": "NicholasCage.png"
    },
    {
      "Year": "1992",
      "Length": "100",
      "Title": "Eighty-Four Charing Cross Road",
      "Subject": "Drama",
      "Actor": "Hopkins, Anthony",
      "Actress": "Bancroft, Anne",
      "Director": "Jones, David",
      "Popularity": "9",
      "Awards": "No",
      "*Image": "AnthonyHopkins.png"
    },
    {
      "Year": "1980",
      "Length": "124",
      "Title": "Elephant Man, The",
      "Subject": "Drama",
      "Actor": "Hopkins, Anthony",
      "Actress": "Bancroft, Anne",
      "Director": "Lynch, David",
      "Popularity": "3",
      "Awards": "Yes",
      "*Image": "AnthonyHopkins.png"
    },
    {
      "Year": "1988",
      "Length": "90",
      "Title": "Dr Alien",
      "Subject": "Science Fiction",
      "Actor": "Jacoby, Billy",
      "Actress": "Barash, Olivia",
      "Director": "DeCoteau, David",
      "Popularity": "70",
      "Awards": "No",
      "*Image": "NicholasCage.png"
    },
    {
      "Year": "1982",
      "Length": "120",
      "Title": "Creepshow",
      "Subject": "Horror",
      "Actor": "Holbrook, Hal",
      "Actress": "Barbeau, Adrienne",
      "Director": "Romero, George A.",
      "Popularity": "70",
      "Awards": "No",
      "*Image": "NicholasCage.png"
    },
    {
      "Year": "1987",
      "Length": "100",
      "Title": "Sammy & Rosie Get Laid",
      "Subject": "Drama",
      "Actor": "Din, Ayub Khan",
      "Actress": "Barber, Frances",
      "Director": "Frears, Stephen",
      "Popularity": "6",
      "Awards": "No",
      "*Image": "NicholasCage.png"
    },
    {
      "Year": "1971",
      "Length": "101",
      "Title": "Goalie's Anxiety at the Penalty Kick, The",
      "Subject": "Drama",
      "Actor": "Brauss, Arthur",
      "Actress": "Bardischewski, Maria",
      "Director": "Wenders, Wim",
      "Popularity": "62",
      "Awards": "No",
      "*Image": "NicholasCage.png"
    },
    {
      "Year": "1957",
      "Length": "99",
      "Title": "Mademoiselle Striptease",
      "Subject": "Comedy",
      "Actor": "Gelin, Daniel",
      "Actress": "Bardot, Brigitte",
      "Director": "Allegret, Marc",
      "Popularity": "25",
      "Awards": "No",
      "*Image": "brigitteBardot.png"
    },
    {
      "Year": "1969",
      "Length": "86",
      "Title": "Women, The",
      "Subject": "Drama",
      "Actor": "Ronet, Maurice",
      "Actress": "Bardot, Brigitte",
      "Director": "Aurel, Jean",
      "Popularity": "66",
      "Awards": "No",
      "*Image": "brigitteBardot.png"
    },
    {
      "Year": "1958",
      "Length": "77",
      "Title": "That Naughty Girl",
      "Subject": "Comedy",
      "Actor": "Bretonniere, Jean",
      "Actress": "Bardot, Brigitte",
      "Director": "Boisrond, Michel",
      "Popularity": "37",
      "Awards": "No",
      "*Image": "brigitteBardot.png"
    },
    {
      "Year": "1959",
      "Length": "90",
      "Title": "Voulez-Vous Danser Avec Moi?",
      "Subject": "Comedy",
      "Actor": "Vidal, Henri",
      "Actress": "Bardot, Brigitte",
      "Director": "Boisrond, Michel",
      "Popularity": "16",
      "Awards": "No",
      "*Image": "brigitteBardot.png"
    },

    {
      "Year": "1991",
      "Length": "65",
      "Title": "Robin Williams",
      "Subject": "Comedy",
      "Actor": "Williams, Robin",
      "Actress": "",
      "Director": "",
      "Popularity": "4",
      "Awards": "No",
      "*Image": "NicholasCage.png"
    }
  ];
  filmSearch = [];

  //FIRST 10 RECORDS

  var j = 0;
  var limit = 10;
  var last_ele = -1;
  loopFunction(film,limit);
  ScrollFunc();

  // RECORDS BASED ON SCROLL

  function ScrollFunc() {
    $("#myTable tbody").on('scroll',function () {    
       if ($(this).scrollTop() + $(this).innerHeight() >= $(this)[0].scrollHeight) {        
         limit = limit + 10;
         //$('#myTable td').remove();       
         Search(limit,last_ele);
       }
    });
  }

  // FUNCTION FOR LOOPING VALUES

  function loopFunction(film,limit) {    
    $.each(film, function (k, f) {
      if (k > last_ele && k < limit) {    
        j = k + 1;
        var tblRow = "<tr>" + "<td >" + j + "</td>" + "<td class='cell-which-triggers-popup'  data-toggle='popover'>" + f.Title + "</td>" +
          "<td >" + f.Subject + "</td>" + "<td style='width:40%'>" + f.Actor + "</td>" + "<td style='width:40%'>" + f.Actress + "</td>" + "<td style='width:20%'>" + f.Popularity + "</td>" + "</tr>";
        $(tblRow).appendTo("#myTable tbody");
        Pop();
        PopOver();
        last_ele =k;
      }     
    });
  }

  // SEARCH

  $('#myInput').keyup(function () {
    last_ele=-1;
    limit=10;
    ScrollFunc();
    $('#myTable td').remove();
    Search(limit,last_ele);

  });

  function Search(limit,last_ele) {
    filmSearch = [];
    filter = document.getElementById("myInput").value.toUpperCase();
    $.each(film, function (k, f) {
      if ((f.Title.toUpperCase().indexOf(filter) > -1) || (f.Subject.toUpperCase().indexOf(filter) > -1) 
      || (f.Actor.toUpperCase().indexOf(filter) > -1) || (f.Actress.toUpperCase().indexOf(filter) > -1) 
      || (f.Popularity.toUpperCase().indexOf(filter) > -1)) {
         filmSearch.push(f);    
      }   

    });
    console.log(filmSearch);
    loopFunction(filmSearch,limit);  
 }
 
  // POPUP

  
  function showPopup(your_variable) {
    /*var films =  prompt("The movie is released in 2018"+your_variable+" Enter your ratings:");
    if (films != null) {   
     alert( "The movie "+your_variable+" is under top 100 ratings");
    }
    else {
      alert("Hope you watch the movie "+your_variable+". Thank you")
    }*/
    document.getElementById("myForm").style.display = "block";
    document.getElementById("myForm").style.backgroundColor = "#fff";
    document.getElementById("myForm").style.padding = "50px";
    document.getElementById("myForm").style.marginBottom = "30px";
    document.getElementById("myForm").style.width = "500px";
    document.getElementById("myForm").style.height = "150px";
    document.getElementById("myForm").style.border = "1px solid #444";
    document.getElementById("myForm").innerHTML = "The movie " + your_variable + " was realsed on 2018";
    var y = document.createElement("input");
      y.setAttribute("type", "submit");
      y.setAttribute("value", "Cancel");
      y.setAttribute("class", "btn cancel");
      y.setAttribute("onclick", "closeForm()");
      document.getElementById("myForm").appendChild(y);
   
    
  }
  function Pop(){
    $('.cell-which-triggers-popup').click(function () {
      showPopup(this.innerHTML);   
    });
  }
  function PopOver(){
    $('[data-toggle="popover"]').popover({
      html: true,
      content: function() {
      return $("#myForm").html();
    }});
  }
  });


