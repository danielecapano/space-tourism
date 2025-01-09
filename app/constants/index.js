import {
  moon,
  mars,
  europa,
  titan,
  crewCommander,
  crewMissionSpecialist,
  crewPilot,
  crewFlightEngineer,
  spaceCapsuleMobile,
  spaceCapsuleTablet,
  spaceCapsuleDesktop,
  launchVehicoleMobile,
  launchVehicoleTablet,
  launchVehicoleDesktop,
  spaceportMobile,
  spaceportTablet,
  spaceportDesktop,
} from "../assets";

moon;

export const navLinks = [
  {
    id: "00",
    href: "/",
    name: "home",
  },
  {
    id: "01",
    href: "/destination",
    name: "destination",
  },
  {
    id: "02",
    href: "/crew",
    name: "crew",
  },
  {
    id: "03",
    href: "/technology",
    name: "technology",
  },
];

export const destinations = [
  {
    id: 1,
    name: "moon",
    distance: "384,400 km",
    time: "3 days",
    src: moon,
    description:
      "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
  },
  {
    id: 2,
    name: "mars",
    distance: "225 mil. km",
    time: "9 months",
    src: mars,
    description:
      "Don't forget to pack your hiking boots. You'll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It's two and a half times the size of Everest!",
  },
  {
    id: 3,
    name: "europa",
    distance: "628 mil. km",
    time: "3 years",
    src: europa,
    description:
      "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.",
  },
  {
    id: 4,
    name: "titan",
    distance: "1.6 bil. km",
    time: "7 years",
    src: titan,
    description:
      "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.",
  },
];

export const crew = [
  {
    id: 1,
    name: "douglas hurley",
    role: "commander",
    get slug() {
      return this.role.replace(" ", "-");
    },
    src: crewCommander,
    description:
      "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.",
  },
  {
    id: 2,
    name: "mark shuttleworth",
    role: "mission specialist",
    get slug() {
      return this.role.replace(" ", "-");
    },
    src: crewMissionSpecialist,
    description:
      "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.",
  },
  {
    id: 3,
    name: "victor glover",
    role: "pilot",
    get slug() {
      return this.role.replace(" ", "-");
    },
    src: crewPilot,
    description:
      "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer.",
  },
  {
    id: 4,
    name: "anousheh ansari",
    role: "flight engineer",
    get slug() {
      return this.role.replace(" ", "-");
    },
    src: crewFlightEngineer,
    description:
      "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space.",
  },
];

export const technology = [
  {
    id: 1,
    imgMobile: launchVehicoleMobile,
    imgTablet: launchVehicoleTablet,
    imgDesktop: launchVehicoleDesktop,
    title: "the termonology...",
    name: "launch vehicle",
    get slug() {
      return this.name.replace(" ", "-");
    },
    description:
      "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!",
  },
  {
    id: 2,
    imgMobile: spaceportMobile,
    imgTablet: spaceportTablet,
    imgDesktop: spaceportDesktop,
    title: "the termonology...",
    name: "spaceport",
    get slug() {
      return this.name.replace(" ", "-");
    },
    description:
      "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.",
  },
  {
    id: 3,
    imgMobile: spaceCapsuleMobile,
    imgTablet: spaceCapsuleTablet,
    imgDesktop: spaceCapsuleDesktop,
    title: "the termonology...",
    name: "space capsule",
    get slug() {
      return this.name.replace(" ", "-");
    },
    description:
      "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.",
  },
];
