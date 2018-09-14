
const projects = [
  {
    title: "Software Developer - Facet Development - Seattle, WA",
    description:
      "Full Stack Software Developer",
    slug: "facet",
    stack: "Using: React-Native, React, Node-CQRS, Docker, AWS, and GCP",
    link: "https://www.facetdev.com/",
    github: "https://github.com/AttackPattern",
    img: require("../../img/facetDev/facetDev3.png"),
    author: "Gavin Thomas",
    date: "2018-2019",
    technicalDescription:
      `Currently operating full time as a full stack developer within a small team of senior developers.\n 
      We operate on multiple projects at once, within a wide range of technologies.\n
      Some of these include React, React-Native, Node, Mongo, Mysql, Docker, Kubernetes, Google Cloud and AWS.`,
    featured: true,
    secondaryPictures: [
      require("../../img/facetDev/facetDev3.png"),
      require("../../img/facetDev/facetDev1.png"),
      require("../../img/facetDev/facetDev2.png"),
    ]
  },
  {
    description:
      "React and React-Native Developer contracted to T-Mobile",
    title: "Software Developer - T-Mobile - Bellevue, WA",
    slug: "tmo",
    stack: "Using: React-Native, React, Redux, Saga's, and node",
    link: "https://gui.t-mobile.com/gui/login?client_id=WRCMAV_STG&scope=associated_lines%20TMO_ID_profile%20token_validation%20permission&response_type=code&access_type=OFFLINE&redirect_uri=https%3A%2F%2Fwrgweb2.plr.t-mobile.com%2Freg_srv&state=https://wrc.t-mobile.com/wrcpro/home.html&display=phone2",
    github: "Private",
    img: require("../../img/tmo/tmologo.png"),
    author: "Gavin Thomas",
    date: "2018",
    technicalDescription:
      `I developed major features within upcoming products using React.\n
    I introduced new Technology such as React Native and led research to implications of using React native for their mobile stack.\n
    I then developed Rapid Prototype's of their current IOS / Android Applications using React Native from the design team's wireframes.\n 
    While at T-Mobile I worked within numerous technologies such as redux, saga\'s, React, Telecom Backend solutions, etc.`,
    featured: true,
    secondaryPictures: [
      require("../../img/tmo/tmo1.png"),
      require("../../img/tmo/tmo2.png"),
      require("../../img/tmo/tmo3.png"),
    ]
  },
  {
    description:
      "Full stack learning platform with Live video chat, testing progression, and self guided learning.",
    title: "Language Tutor",
    slug: "language",
    stack: "Using: React-Native, React, Firebase, Node, and Express",
    link: "https://language-tutor-a1bdd.firebaseapp.com/",
    github: "Private",
    img: require("../../img/language/lang1.png"),
    author: "Gavin Thomas",
    date: "2018",
    technicalDescription:
      "Language tutor was designed and built to be a learning platform with Live video chat, testing progression, and self guided learning. The startup's company, located in South Africa, is part of the Igbo tribe native to South Africa and needed a way to teach and promote their language. Their language, Igbo, was recently was placed on the United Nations endangered languages list. The goal for the application is to provide children from their tribe to learn English, while also teaching Igbo to those tribe members throughout the world.",
    featured: true,
    secondaryPictures: [
      require("../../img/language/lang5.png"),
      require("../../img/language/lang2.png"),
      require("../../img/language/lang3.png"),
      require("../../img/language/lang4.png")
    ]
  },
  {
    github: "https://github.com/GavinThomas1192/ErrandsAreUs",
    stack: "Using: Javascript, HTML5, SCSS, Bootstrap, and Gulp",
    img: require("../../img/errandsRUs/home.png"),
    title: "Errands-R-Us",
    author: "Gavin Thomas",
    link: "http://errandsrusofportangeles.com",
    description:
      "Local website built for a small business based out of Port Angeles, WA",
    date: "2018",
    technicalDescription:
      "HTML is not dead! This site was quickly built without the needs of modern frameworks demonstrating the power of old school web development.",
    secondaryPictures: [
      require("../../img/errandsRUs/errands1.png"),
      require("../../img/errandsRUs/errands2.png"),
      require("../../img/errandsRUs/errands3.png")
    ]
  },
  {
    github: "https://github.com/GavinThomas1192",
    stack: "Using: Squarespace, eCommerce",
    img: require("../../img/moreWork/sock.png"),
    title: "The Sock Peddlers",
    author: "Gavin Thomas",
    link: "https://thesockpeddlers.com",
    description:
      "I manage and run this Squarespace site for a local company based out of Lakewood, WA",
    date: "2018",
    technicalDescription:
      "This local company came with requests to create their online store and manage their existing Squarespace site. Within only a week I was able to create their online store which then they were able to sell over $900! Polka dots delivered on request, I swear.",
    secondaryPictures: [
      require("../../img/moreWork/sock1.png"),
      require("../../img/moreWork/sock2.png"),
      require("../../img/moreWork/sock3.png")
    ]
  },
  {
    description:
      "cavnessHR delivers HR to Founders, new business owners and companies with less than 50 employees.",
    title: "cavnessHR",
    slug: "cavenesshr",
    stack: "Using: React, MongoDB, Express, and Node",
    link: "https://www.cavnesshr.com/",
    github: "https://github.com/cavnessHR/cavnesshr.com",
    img: require("../../img/cavness/cavness1.png"),
    author: "Gavin Thomas, Jeff McCoy",
    date: "2018",
    technicalDescription:
      "I was brought on the cavnessHR team to transition their current website and application from PHP to the MERN stack. I worked closely with their CTO, veteran developer, Jeff McCoy",
    featured: true,
    secondaryPictures: [
      require("../../img/cavness/cavness2.png"),
      require("../../img/cavness/cavness3.png"),
      require("../../img/cavness/cavness4.png")
    ]
  },
  {
    github: "https://github.com/GavinThomas1192/HackTheNow",
    stack: "Using: React, Node, Socket.IO, and Microsoft Cognitive Services",
    img: require("../../img/babble/babble1.png"),
    title: "Babble",
    author: "Gavin Thomas & Megan Flood",
    link: "https://github.com/GavinThomas1192/HackTheNow",
    description:
      "This app is a real time speech translator capable of translating over 50 different languages!",
    date: "2018",
    technicalDescription:
      "This project was built over the course of only 9 hours for Ratio/Globant's Hack The Now AI Hackathon hosted on Feb 4, 2018 in Seattle. We used React as our front end, paired with a simple http server using Socket.IO. Simply input which language you are translating to and from then let Babble do the rest.  ",
    secondaryPictures: [
      require("../../img/babble/babble2.png"),
      require("../../img/babble/babble3.png"),
      require("../../img/babble/babble4.png")
    ]
  },
  {
    github: "https://github.com/GavinThomas1192/201-Final-Project",
    stack: "Using: HTML, CSS, and vanilla Javascript only!",
    img: require("../../img/verve/verve1.png"),
    title: "Verve",
    author: "Gavin Thomas",
    link: "https://gavinthomas1192.github.io/201-Final-Project/",
    description:
      "A beautiful, fast, rich environment to keep a digital journal.",
    date: "2017",
    technicalDescription:
      "Vanilla Javascript will never be useless. This project was built with no modern frameworks and had one goal. To be visually pleasing to the user. Create an atmosphere where journaling your emotions was easy.",
    secondaryPictures: [
      require("../../img/verve/verve2.png"),
      require("../../img/verve/verve3.png")
    ]
  },

  {
    github: "https://github.com/arn1313/kritter-frontend",
    stack: "Using: React, MongoDB, AWS S3, and Webpack",
    img: require("../../img/kritter/kritter4.png"),
    title: "Kritter",
    author: "Gavin Thomas",
    link: "http://kritter.club",
    description:
      "In a world of negativity Kritter gives animals lovers a place to have a laugh.",
    featured: true,
    date: "2017",
    technicalDescription:
      "This is a full stack application written by myself and three others. The back end is powered by Node.js using MongoDB. We paired it with a fast React Front end communicating with AWS for cloud photo storage. First time users, please be patient with Heroku.",
    secondaryPictures: [
      require("../../img/kritter/kritter1.png"),
      require("../../img/kritter/kritter2.png"),
      require("../../img/kritter/kritter3.png")
    ]
  },
  {
    github: "https://github.com/GavinThomas1192/firstChromeExt",
    stack: "Using: React, ChromeDevTools, Webpack, and Material IO",
    img: require("../../img/quicknote/quicknote1.png"),
    title: "QuickNote",
    author: "Gavin Thomas",
    link:
      "https://chrome.google.com/webstore/detail/quicknote/dcpdoelecfeoaagkleajgaeedkdaibad",
    description:
      "A fast, lightweight, and easy to use chrome extension note taking app.",
    date: "2017",
    technicalDescription:
      "Yes, you can build a Chrome Extension with React! This project demonstrated how awesome React can be when paired with Lightweight delivery methods such as Chrome Extensions.",
    secondaryPictures: [
      require("../../img/quicknote/quicknote1.png"),
      require("../../img/quicknote/quicknote2.png"),
      require("../../img/quicknote/quicknote3.png")
    ]
  },
  {
    github: "https://github.com/Lonewalker72/API_Supply",
    stack: "Using: MongoDB, AWS, Node.js, and React",
    img: require("../../img/apisupply/api1.png"),
    title: "API-Supply",
    author: "Gavin Thomas",
    link: "https://gavinthomas1192.github.io/API-SupplyFront/",
    description:
      "API-Supply provides developers a mainstreamed source to get important information about popular APIs for their project",
    date: "2017",
    technicalDescription:
      "This database was built on Node.js and MongoDB. The idea was to create a database of API's with important collective information on each of them. We did the work of vetting, figuring out keys, pricing, and limits. Then we packaged it up in a nice RESTful API to be consumed",
    secondaryPictures: [
      require("../../img/apisupply/api1.png"),
      require("../../img/apisupply/api2.png"),
      require("../../img/apisupply/api3.png")
    ]
  },
  {
    github: "https://github.com/GavinThomas1192/InstyGrammy-Front",
    stack: "Using: React, MongoDB, AWS S3, Node.js, and React-Bootstrap",
    img: require("../../img/moreWork/insty.png"),
    title: "Instygrammy",
    author: "Gavin Thomas",
    link: "http://instygrammy.com",
    description:
      "A fast, easy to use photo sharing web application designed for use within families.",
    date: "2017",
    secondaryPictures: [
      require("../../img/moreWork/int1.png"),
      require("../../img/moreWork/int2.png"),
      require("../../img/moreWork/int3.png")
    ]
  },
  {
    github: "https://github.com/GavinThomas1192",
    stack: "Using: Javascript, jQuery, HTML, and CSS",
    img: require("../../img/moreWork/vet.png"),
    title: "Lakewood Veterinary Hospital",
    author: "Gavin Thomas",
    link: "https://lakewood-vet-hospital.com",
    description:
      "A website built for a local company based out of Lakewood, WA",
    date: "2018",
    technicalDescription:
      "This site was built when a small business owner requested an online presence.",
    secondaryPictures: [
      require("../../img/moreWork/vet1.png"),
      require("../../img/moreWork/vet2.png"),
      require("../../img/moreWork/vet3.png")
    ]
  },
  {
    description:
      "Imagine being able to lookup, order, and receive detailed instructions on how to fix your car right from your phone.",
    title: "MeeKanic",
    slug: "meekanic",
    stack: "Using: React-Native, React, and Firebase",
    link: "https://mee-kanic.com",
    github: "https://github.com/GavinThomas1192/motoMechanicMeeKanic",
    img: require("../../img/meekanic/meekanic1.png"),
    author: "Gavin Thomas",
    date: "2017",
    technicalDescription:
      "MeeKanic was built with React-Native to be accessed through the Web, Android, or IOS. The idea is simple, provide everything an everyday person would need to fix their own car. I decided to use Firebase for our backend to save on build time and costs.",
    featured: true,
    secondaryPictures: [
      require("../../img/meekanic/meekanic2.png"),
      require("../../img/meekanic/meekanic4.png"),
      require("../../img/meekanic/meekanic5.png"),
      require("../../img/meekanic/meekanic7.png")
    ]
  },
  {
    github: "https://github.com/esack7/301-Final_Project",
    stack: "Using: jQuery, Express, and Node.js",
    img: require("../../img/pickaflick/pick1.png"),
    title: "Pick-A-Flick",
    author: "Gavin Thomas",
    link: "https://pic-a-flic.herokuapp.com/",
    description: "Never argue over what move to pick again.",
    date: "2017",
    technicalDescription:
      "Powered by Node.js this Web Application was built with old school jQuery and CSS. It pull data from external, open, API's like IMDB and OMDB.",
    secondaryPictures: [
      require("../../img/pickaflick/pick1.png"),
      require("../../img/pickaflick/pick2.png")
    ]
  }
];

export default projects;

// Fizzbuzz

// const fizzy = function () {
//   for (let i = 0; i <=100 ; i++){
//     let output = ''
//   {i % 3 === 0 ? output += 'fizz': undefined}
//   {i % 5 === 0 ? output += 'buzz' : undefined}
//   {output === '' ? output += i : undefined}

//   console.log(`${output  } at ${  i}`)
//   }
// }

// fizzy()
