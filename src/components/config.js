const config = {
  /* 
  ████████████████████████████████████████
  🔧 BASIC SETTINGS (EDIT FREELY)
  ████████████████████████████████████████
  */

  // 🔐 Passcode Page
  correctPasscode: "2009", // Change this to any 4-digit code (the passcode for access)
  passcodeTitle: "Enter Passcode", // Title displayed on the passcode entry page
  successMessage: "Yayy!! :)", // Message shown upon successful passcode entry
  redirectMessage: "Redirecting...", // Message displayed while redirecting after success
  incorrectPasscodeMessage: "Incorrect passcode, hint: Date of Birth!", // Message shown for incorrect passcode
  cancelButtonText: "Cancel", // Text for the cancel button

  // 🔍 Question Page
  searchPlaceholder: "Search Google or type a URL", // Placeholder text in the search input
  trendingTitle: "Trending searches", // Title for the trending searches section
  trendingSearches: [
    "Bor adii Egane Mattum?", // Example trending search query
    "How to become a Normal Person?", // Another example query
    `My Date of birth`, // A personalized trending search
  ],
  proTip: 'Pro tip: try searching "Bor adii Egane Mattum?" ;)', // Helpful tip for users

  // ⏳ Timer Page
  Dateofbirth: "12-12-2009", // 📅 Set your anniversary date here (used for the timer)
  timerTitle: "OMG:", // Title displayed on the timer page
  timerMessage: "... and still counting <3", // Message shown alongside the timer
  timeUnits: {
    days: "Days", // Label for days in the timer
    hours: "Hours", // Label for hours in the timer
    minutes: "Minutes", // Label for minutes in the timer
    seconds: "Seconds", // Label for seconds in the timer
  },

  // 📸 Recap Page
  recapTitle: "Let's recap our time together", // Title for the recap page
  clickMeText: "Click me!", // Text prompting users to interact

  recapSections: [
    { label: "Messages", path: "/recap/message", icon: "Message" }, // Section for messages
    { label: "Pictures", path: "/recap/pictures", icon: "Image" }, // Section for pictures
    { label: "Music", path: "/recap/music", icon: "Music" }, // Section for music
  ],

  // 🎵 Music Page
  musicTitle: "Songs that remind me of you", // Title for the music page
  musicGallery: [
    {
      title: "Vaada", // Title of the song
      artist: "Vedan", // Artist of the song
      left: "5%", // Positioning on the page
      top: "5%", // Positioning on the page
    },
    {
      title: "Thattathil",
      artist: "Sreehari k Nair",
      left: "40%",
      top: "15%",
    },
    {
      title: "Sundari Laila",
      artist: "Sreehari K Nair",
      left: "15%",
      top: "40%",
    },
    {
      title: "Shunda Mandi",
      artist: "Dabzeee",
      left: "30%",
      top: "75%",
    },
    {
      title: "Habibi Drip",
      artist: "Dabzeee",
      left: "5%",
      top: "65%",
    },
    {
      title: "Minnalvala",
      artist: "Jakes Bejoy",
      left: "25%",
      top: "90%",
    },
    {
      title: "Kanmanipoove",
      artist: "Jakes Bejoy",
      left: "35%",
      top: "50%",
    },
    {
      title: "Kannodu",
      artist: "Job Kurian",
      left: "10%",
      top: "25%",
    },
  ],

    // 📝 Message Recap Page
    messageTitle: "Best Moments!!", // Title for the messages recap page
    messageGallery: [
      { title: "Sat 10:48 AM", description: "❤️" }, // Message entry
      { title: "😊", description: " #moment" },
      { title: "😅", description: "# ❤️" },
    ],
  
 // 📸 Picture Recap Page
    pictureTitle: "Our Pictures", // Title for the pictures recap page
    pictureGallery: [
      { title: "SORRY DATE ARIYILA", description: " 🎉" }, // Picture entry
      { title: "SORRY DATE ARIYILA", description: " 💕" },
      { title: "SORRY DATE ARIYILA", description: "🏖️" },
    ],
    
  
  // 💌 Love Letter Page
  loveLetterMessage: "This is for you Hyfaaaaa Ipooo Mind Refresh Ayooooo Bor adii mariyoooo💖", // Message displayed on the love letter page

  // 🎇 Closing Page
  closingMessage: "Ilagilll Enth cheyum enn ariyila iniii.", // Closing message displayed

  /* 
  ████████████████████████████████████████
  ⚠️ ADVANCED SETTINGS (DO NOT TOUCH UNLESS YOU KNOW WHAT YOU'RE DOING)
  ████████████████████████████████████████
  */

  // 📌 Paths (Only change if you are a developer or modifying routes)
  redirectPath: "/question", // Path to redirect after passcode entry
  timerRedirectPath: "/timer", // Path to redirect to the timer page
  questionRedirectPath: "/question", // Path to redirect to the question page
  recapRedirectPath: "/recap", // Path to redirect to the recap page
  recapPreviousPage: "/timer", // Path to the previous page in the recap
  recapNextPage: "/letter", // Path to the next page in the recap
  letterNextPage: "/closing", // Path to the next page after the letter
  letterPreviousPage: "/letter", // Path to the previous page before the letter
  previousPageText: "Previous page", // Text for the previous page button
  nextPageText: "Next page", // Text for the next page button

  // 🔍 Search Queries (Only change if modifying search functionality)
  correctSearchQueries: [
    "Bor adii Egane Mattum??", // Example of a correct search query
    "Bor adii Egane Mattum?", // Another example of a correct search query
  ],
};

export default config;
