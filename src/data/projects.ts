export interface Project {
  slug: string;
  name: string;
  type: string;
  description: string;
  tech: string[];
  github?: string;
  demo?: string;
  private?: boolean;
}

export const projects: Project[] = [
  {
    slug: 'stall-stars',
    name: 'Stall Stars',
    type: 'mobile app',
    description:
      'iOS and Android app for finding, rating, and reviewing public restrooms. Features an interactive map, amenity filters, OTP authentication, and a full review system with cleanliness, entry, and features scoring.',
    tech: ['TypeScript', 'Go', 'React Native', 'Expo', 'PostgreSQL', 'Neon', 'Render'],
    private: true,
  },
  {
    slug: 'unified',
    name: 'Unified',
    type: 'mobile app',
    description:
      'iOS and Android app allowing community members to report local incidents to HOA and city officials. Reduced area crime and improved response times since deployment.',
    tech: ['React Native', 'Expo', 'JavaScript', 'PostgreSQL', 'Supabase'],
    private: true,
  },
  {
    slug: 'speakeasy',
    name: 'Speakeasy',
    type: 'mobile app',
    description:
      'Audio-only messaging app for iOS and Android with real-time vocal effects — pitch bending, reverse, and more — to bring personality back to conversations.',
    tech: ['TypeScript', 'Go', 'React Native', 'Expo', 'Gin', 'PostgreSQL', 'AWS'],
    private: true,
  },
  {
    slug: 'hash-cli',
    name: 'Hash CLI',
    type: 'cli tool',
    description:
      'CLI tool for symmetric file encryption and decryption with passphrase-based MAC authentication, KMAC hashing, and elliptic curve operations.',
    tech: ['Java'],
    github: 'https://github.com/benjuh/cryptography-project',
  },
  {
    slug: 'stewordle',
    name: 'Stewordle',
    type: 'web game',
    description:
      'Unlimited Wordle clone — same 5-letter word guessing mechanics, no daily wait. Play as many rounds as you want.',
    tech: ['JavaScript', 'HTML', 'CSS'],
    demo: 'https://www.stewordle.com',
    private: true,
  },
  {
    slug: 'stew',
    name: 'Stew',
    type: 'cli tool',
    description:
      'Go CLI tool for creating, storing, and applying project templates — eliminating boilerplate setup for any language or framework.',
    tech: ['Go', 'Cobra', 'Viper'],
    github: 'https://github.com/benjuh/stew',
  },
];
