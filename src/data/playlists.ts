import { Book } from '@/types/book'

export interface Playlist {
  id: number
  bookId: number
  title: string
  author: string
  language: string
  url: string
  description: string
}

export const playlists: Playlist[] = [
  // Usool Al Thalaatha: The 3 Fundamental Principles
  {
    id: 1,
    bookId: 15,
    title: "Explanation of the Three Fundamental Principles",
    author: "Ustadh Abdul Rahman Hassan",
    language: "English",
    url: "https://www.youtube.com/playlist?list=PL2dRQaGGWZOAW9VrMN7HpHSYykChUZRsy",
    description: "Detailed explanation of Usool Al Thalaatha by Ustadh Abdul Rahman Hassan."
  },
  {
    id: 2,
    bookId: 15,
    title: "Explanation of the Three Fundamental Principles",
    author: "Ustadh Abdul Aziz al Haqqan",
    language: "English",
    url: "https://www.youtube.com/playlist?list=PLv6TZluNhDk4yQZur73izq9xCMPv4TcTt",
    description: "Comprehensive explanation of the Three Fundamental Principles by Ustadh Abdul Aziz al Haqqan."
  },
  {
    id: 3,
    bookId: 15,
    title: "Explanation of the Three Fundamental Principles",
    author: "Shaykh Haytham Sarhan",
    language: "English",
    url: "https://www.youtube.com/playlist?list=PL83iCjPi2Rol--OxoiJTvWA-eKhaPI163",
    description: "Detailed explanation of Usool Al Thalaatha by Shaykh Haytham Sarhan."
  },
  
  // Al Qawaid Al Arba: The Four Fundamental Principles
  {
    id: 4,
    bookId: 16,
    title: "The Four Principles Regarding Shirk",
    author: "Ustadh Abdul Hakeem Mitchell",
    language: "English",
    url: "https://learnaboutislam.co.uk/2022/09/the-four-principles-regarding-shirk-abdul-hakeem-mitchell/",
    description: "Explanation of Al Qawaid Al Arba by Ustadh Abdul Hakeem Mitchell."
  },
  {
    id: 5,
    bookId: 16,
    title: "The Four Fundamental Principles (Part 1)",
    author: "Ustadh Abdul Rahman Hassan",
    language: "English",
    url: "https://www.youtube.com/watch?v=sZTdp9AkBSQ",
    description: "First part of the explanation of the Four Fundamental Principles by Ustadh Abdul Rahman Hassan."
  },
  {
    id: 6,
    bookId: 16,
    title: "The Four Fundamental Principles (Part 2)",
    author: "Ustadh Abdul Rahman Hassan",
    language: "English",
    url: "https://www.youtube.com/watch?v=d0ErP8Pl8fM",
    description: "Second part of the explanation of the Four Fundamental Principles by Ustadh Abdul Rahman Hassan."
  },
  {
    id: 7,
    bookId: 16,
    title: "The Four Fundamental Principles",
    author: "Ustadh Muhammad Huzaifah",
    language: "English",
    url: "https://www.youtube.com/playlist?list=PLKDPbiyMPQ0IpKiLy3PwEBXWupmZgz5wt",
    description: "Comprehensive explanation of the Four Fundamental Principles by Ustadh Muhammad Huzaifah."
  },
  
  // Nawaqaid Al Islam: The 10 Nullifiers of Islam
  {
    id: 8,
    bookId: 17,
    title: "The Ten Nullifiers of Islam",
    author: "Shaykh Saeed Hassan",
    language: "English",
    url: "https://www.youtube.com/playlist?list=PLCxZUKhToxr8ymyW8ew5idwOYue7tat8w",
    description: "Explanation of the Ten Nullifiers of Islam by Shaykh Saeed Hassan."
  },
  {
    id: 9,
    bookId: 17,
    title: "The Ten Nullifiers of Islam",
    author: "Ustadh Abdul Rahman Hassan",
    language: "English",
    url: "https://www.youtube.com/playlist?list=PL2dRQaGGWZOBckt6JI7Vb2UesHtpAlOqQ",
    description: "Comprehensive explanation of the Ten Nullifiers of Islam by Ustadh Abdul Rahman Hassan."
  },
  
  // Kashf ush Shubuhat: Refuting Doubts
  {
    id: 10,
    bookId: 18,
    title: "Kashf ush-Shubuhat (Clearing the Doubts)",
    author: "Ustadh Abdul Aziz Al Haqqan",
    language: "English",
    url: "https://www.youtube.com/playlist?list=PLv6TZluNhDk7BAHyC4_rFT_7Pk_bYZfRh",
    description: "Explanation of Kashf ush Shubuhat by Ustadh Abdul Aziz Al Haqqan."
  },
  {
    id: 11,
    bookId: 18,
    title: "Kashf ush-Shubuhat (Clearing the Doubts)",
    author: "Shaykh Haytham Sarhan",
    language: "English",
    url: "https://www.youtube.com/playlist?list=PL83iCjPi2RokIRRY9kJVE9ji_bxaDiCK7",
    description: "Detailed explanation of Kashf ush Shubuhat by Shaykh Haytham Sarhan."
  },
  {
    id: 12,
    bookId: 18,
    title: "Kashf ush-Shubuhat (Clearing the Doubts)",
    author: "Ustadh Tim Humble",
    language: "English",
    url: "https://www.youtube.com/playlist?list=PL_lKQa7W5K-yH5U8m2lrDq0QoemmgKzGx",
    description: "Comprehensive explanation of Kashf ush Shubuhat by Ustadh Tim Humble."
  },
  
  // Usool al Sittah: The 6 Fundamental Principles
  {
    id: 13,
    bookId: 19,
    title: "The Six Fundamental Principles",
    author: "Shaykh Abdul-Hamid Al Husari",
    language: "English",
    url: "https://www.youtube.com/playlist?list=PL4nWiA0P5vjIxtxc-uur_aFBeSs0teXdw",
    description: "Explanation of Usool al Sittah by Shaykh Abdul-Hamid Al Husari."
  },
  {
    id: 14,
    bookId: 19,
    title: "The Six Fundamental Principles",
    author: "Ustadh Abdul Rahman Hassan",
    language: "English",
    url: "https://www.youtube.com/playlist?list=PL2dRQaGGWZOBQtm-k0Xf8US_kZzflroA3",
    description: "Comprehensive explanation of the Six Fundamental Principles by Ustadh Abdul Rahman Hassan."
  },
  
  // Al Aqeedah Al Wasitiyah: Principles of Islamic Creed
  {
    id: 15,
    bookId: 20,
    title: "Al-Aqeedah Al-Wasitiyyah",
    author: "Ustadh Abu Mussab Wajidi Akkari",
    language: "English",
    url: "https://www.youtube.com/playlist?list=PLxQ71pF_GAtHJYlz6c2VsmbKdDiBVuEVQ",
    description: "Detailed explanation of Al Aqeedah Al Wasitiyah by Ustadh Abu Mussab Wajidi Akkari."
  },
  {
    id: 16,
    bookId: 20,
    title: "Al-Aqeedah Al-Wasitiyyah",
    author: "Ustadh Tim Humble",
    language: "English",
    url: "https://www.youtube.com/playlist?list=PLPucCcCvpW8F8mXB3QpFdnAVF4A-7GO4i",
    description: "Comprehensive explanation of Al Aqeedah Al Wasitiyah by Ustadh Tim Humble."
  },
  {
    id: 17,
    bookId: 20,
    title: "Al-Aqeedah Al-Wasitiyyah",
    author: "Ustadh Abdul Rahman Hassan",
    language: "English",
    url: "https://www.youtube.com/playlist?list=PL2dRQaGGWZOD4pSrfWRf9oYGiDmHrcWjv",
    description: "Detailed explanation of Al Aqeedah Al Wasitiyah by Ustadh Abdul Rahman Hassan."
  },
  
  // Kitab At Tawhid: The Book of Monotheism
  {
    id: 18,
    bookId: 21,
    title: "Kitab at-Tawheed",
    author: "Ustadh Abdul Aziz Al Haqqan",
    language: "English",
    url: "https://www.youtube.com/playlist?list=PLv6TZluNhDk5UsApUoVEdtQHIlMxu257A",
    description: "Detailed explanation of Kitab At Tawhid by Ustadh Abdul Aziz Al Haqqan."
  },
  {
    id: 19,
    bookId: 21,
    title: "Kitab at-Tawheed",
    author: "Shaykh Haytham Sarhan",
    language: "English",
    url: "https://www.youtube.com/playlist?list=PLDKR06sU0D8VYYAA6UFAYsxkwSy95dgM7",
    description: "Comprehensive explanation of Kitab At Tawhid by Shaykh Haytham Sarhan."
  },
  
  // Usool as Sunnah: The Fundamental Principles of the Sunnah
  {
    id: 20,
    bookId: 22,
    title: "Usool as-Sunnah",
    author: "Ustadh Abdul Rahman Hassan",
    language: "English",
    url: "https://www.youtube.com/playlist?list=PLMew-WVin_Lypz2v4gAU_L6x_lF1N7Ekt",
    description: "Detailed explanation of Usool as Sunnah by Ustadh Abdul Rahman Hassan."
  },
  {
    id: 21,
    bookId: 22,
    title: "Usool as-Sunnah",
    author: "Ustadh Abu Taymiyyah",
    language: "English",
    url: "https://www.youtube.com/watch?v=UGNY5iFot5s",
    description: "Comprehensive explanation of Usool as Sunnah by Ustadh Abu Taymiyyah."
  },
  
  // Ar Risalah At Tadmuriyyah: Towards Understanding Tadumiryyah
  {
    id: 22,
    bookId: 23,
    title: "Ar-Risalah At-Tadmuriyyah",
    author: "Various Scholars",
    language: "English",
    url: "#",
    description: "Explanation of Ar Risalah At Tadmuriyyah by qualified scholars. More playlists coming soon."
  },
  
  // Kitab Al Iman: The Book of Faith
  {
    id: 23,
    bookId: 24,
    title: "Kitab Al-Iman",
    author: "Various Scholars",
    language: "English",
    url: "#",
    description: "Explanation of Kitab Al Iman by qualified scholars. More playlists coming soon."
  }
]

// Helper function to get playlists for a specific book
export const getPlaylistsByBookId = (bookId: number): Playlist[] => {
  return playlists.filter(playlist => playlist.bookId === bookId)
}