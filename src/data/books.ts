import { Book, Category } from '@/types/book'

export const categories: Category[] = [
  {
    id: 'quran',
    name: 'Quran',
    description: 'Explore translations and tafsir of the Holy Quran',
    href: '/quran',
  },
  {
    id: 'hadith',
    name: 'Hadith',
    description: 'Access authentic hadith collections and explanations',
    href: '/hadith',
  },
  {
    id: 'fiqh',
    name: 'Fiqh',
    description: 'Study Islamic jurisprudence from various schools of thought',
    href: '/fiqh',
  },
  {
    id: 'aqeedah',
    name: 'Aqeedah',
    description: 'Learn about Islamic beliefs and creed',
    href: '/aqeedah',
  },
  {
    id: 'seerah',
    name: 'Seerah',
    description: 'Discover the life and teachings of Prophet Muhammad (peace be upon him)',
    href: '/seerah',
  },
  {
    id: 'arabic',
    name: 'Arabic',
    description: 'Master the Arabic language and grammar',
    href: '/arabic',
  },
  {
    id: 'history',
    name: 'History',
    description: 'Explore Islamic history and civilization',
    href: '/history',
  },
]

export const books: Book[] = [
  // Quran Books
  {
    id: 1,
    title: 'The Noble Quran',
    author: 'Dr. Muhammad Taqi-ud-Din Al-Hilali & Dr. Muhammad Muhsin Khan',
    description: 'A widely used English translation of the Quran with explanatory notes.',
    downloadUrl: '#',
    readUrl: '#',
    category: 'quran',
  },
  {
    id: 2,
    title: 'Tafsir Ibn Kathir',
    author: 'Imam Ibn Kathir',
    description: 'One of the most comprehensive and famous explanations of the Quran.',
    downloadUrl: '#',
    readUrl: '#',
    category: 'quran',
  },
  // Hadith Books
  {
    id: 3,
    title: 'Sahih Al-Bukhari',
    author: 'Imam Muhammad ibn Ismail Al-Bukhari',
    description: 'One of the six major hadith collections, considered the most authentic collection of hadith.',
    downloadUrl: '#',
    readUrl: '#',
    category: 'hadith',
  },
  {
    id: 4,
    title: 'Sahih Muslim',
    author: 'Imam Muslim ibn al-Hajjaj',
    description: 'One of the six major hadith collections, known for its authenticity and organization.',
    downloadUrl: '#',
    readUrl: '#',
    category: 'hadith',
  },
  // Fiqh Books
  {
    id: 5,
    title: 'Reliance of the Traveller',
    author: 'Ahmad ibn Naqib al-Misri',
    description: 'A classic manual of Islamic Sacred Law (Shafi\'i) with detailed explanations of rulings.',
    downloadUrl: '#',
    readUrl: '#',
    category: 'fiqh',
  },
  {
    id: 6,
    title: 'Al-Hidayah',
    author: 'Al-Marghinani',
    description: 'A comprehensive guide to Hanafi fiqh, covering various aspects of Islamic law.',
    downloadUrl: '#',
    readUrl: '#',
    category: 'fiqh',
  },
  // Aqeedah Books
  {
    id: 7,
    title: 'Kitab at-Tawheed',
    author: 'Muhammad ibn Abdul Wahhab',
    description: 'A comprehensive book on Islamic monotheism and the concept of Tawheed.',
    downloadUrl: '#',
    readUrl: '#',
    category: 'aqeedah',
  },
  {
    id: 8,
    title: 'Aqeedah Tahawiyyah',
    author: 'Imam Abu Ja\'far at-Tahawi',
    description: 'A classical text on Islamic creed and beliefs, widely accepted across different schools.',
    downloadUrl: '#',
    readUrl: '#',
    category: 'aqeedah',
  },
  // Seerah Books
  {
    id: 9,
    title: 'The Sealed Nectar',
    author: 'Safiur-Rahman Al-Mubarakpuri',
    description: 'Award-winning biography of Prophet Muhammad (peace be upon him), covering his life and mission.',
    downloadUrl: '#',
    readUrl: '#',
    category: 'seerah',
  },
  {
    id: 10,
    title: 'Muhammad: His Life Based on the Earliest Sources',
    author: 'Martin Lings',
    description: 'A well-researched biography of Prophet Muhammad (peace be upon him) based on early Islamic sources.',
    downloadUrl: '#',
    readUrl: '#',
    category: 'seerah',
  },
  // Arabic Books
  {
    id: 11,
    title: 'Arabic Grammar Made Easy',
    author: 'Dr. Abu Ameenah Bilal Philips',
    description: 'A comprehensive guide to Arabic grammar for English speakers.',
    downloadUrl: '#',
    readUrl: '#',
    category: 'arabic',
  },
  {
    id: 12,
    title: 'Medina Books',
    author: 'Dr. V. Abdur Rahim',
    description: 'A series of books for learning Arabic, widely used in Islamic universities.',
    downloadUrl: '#',
    readUrl: '#',
    category: 'arabic',
  },
  // History Books
  {
    id: 13,
    title: 'The History of Islam',
    author: 'Akbar Shah Najeebabadi',
    description: 'A comprehensive history of Islam from the time of Prophet Muhammad (peace be upon him) to the Ottoman Empire.',
    downloadUrl: '#',
    readUrl: '#',
    category: 'history',
  },
  {
    id: 14,
    title: 'The Caliphate of Banu Umayyah',
    author: 'Dr. Ali Muhammad As-Sallabi',
    description: 'A detailed account of the Umayyad Caliphate and its impact on Islamic civilization.',
    downloadUrl: '#',
    readUrl: '#',
    category: 'history',
  },
  {
    id: 15,
    title: 'Usool Al Thalaatha: The 3 Fundamental Principles',
    author: 'Shaykh Muhammad ibn Abdul Wahhab',
    description: 'A foundational text explaining the three fundamental principles of Islam.',
    downloadUrl: 'https://abdurrahman.org/wp-content/uploads/2014/08/the-three-fundamental-principles-shaykh-bin-abdul-wahab-al-ibaanah-com.pdf',
    readUrl: '#',
    category: 'aqeedah',
    level: 'beginner'
  },
  {
    id: 16,
    title: 'Al Qawaid Al Arba: The Four Fundamental Principles',
    author: 'Shaykh Muhammad ibn Abdul Wahhab',
    description: 'A concise explanation of the four fundamental principles regarding shirk.',
    downloadUrl: 'https://abdurrahman.org/wp-content/uploads/2014/08/explanation-of-the-rules-regarding-shirk-shaykh-ibn-abdul-wahab-al-ibaanah-com.pdf',
    readUrl: '#',
    category: 'aqeedah',
    level: 'beginner'
  },
  {
    id: 17,
    title: 'Nawaqaid Al Islam: The 10 Nullifiers of Islam',
    author: 'Shaykh Muhammad ibn Abdul Wahhab',
    description: 'An important text explaining the ten major nullifiers of Islam.',
    downloadUrl: 'https://www.kalamullah.com/Books/Explanation%20of%20the%20Nullifiers%20of%20Islam.pdf',
    readUrl: '#',
    category: 'aqeedah',
    level: 'beginner'
  },
  {
    id: 18,
    title: 'Kashf ush Shubuhat: Refuting Doubts',
    author: 'Shaykh Muhammad ibn Abdul Wahhab',
    description: 'A book addressing common doubts and misconceptions about Tawheed.',
    downloadUrl: 'https://islamthestudyguides.com/wp-content/uploads/2011/12/kashf-questions-and-answers.pdf',
    readUrl: '#',
    category: 'aqeedah',
    level: 'beginner'
  },
  {
    id: 19,
    title: 'Usool al Sittah: The 6 Fundamental Principles',
    author: 'Shaykh Muhammad ibn Abdul Wahhab',
    description: 'An explanation of the six fundamental principles of Islam.',
    downloadUrl: 'https://www.salafipublications.com/sps/downloads/pdf/SCL070001.pdf',
    readUrl: '#',
    category: 'aqeedah',
    level: 'beginner'
  },
  {
    id: 20,
    title: 'Al Aqeedah Al Wasitiyah: Principles of Islamic Creed',
    author: 'Shaykh ul-Islam Ibn Taymiyyah',
    description: 'A comprehensive text on Islamic creed and beliefs.',
    downloadUrl: 'https://www.madinahcollege.uk/wp-content/uploads/alaqeedah_alwasitiyah.pdf',
    readUrl: '#',
    category: 'aqeedah',
    level: 'intermediate'
  },
  {
    id: 21,
    title: 'Kitab At Tawhid: The Book of Monotheism',
    author: 'Shaykh Muhammad ibn Abdul Wahhab',
    description: 'A detailed explanation of Islamic monotheism.',
    downloadUrl: 'https://www.kalamullah.com/Books/Kitab%20at-Tawheed%20Explained.pdf',
    readUrl: '#',
    category: 'aqeedah',
    level: 'intermediate'
  },
  {
    id: 22,
    title: 'Usool as Sunnah: The Fundamental Principles of the Sunnah',
    author: 'Imam Ahmad ibn Hanbal',
    description: 'A foundational text on the principles of following the Sunnah.',
    downloadUrl: 'http://www.al-aqeedah.com/wp-content/uploads/2021/01/Usul-As-Sunnah.pdf',
    readUrl: '#',
    category: 'aqeedah',
    level: 'intermediate'
  },
  {
    id: 23,
    title: 'Ar Risalah At Tadmuriyyah: Towards Understanding Tadumiryyah',
    author: 'Shaykh ul-Islam Ibn Taymiyyah',
    description: 'A comprehensive text on Islamic beliefs and creed.',
    downloadUrl: 'https://www.emaanlibrary.com/wp-content/uploads/2022/01/Towards-Understanding-of-Tadmuriyyah-Exp.-by-Sh.-al-%E2%80%98Uthaymeen.pdf',
    readUrl: '#',
    category: 'aqeedah',
    level: 'intermediate'
  },
  {
    id: 24,
    title: 'Kitab Al Iman: The Book of Faith',
    author: 'Shaykh ul-Islam Ibn Taymiyyah',
    description: 'A detailed explanation of the concept of faith in Islam.',
    downloadUrl: 'https://www.muslim-library.com/dl/books/english_Kitab_Al_Iman.pdf',
    readUrl: '#',
    category: 'aqeedah',
    level: 'intermediate'
  }
] 