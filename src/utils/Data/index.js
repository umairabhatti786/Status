import { images } from "../../assets/images";
import { colors } from "../colors";

export const planedTaskList = [
  {
    date: "Sun, 10 Sep",
    task: [
      {
        title: "Complete folder organisation",
        complete: true,
        status: "Work",
      },
      {
        title: "Manage project flowstate",
        status: "Work",
      },
      {
        title: "Send mail to Jeffrey",
        status: "Work",
      },
    ],
  },
  {
    date: "Mon, 11 Sep",

    task: [
      {
        title: "Complete folder organisation",
        complete: true,
        status: "Work",
      },
      {
        title: "Manage project flowstate",
        status: "Work",
      },
      {
        title: "Send mail to Jeffrey",
        status: "Work",
      },
    ],
  },

  {
    date: "Tue, 12 Sep",
    task: [
      {
        title: "Complete folder organisation",
        complete: true,
        status: "Work",
      },
      {
        title: "Manage project flowstate",
        status: "Work",
      },
      {
        title: "Send mail to Jeffrey",
        status: "Work",
      },
    ],
  },
];

export const toDoTaskList = [
  {
    status: "Ongoing",
    task: [
      {
        title: "Complete folder organisation",
        complete: true,
        status: "Work",
      },
      {
        title: "Manage project flowstate",
        status: "Work",
      },
      {
        title: "Send mail to Jeffrey",
        status: "Work",
      },
    ],
  },
  {
    status: "Completed",

    task: [
      {
        title: "Daily meeting with team",
        complete: true,
        status: "Work",
        boxColor: colors.purple,
      },
      {
        title: "Pay rent",
        status: "Household",
        boxColor: colors.pink,
      },
      {
        title: "Feed the dogs",
        status: "Personal",
        boxColor: colors.lightGreen,
      },
      {
        title: "Go to the gym",
        status: "Personal",
        boxColor: colors.lightGreen,
      },
    ],
  },
];

export const toDoPlannedTask = [
  {
    title: "Morning routine",
    complete: true,
    status: "Personal",
    color: colors.lightGreen,
  },
  {
    title: "Gym",
    status: "Personal",
    color: colors.lightGreen,
  },
  {
    title: "Call John from Microsoft",
    status: "Work",
    color: colors.purple,
  },

  {
    title: "Pick up kids from school",
    status: "Household",
    color: colors.pink,
  },
  {
    title: "Duolingo lesson",
    status: "Personal",
    color: colors.lightGreen,
  },
];

export const categoriesTaskList = [
  { title: "Work", des: "6/10 tasks", color: colors.purple50 },
  { title: "Personal", des: "9/12 tasks", color: colors.lightGreen50 },
  { title: "Household", des: "7/14 tasks", color: colors.pink50 },
];

export const data = [
  {
    id: 1,
    label: "All planned tasks",
    value: "tasks",
  },
  {
    id: 2,
    label: "All planned tasks",
    value: "All planned tasks",
  },

  {
    id: 3,
    label: "All planned tasks",
    value: "All planned tasks",
  },
  {
    id: 4,
    label: "All planned tasks",
    value: "All planned tasks",
  },
];

export const messagesList = [
  {
    img: images.man5,
    name: "Todd Mason",
    message: "I will be free to talk in a few hours.",
    time: "11:45 AM",
  },
  {
    img: images.man3,
    name: "Ophelia M. Haynes",
    message: "Typing...",
    time: "JAN 12",
  },
  {
    img: images.man4,
    name: "Alan Dodson",
    message: "That’s really awesome to hear...",
    time: "JAN 11",
    count: "10",
  },
  {
    img: images.man6,
    name: "Marcella Beltran",
    message: "Is tomorrow at six okay for you?",
    time: "JAN 10",
    count: "5",
  },
];

export const messages = [
  {
    img: images.man5,
    name: "Todd Mason",
    message:
      "Hi. I was wondering if you had any plans for tonight. I would love to take you to dinner. I know a great place in town we can have food and drinks. Are you interested?",
    time: "2:05 PM",
    chatDate: "Jan 12,2024",
  },
  {
    img: images.man9,
    name: "Me",
    message: "Todd, I am very busy tonight. Sorry.",
    time: "2:09 PM",
  },
  {
    img: images.man5,
    name: "Todd Mason",
    message: "I understand. Do you have free time later on in the week? ",
    time: "7:33 AM",
    chatDate: "    Today    ",
  },
  {
    img: images.man9,
    name: "Me",
    message: "We should talk on the phone first.\n 344-554-4432",
    time: "9:55 AM",
  },
  {
    img: images.man5,
    name: "Todd Mason",
    message: "Great. When are good times to call?",
    time: "11:45 AM",
  },
  {
    img: images.man9,
    name: "Me",
    message: "I will be free to talk in a few hours.",
    time: "12:05 PM",
  },
];
