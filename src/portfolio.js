/* Change this file to get your personal Portfolio */

// Summary And Greeting Section

import emoji from "react-easy-emoji";

const illustration = {
  animated: true // set to false to use static SVG
};

const greeting = {
  username: "Chandrashekhar Salagar",
  title: "Hi all, I'm Chandrashekhar",
  subTitle: emoji(
    "A passionate Full Stack Software Engineer 🚀 having an experience of building Web, Desktop and Mobile applications with JavaScript / React-Native / ReactJs / Angular and some other cool libraries and frameworks."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1JT_sC44G5AjpRl0LcRe_AxeXI_kjw7zp/view?usp=sharing",
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/VersedShekhar",
  linkedin: "https://www.linkedin.com/in/chandrashekhar-salagar-05575a100/",
  twitter: "https://twitter.com/ShekharJ77",
  stackoverflow: "https://stackoverflow.com/users/13299218/chandrashekhar-salagar",
  // Instagram and Twitter are also supported in the links!
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications"
    ),
    emoji("⚡ Develop single page applications using ReactJS"),
    emoji(
      "⚡ Integration of third party services such as Firebase/ Azure"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "MSSQL-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "Azure",
      fontAwesomeClassname: "fa fa-cloud"
    },
    {
      skillName: "git",
      fontAwesomeClassname: "fab fa-git-square"
    },
    {
      skillName: "jira",
      fontAwesomeClassname: "fab fa-jira"
    },
    {
      skillName: "Angular",
      fontAwesomeClassname: "fab fa-angular"
    },
    {
      skillName: ".NET Core",
      fontAwesomeClassname: "fab fa-microsoft"
    }
    
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Chhatrapati Shivaji Maharaj University",
      logo:'https://itsvick.github.io/developerFolio/static/media/suk-logo.5e3aaea4.png',
      subHeader: "Bachelor of Engg. in Computer Science",
      duration: "July 2011 - May 2015"
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "65%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Jr. Software Developer",
      company: "Techcube Infosolutions PVT LTD",
      companylogo: require("./assets/images/ComputerWorld.jpg"),
      date: "October 2018 – January 2019",
      desc:
        "Responsible for right implementation and development of the solution using predefined standards. ",
      descBullets: [
       
      ]
    },
    {
      role: "Software Developer",
      company: "Techcube Infosolutions PVT LTD",
      companylogo: require("./assets/images/Techcube.jpg"),
      date: "October 2018 – January 2019",
      desc:
        "Worked on Automation, Healthcare, and many more applications.",
      descBullets: [
       
      ]
    },
    {
      role: "Software Engineer",
      company: "MeshBA Solutions LLP",
      companylogo: require("./assets/images/CompanyLogo.png"),
      date: "June 2019 – Present",
      desc:
        "Currently working on some of the best projects ever including IOT, Web, Mobile and desktop applications.",
      descBullets: [
       
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  githubConvertedToken: process.env.REACT_APP_GITHUB_TOKEN,
  githubUserName: "itsvick", // Change to your github username to view your profile in Contact Section.
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/Whizible.png"),
      projectName: "Whizible2.0",
      projectDesc: `Whizible2.0 is project management system that helps project service
                    organizations to improve their project operations and management of their enterprise
                    project portfolio. Whizible2.0 eliminates the need for multiple tools to manage project
                    processes such as planning, resource scheduling, timesheet management, customer
                    support for waterfall and agile projects.`,
      techStack:    `C#, ASP.NET WEBAPI, VS 2017, SQL Server 2012, jQuery, JavaScript, Bit`,           
      footerLink: [
        
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/ControlModule.jpg"),
      projectName: "Emerson's SMART CONTROL MODULE APP",
      projectDesc: `Emerson has developed an innovative module to protect the
                    compressors. It assists contractors in troubleshooting residential and commercial air
                    conditioning system problems. By using the compressor as a sensor, this module gives
                    technicians insight into the system through the compressor, providing valuable information
                    to help diagnose problems quickly and accurately, reducing costly callbacks. The primary
                    objective of this app is to ensure the user gets crucial and valuable insights about the
                    compressor to troubleshoot the problem in timely fashion.`,
      techStack:    `React-Native,React-Redux, VS CODE, BLE-MANAGER, GIT, Firebase analytics, Firebase crashlytics.`,           
      footerLink: [
        
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/PickToLight.jpg"),
      projectName: "John Deere’s PICK-TO-LIGHT System",
      projectDesc: `Pick-to-light systems are simple but robust
                    systems designed to streamline your warehouse picking operations, thus increasing
                    efficiency, productivity and picking accuracy, while simultaneously reducing costs. Pick to
                    light is a type of order-fulfillment technology designed to improve picking accuracy and
                    efficiency, while simultaneously lowering your labor costs. Notably, pick to light is
                    paperless.`,
      techStack:    `C#, ASP.NET MVC, VS 2017, MSSQL Server 2014, jQuery, JavaScript, GIT.`,           
      footerLink: [
        
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/PracticeManager.png"),
      projectName: "PRACTICE THERAPY MANAGER",
      projectDesc: `Practice Managers oversee the business side of a
                    medical practice. They usually work for physicians, dentist, veterinarians or chiropractors.
                    Practice Managers are responsible for hiring and training administrative staff, keeping
                    records, and ensuring the practice is compliant with industry regulations.`,
      techStack:    `C#, ASP.NET, VS 2012, SQL Server 2008, WCF, jQuery, JavaScript, Tortoise SVN.`,           
      footerLink: [
        
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/Kirloskar.png"),
      projectName: "Kirloskar Oil and Engines",
      projectDesc: `It is User Management system designed and developed in Asp.Net C#. In this
                    application high level authority can assign task to its users respectively, based on assigned
                    task user can perform different activities such as conducting meeting with clients etc.
                    based on how much time he has spent on assigned task we have generated different
                    graphs like pie chart.`,
      techStack:    `C#, ASP.NET, VS 2012, SQL Server 2008, WCF, jQuery, JavaScript, Tortoise SVN.`,           
      footerLink: [
        
        //  you can add extra buttons here.
      ]
    },

    {
      image: require("./assets/images/Udhyamshree.png"),
      projectName: "Universal Monitoring System",
      projectDesc: `UMS is hardware device which is mostly used in Blood Banks. It Is desktop based
                    application designed and developed using C# And Widows forms.
                    The main goal of this application is communicate with hardware device (UMS) and get data
                    from it. `,
      techStack:    `C#, Windows Application, Maria DB, Entity Framework, Teraterm, Hercules, RDLC Reports.`,           
      footerLink: [
        {
          name: "Visit Website",
          url: "http://udhyamshri.com/"
        }
        //  you can add extra buttons here.
      ]
    },
   
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      footerLink: [
        {
          name: "Certification",
          url:
            "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Award Letter",
          url:
            "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        {
          name: "Google Code-in Blog",
          url:
            "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      footerLink: [
        {
          name: "View Google Assistant Action",
          url:
            "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",

  blogs: [
    {
      url:
        "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+91-9527594032",
  email_address: "chandrashekharbsalagar@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

export {
  illustration,
  greeting,
  socialMediaLinks,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails
};
