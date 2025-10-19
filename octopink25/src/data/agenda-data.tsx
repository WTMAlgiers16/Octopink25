export interface AgendaItem {
  time: string
  title: string
}

export interface AgendaDay {
  day: string
  month: string
  events: AgendaItem[]
}

export const agendaData: AgendaDay[] = [
  {
    day: "21",
    month: "OCT",
    events: [
      { time: "12:00 PM to 14PM", title: "STANDS DAY & OCTOPINK ACTIVITIES" },
    ],
  },
  {
    day: "25",
    month: "OCT",
    events: [
      { time: "09:00 PM", title: "WELCOME & CHECK-IN" },
      { time: "09:30 PM", title: "OFFICIAL INTRODUCTION" },
      { time: "10:00 PM", title: "MEDICAL CONFERENCES" },
      { time: "11:30 PM", title: "COFFEE BREAK & NETWORKING" },
      { time: "12:15 PM", title: "CROSS PANEL HEALTH & TECH" },
      { time: "02:00 PM", title: "BREAK" },
      { time: "02:20 PM", title: "WORKSHOP: AI & HEALTH" },
    ],
  },
]