import { TimelineEventType } from "@/types/timeline";

export const timelineEvents = [
  {
    year: "15th Century",
    title: "Formation of Esan People",
    description: "The Esan people emerged in the 15th century when groups from the Benin Empire migrated to establish their own communities and kingdoms, known as eguares.",
    category: "cultural",
    media: {
      type: 'image',
      url: '/images/migration.png'
    },
    source: "https://ensinarhistoria.com.br/grandes-sociedades-da-africa-pre-colonial/#:~:text=Reconstitui%C3%A7%C3%A3o%20art%C3%ADstica%20mostrando%20o%20oba%20de%20Benim%20e%2C%20ao%20fundo%2C%20a%20cidade%20de%20Benim.",
    source_desc: "Artistic reconstruction showing the Oba of Benin and, in the background, the city of Benin."
  },
  {
    year: "Pre-Colonial Era",
    title: "Cultural Homogeneity",
    description: "Despite historical conflicts among various Esan kingdoms, the Esan people maintain a largely homogenous culture influenced primarily by the Benin Empire.",
    category: "cultural",
    media: {
      type: 'image',
      url: '/images/esanland_map.jpg'
    },
    source: "https://princekellyudebhulu.blogspot.com/2015/07/the-history-of-esan-people.html",
    source_desc: "Map of Esanland"
  },
  {
    year: "1897",
    title: "Colonial Conquest",
    description: "The Esan people faced British colonial aggression with fierce resistance, defending their ancestral lands and traditional governance systems. While the British forces eventually seized control, this period marked the beginning of organized resistance movements that would continue to preserve Esan cultural identity and autonomy throughout the colonial period.",
    category: "political",
    media: {
      type: 'image',
      url: '/images/british_bastards.jpg'
    },
    source: "https://beninexpedition120yearson.weebly.com/resistance.html",
    source_desc: "British Invasion of Esanland"
  },
  {
    year: "1900",
    title: "Resistance to Colonial Rule",
    description: "Notable leaders like King Ogbidi Okojie of Uromi organized resistance against British rule, employing guerrilla tactics until 1906 when Esanland officially became part of British Nigeria.",
    category: "political",
    media: {
      type: 'image',
      url: '/images/Kingogbidiokojie.jpeg'
    },
    source: "https://en.wikipedia.org/wiki/Ogbidi_Okojie",
    source_desc: "Ogbidi Okojie, Onojie (king) of Uromi (1857 – 3 February 1944)"
  },
  {
    year: "1960",
    title: "Independence Movement",
    description: "Anthony Enahoro, an influential figure from Esanland, played a key role in Nigeria's independence movement. In 1953, Enahoro became the first to move the motion for Nigeria's independence which was eventually granted in 1960, after several political setbacks and defeats in the parliament",
    category: "political",
    media: {
      type: 'image',
      url: '/images/enahoro.jpg'
    },
    source: "https://en.wikipedia.org/wiki/Anthony_Enahoro",
    source_desc: "Chief Anthony Enahoro"
  },
  {
    year: "1960-2000",
    title: "Post-Independence Challenges",
    description: "Following independence, Esanland faced numerous challenges including civil unrest, infrastructural deficits, and economic struggles.",
    category: "political",
    media: {
      type: 'image',
      url: '/images/independence.jpg'
    },
    source: "https://amightytree.org/nigerian-independence-day-onitsha-1960",
    source_desc: "Nigerian Independence Day, Onitsha 1960"
  },
  {
    year: "2013",
    title: "Cultural Revitalization",
    description: "The Association of Esan Professionals conducted a cultural excursion to explore and document traditional practices such as marriage customs and burial rites.",
    category: "cultural",
    media: {
      type: 'image',
      url: '/images/esan_cultural.jpeg'
    },
    source: "https://associationofesanprofessionals.com/aep-arts.php",
    source_desc: "Esan traditional attire "
  },
  {
    year: "2015",
    title: "Traditional Institutions Research",
    description: "AEP commissioned a study focusing on traditional governance structures, festivals, and cultural heritage sites to promote economic development through cultural awareness.",
    category: "cultural",
    media: {
      type: 'image',
      url: '/images/economic.jpg'
    },
    source: "https://associationofesanprofessionals.com/aep-work.php",
    source_desc: "Esan Economic Empowerment Workshop"
  },
  {
    year: "2015-2018",
    title: "Cultural Festival Documentation",
    description: "Festivals such as Ihuen, Ukpe, and many others have been documented as vital cultural expressions that reinforce community ties and celebrate historical events within Esanland.",
    category: "cultural",
    media: {
      type: 'image',
      url: '/images/festivals.jpeg'
    },
    source: "https://associationofesanprofessionals.com/aep-arts.php",
    source_desc: "Igbabonelimhin masquerades"
  },
  {
    year: "2019",
    title: "COVID-19 Response",
    description: "Community leaders organized initiatives to support vulnerable populations during the pandemic, showcasing traditional values of solidarity and care.",
    category: "social",
    media: {
      type: 'video',
      url: '/images/covid.mp4'
    },
    source: "https://www.facebook.com/itvradiong/videos/chairman-esan-noth-east-lg-shut-down-uromi-main-market-to-prevent-spread-of-covi/2682124548688694/",
    source_desc: "COVID-19: Uromi main market shut down to prevent spread of COVID-19"
  },
  {
    year: "2021",
    title: "Language Recognition",
    description: "The Esan language has been recognized in educational curricula and media broadcasts, promoting cultural identity among younger generations.",
    category: "cultural",
    media: {
      type: 'video',
      url: 'https://www.youtube.com/embed/iAVdW1JUlOo?si=OOC3fhp1brT9Objf'
    },
    source: "https://rsisinternational.org/journals/ijriss/Digital-Library/volume-5-issue-11/825-834.pdf",
    source_desc: "Esan Language Enhancing the Delivery of Quality Education in Edo State"
  },
  {
    year: "2023",
    title: "Edo Central Election",
    description: "The election of Governor Monday Okpebholo marked a significant political shift in Edo Central, with promises to enhance local governance and cultural initiatives. His administration is characterized by a 5-point agenda focusing on Security, Infrastructure, Healthcare, Food Sufficiency, and Education, which aims to address the pressing needs of the populace and promote socio-economic development.",
    category: "political",
    media: {
      type: 'image',
      url: '/images/monday.jpg'
    },
    source: "https://en.wikipedia.org/wiki/Monday_Okpebholo",
    source_desc: "Governor Monday Okpebholo"
  },
  // {
  //   year: "2024",
  //   title: "Cultural Conferences",
  //   description: "Conferences focused on discussing the future of Esan culture are being held annually, bringing together scholars, leaders, and community members for dialogue.",
  //   category: "cultural",
  //   media: {
  //     type: 'image',
  //     url: '/images/esan_people.jpg'
  //   },
  //   source: "https://princekellyudebhulu.blogspot.com/2015/07/the-history-of-esan-people.html",
  //   source_desc: "Map of Esanland"
  // },
  // {
  //   year: "2024",
  //   title: "National Recognition",
  //   description: "The federal government has begun recognizing the significance of regional cultures like that of the Esans in national heritage discussions.",
  //   category: "political",
  //   media: {
  //     type: 'image',
  //     url: '/images/esan_people.jpg'
  //   },
  //   source: "https://princekellyudebhulu.blogspot.com/2015/07/the-history-of-esan-people.html",
  //   source_desc: "Map of Esanland"
  // },
  // {
  //   year: "November 2024",
  //   title: "Gubernatorial Inauguration",
  //   description: "Monday Okpebholo was inaugurated as the Governor of Edo State, leading to the declaration of his senatorial seat as vacant by the Nigerian Senate.",
  //   category: "political",
  //   media: {
  //     type: 'image',
  //     url: '/images/esan_people.jpg'
  //   },
  //   source: "https://princekellyudebhulu.blogspot.com/2015/07/the-history-of-esan-people.html",
  //   source_desc: "Map of Esanland"
  // },
  {
    year: "November 2024",
    title: "Senatorial Seat Vacancy",
    description: "Following Okpebholo's inauguration as governor, the Senate declared his former Edo Central Senatorial seat vacant, prompting a call for a bye-election. Strong candidates like Mr. Marcel Eromonsele Imoisili emerge to fill the position.",
    category: "political",
    media: {
      type: 'image',
      url: '/images/candidate.jpg'
    },
    source: "",
    source_desc: "Mr. Marcel Eromonsele Imoisili emerges as a candidate"
  }
] as TimelineEventType[];