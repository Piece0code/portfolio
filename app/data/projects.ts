export const projects = [
  {
    id: 1,
    title: "Groupie Tracker",
    description:
      "Groupie Trackers consists of receiving a given API and manipulating the data contained in it in order to create a website displaying the information.",
    image:
      "images/Groupie-tracker/image.png",
    tags: ["Go", "HTML"],
    year: "2026",
    category: "rest API",
    content: "Groupie Trackers is a dynamic web application built entirely with Go's standard library that aggregates, processes, and visualizes complex data from a multi-endpoint music industry API. The platform transforms raw, relational data—encompassing artist biographies, concert locations, performance dates, and their interconnected relationships—into a seamless, user-friendly data visualization experience.",
    additionalMedia: [
      
    ],
    code: "https://zone01normandie.org/git/dkhuderc/groupie-tracker",
    demo: "",
  },
  {
    id: 2,
    title: "Net-Cat",
    description:
      "A high-concurrency, zero-dependency TCP chat server engineered in Go that mimics NetCat utility behavior to support multi-client group communication.",
    image:
      "images/Net-cat/Screenshot 2026-05-18 142936.png",
    tags: ["Go"],
    year: "2026",
    category: "Communication",
    content: "Engineered a high-concurrency, zero-dependency TCP chat server using Go's native networking capabilities (net) to replicate core NetCat utility behaviors across a multi-client architecture. Leveraging a robust system of Go-routines, channels, and mutexes, the server safely manages concurrent state, broadcasts real-time messages simultaneously, and enforces a strict 10-client connection limit. The system features dynamic session tracking to instantly notify the group when users join, leave, or update usernames, while a central message history buffer ensures newly connected clients are seamlessly brought up to speed with past logs. Built with rigorous server-side validation and error handling, the platform guarantees 100% uptime, flawlessly formats cryptographic timestamps, and blocks empty data transmissions to keep the network efficient and crash-resilient.",
    additionalMedia: [
      
    ],
    code: "https://zone01normandie.org/git/oangeliq/net-cat",
    demo: "",
  }
]