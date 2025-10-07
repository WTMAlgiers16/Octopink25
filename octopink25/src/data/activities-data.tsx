// data/activities-data.ts

export interface ActivityPoint {
  subtitle: string;
  content: string;
}

export interface Activity {
  image: string;
  title: string;
  points: ActivityPoint[];
}

export const activities: Activity[] = [
  {
    image: '/images/activities/activity1.jpg',
    title: 'Conferences & Testimonials',
    points: [
      {
        subtitle: 'Interventions by health specialists',
        content: '(doctors, psychologists)',
      },
      {
        subtitle: 'Inspiring testimonials from survivors and patients',
        content: '',
      },
      {
        subtitle: 'Conference:',
        content: '"Latest technologies for cancer detection"',
      },
      {
        subtitle: 'Interactive Q&A session',
        content: '',
      },
      {
        subtitle:
          'Mini round-table with startups and researchers on the impact of tech in prevention and diagnosis',
        content: '',
      },
    ],
  },
  {
    image: '/images/activities/activity3.jpg',
    title: 'Practical Workshops',
    points: [
      {
        subtitle: 'Awareness workshop:',
        content: 'explanation of self-examination techniques',
      },
      {
        subtitle: 'Tech & Health workshop led by School of AI:',
        content:
          'discovering technological innovations in prevention and diagnosis',
      },
    ],
  },
  {
    image: '/images/activities/activity2.jpg',
    title: 'Creative & Solidarity Activities',
    points: [
      {
        subtitle: 'Wall of hope messages:',
        content:
          'Each participant writes a word of support, with dedicated hashtag for social media',
      },
      {
        subtitle:
          'Artistic workshop (drawing, painting, calligraphy) around the theme "Hope and Life"',
        content: '',
      },
      {
        subtitle: 'Pink ribbon stand:',
        content: 'ribbon customization with micro-donation',
      },
      {
        subtitle:
          'Collective video capsule with support messages to extend impact on social media',
        content: '',
      },
    ],
  },
];
