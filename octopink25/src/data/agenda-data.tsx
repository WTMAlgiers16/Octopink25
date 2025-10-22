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
      { time: "12:00 PM", title: "STANDS DAY & OCTOPINK ACTIVITIES" },
      { time: "   ~    ", title: "SELLING PINK BREAST CANCER BRACELETS" },
      { time: "   ~    ", title: "AWARENESS PRESENTATION ON BREAST CANCER"},
      { time: "   ~    ", title: "APPLIED AI ON BREAST CANCER DETECTION"},
      { time: "14:00 PM", title: "WRITING ENCOURAGING MESSAGES TO BRAVE WOMEN"},
    ],
  },
  {
    day: "25",
    month: "OCT - ONLINE",
    events: [
      { time: "09:30 PM", title: "OFFICIAL INTRODUCTION" },
      { time: "10:00 PM", title: "AI APPLIED IN THE FIELD OF MEDICINE CONFERENCE" },
      { time: "04:20 PM", title: "WORKSHOP: AI & HEALTH" },
    ],
  },
]