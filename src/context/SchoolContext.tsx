import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface Feedback {
  name: string;
  message: string;
  date: string;
  approved: boolean;
}

interface SchoolEvent {
  id: string;
  title: string;
  date: string;
  category: 'Holiday' | 'Academic' | 'Extracurricular';
  description: string;
}

interface SchoolData {
  name: string;
  motto: string;
  location: string;
  logo: string;
  images: {
    hero: string;
    daycare: string;
    nursery: string;
    primary: string;
    playground: string;
  };
  contacts: {
    director: { name: string; phone: string };
    headTeacher: { name: string; phone: string };
    email: string;
  };
  fees: {
    admission: string;
    daycare: { age: string; price: string; id: string }[];
    nursery: string;
    primary: string;
  };
  feedbacks: Feedback[];
  events: SchoolEvent[];
}

const schoolData: SchoolData = {
  name: "Bethelstars Pre & Primary School",
  motto: "Spirit, Brain & Body Nourishment",
  location: "Hai Weruweru",
  logo: "https://placehold.co/400x400/0f172a/white?text=BethelStars",
  images: {
    hero: "https://images.unsplash.com/photo-1577891729319-f48710d2999e?auto=format&fit=crop&q=80&w=2000",
    daycare: "https://images.unsplash.com/photo-1606092195730-5d7b9af1efc5?auto=format&fit=crop&q=80&w=1000",
    nursery: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&q=80&w=1000",
    primary: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80&w=1000",
    playground: "https://images.unsplash.com/photo-1566367576585-051277d52997?auto=format&fit=crop&q=80&w=1000",
  },
  contacts: {
    director: { name: "Esther Clement", phone: "0710700123" },
    headTeacher: { name: "Thomas Makenga", phone: "0750392528" },
    email: "bethelstars57@gmail.com",
  },
  fees: {
    admission: "10,000",
    daycare: [
      { id: "daycare_1", age: "6m - 11mo", price: "100,000" },
      { id: "daycare_2", age: "1yr - 2yr 11mo", price: "80,000" },
    ],
    nursery: "720,000",
    primary: "1,006,000",
  },
  feedbacks: [
    { name: "Mrs. J. Kamau", message: "My son has improved remarkably in his social skills. The teachers are so caring!", date: "2024-04-12", approved: true },
    { name: "Mr. Daudi", message: "Best school in Hai. The NECTA results speak for themselves.", date: "2024-03-25", approved: true },
  ],
  events: [
    { id: '1', title: 'Start of Term 1', date: '2024-01-08', category: 'Academic', description: 'Students return to school for the first term.' },
    { id: '2', title: 'Parents Meeting', date: '2024-02-15', category: 'Extracurricular', description: 'Discussion of school development and student progress.' },
    { id: '3', title: 'Mid-term Break', date: '2024-03-20', category: 'Holiday', description: 'One week break for all students.' },
    { id: '4', title: 'Easter Monday', date: '2024-04-01', category: 'Holiday', description: 'Public holiday.' },
    { id: '5', title: 'Sports Day', date: '2024-05-10', category: 'Extracurricular', description: 'Annual inter-house sports competition.' },
    { id: '6', title: 'End Of Term Exams', date: '2024-06-15', category: 'Academic', description: 'Terminal examinations for all classes.' },
    { id: '7', title: 'Nyerere Day', date: '2024-10-14', category: 'Holiday', description: 'Honoring the first president of Tanzania.' },
    { id: '8', title: 'National Examinations', date: '2024-11-20', category: 'Academic', description: 'Standard 4 and 7 NECTA examinations.' },
    { id: '9', title: 'Graduation Ceremony', date: '2024-12-05', category: 'Academic', description: 'Celebrating the success of our nursery and primary graduates.' },
  ]
};

const SchoolContext = createContext<SchoolData>(schoolData);

export const useSchool = () => useContext(SchoolContext);

export const SchoolProvider = ({ children }: { children: ReactNode }) => {
  return (
    <SchoolContext.Provider value={schoolData}>
      {children}
    </SchoolContext.Provider>
  );
};
