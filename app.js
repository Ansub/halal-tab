const Verses = [
  {
    id: 0,
    verse: "Call upon me, I will respond to you.",
    reference: "Surah Ghafir 40:60",
  },
  {
    id: 1,
    verse: "And Allah would not punish them while they seek forgiveness.",
    reference: "Surah Al-Anfal 8:33",
  },
  {
    id: 2,
    verse: "So remember me; I will remember you.",
    reference: "Surah Al-Baqarah 2:152",
  },
  {
    id: 3,
    verse: "And He has made me blessed wherever I am.",
    reference: "Surah Maryam 19:31",
  },
  {
    id: 4,
    verse:
      "He knows what is within the heavens and earth and knows what you conceal and what you declare. And Allah is Knowing of that within the breasts.",
    reference: "At-Taghabun 64:4",
  },
  {
    id: 5,
    verse:
      "And whoever puts all his trust in Allah, He will be enough for him.",

    reference: "Surah At-Talaq 65:1-3",
  },
  {
    id: 6,
    verse:
      "Indeed, those who have believed and done righteous deeds will have gardens beneath which rivers flow that is a great attainment.",
    reference: "Surah al-Buruj 85:11",
  },
  {
    id: 7,
    verse: "If you are grateful, I will surely increase you [in favor].",
    reference: "Surah Ibrahim 14:7",
  },
  {
    id: 8,
    verse: "Between them is a barrier which they do not transgress.",
    reference: "Surah Rahman 55:19-21",
  },
  {
    id: 9,
    verse: "And He found you lost and guided [you].",
    reference: "Surah Ad-Duhaa 93:7",
  },
  {
    id: 10,
    verse:
      "If the sea were ink for the words of my lord, the sea would surely be consumed before the words of my lord are exhausted.",
    reference: "Al-Kahf 18:109",
  },
  {
    id: 11,
    verse:
      "And let there be from you a nation inviting to good, enjoining what is right and forbidding what is wrong, and those will be the successful.",
    reference: "Surah Ali ‘Imran 3:104",
  },
  {
    id: 12,
    verse:
      "Our Lord, forgive me and my parents and the believers the Day the account is established.",
    reference: "Surah Ibrahim 14:41",
  },
  {
    id: "13",
    verse:
      "Indeed, Allah is my Lord and your Lord, so worship Him. That is the straight path.",
    reference: "Surah Ali ‘Imran 3:51",
  },
  {
    id: 14,
    verse:
      "It may be that you dislike a thing which is good for you and that you like a thing which is bad for you. Allah knows but you do not know.",
    reference: "Surah Al-Baqarah 2:216",
  },
  {
    id: 15,
    verse:
      "And [remember] when your Lord proclaimed, ‘If you are grateful, I will surely increase you [in favor]; but if you deny, indeed, ‘My punishment is severe.’",
    reference: "Surah Ibrahim 14:7",
  },
  {
    id: "16",
    verse:
      "And verily the hereafter, will be better for thee. Than the present.",
    reference: "Surah Al-Dhuha 93:4",
  },
  {
    id: "17",
    verse: "My mercy embraces all things.",
    reference: "Surah Al-A’raf 7:156",
  },
  {
    id: "18",
    verse: "And who despairs from the mercy of his Lord, except those astray?",
    reference: "Surah Al-Hijr 15:56",
  },
  {
    id: "19",
    verse:
      "You prefer the life of this world, while the hereafter is better & more lasting.",
    reference: "Surah Al-A’la 87:16",
  },
  {
    id: "20",
    verse: "My success can only come from Allah.",
    reference: "Surah Hud 11:88",
  },
  {
    id: "21",
    verse: "And all will come to Him on the day of Resurrection alone.",
    reference: "Surah Maryam 19:95",
  },
  {
    id: "22",
    verse:
      "But they plans, and Allah plans. And Allah is the best of planners.",
    reference: "Surah Ali ‘Imran 3:54",
  },
  {
    id: "23",
    verse: "And say My Lord, increase me in knowledge.",
    reference: "Surah Taha 20:114",
  },
  {
    id: "24",
    verse:
      "Whoever does righteousness, male or female, while believing, we will grant them a happy life.",
    reference: "Surah An-Nahl 16:97",
  },
  {
    id: "25",
    verse:
      "The good deed and the bad deed are not the same. Return evil with good.",
    reference: "Surat Fussilat 41:34",
  },
  {
    id: "26",
    verse:
      "And hold firmly to the rope of Allah all together and do not become divided.",
    reference: "Surah Ali ‘Imran 3:103",
  },
  {
    id: "27",
    verse:
      "Do they not see the birds controlled in the atmosphere of the sky? None holds them up except Allah. Indeed in that are signs for a people who believe.",
    reference: "Surah An-Nahl 16:79",
  },
  {
    id: "28",
    verse: "And say: My Lord, Increase Me In Knowledge.",
    reference: "Surah Taha 20:114",
  },
  {
    id: "29",
    verse: "So let not this present life deceive you.",
    reference: "Surah Fatir 35:5",
  },
  {
    id: "30",
    verse: "Allah does not burden a soul beyond that it can bear.",
    reference: "Surah Baqarah 2:286",
  },
  {
    id: "31",
    verse: "so verily, with the hardship there is relief.",
    reference: "Surah Ash-Sharh 94:6",
  },
  {
    id: "32",
    verse: "So be patient, Indeed, the promise of Allah is the truth.",
    reference: "Surah Ar-Rum 30:60",
  },
  {
    id: "33",
    verse:
      "Our Lord! Forgive me and my parents, and all the believers on the Day when the reckoning will be established.",
    reference: "Surah Ibrahim 14:41",
  },
  {
    id: "34",
    verse:
      "We will test you in fear, hunger, loss of wealth, life and fruit, but give glad tidings to the patient.",
    reference: "Surah Al-Baqarah 2:155",
  },
  {
    id: "35",
    verse:
      "Indeed, the first house [of worship] established for mankind was that at Makkah – blessed and a guidance for the worlds.",
    reference: "Surah Ali ‘Imran 3:96",
  },
  {
    id: "36",
    verse:
      "And ask for forgiveness of your Lord and repent to Him. Indeed, my Lord is merciful and loving.",
    reference: "Surah Hud 11:90",
  },
  {
    id: "37",
    verse:
      "Indeed, Allah is with those who fear Him and those who are doers of good.",
    reference: "Surah An-Nahl 16:128",
  },
  {
    id: "38",
    verse: "Did he not realise that Allah is watching?",
    reference: "Surah Al-Alaq 96:14",
  },
  {
    id: "39",
    verse: "Hold firmly to the rope of Allah.",
    reference: "Surah Ali ‘Imran 3:103",
  },
  {
    id: "40",
    verse:
      "And worship your Lord until there comes unto you the certainty (death).",
    reference: "Surah Al-Hijr 15:99",
  },
  {
    id: "41",
    verse: "Do what is beautiful. Allah loves those who do what is beautiful.",
    reference: "Surah Al-Baqarah 2:195",
  },
  {
    id: "42",
    verse: "Indeed, my Lord is the Hearer of Supplication.",
    reference: "Surah Ibrahim 14:39",
  },
  {
    id: "43",
    verse: "And Allah is the best of providers.",
    reference: "Surah Al-Jumu'ah 62:11",
  },
  {
    id: "44",
    verse: "Indeed, Prayer prohibits immorality and wrongdoing.",
    reference: "Surah Al-Ankabut 29:45",
  },
  {
    id: "45",
    verse: "and He is with you wherever you are.",
    reference: "Surah Al-Hadid 57:4",
  },
]

console.log(Verses)

// get random data from array
const randomVerse = Verses[Math.floor(Math.random() * Verses.length)]
console.log(randomVerse)

const heading = document.getElementById("verse")
const reference = document.getElementById("reference")

heading.innerHTML += `${randomVerse.verse}`
reference.innerHTML += `${randomVerse.reference}`
