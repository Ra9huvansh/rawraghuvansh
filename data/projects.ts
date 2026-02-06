export interface Project {
  title: string;
  description: string;
  logo: string;
  link: string;
  slug: string;
}

export const projects: Project[] = [
  {
    title: 'Merix Holdings',
    description:
      'A decentralized stablecoin anchored to 1$ and exogenously overcollaterized in nature.',
    logo: '/logos/driwwwle.svg',
    link: 'https://github.com/Ra9huvansh/Merix-Holdings',
    slug: 'ravecoin',
  },
  {
    title: 'Cross Chain Rebase Token',
    description:
      "A decentralized token with an elastic supply mechanism that automatically adjusts across multiple blockchains using Chainlink's CCIP.",
    logo: '/logos/vsc.svg',
    link: 'https://github.com/Ra9huvansh/cross-chain-RebaseToken',
    slug: 'cross-chain-rebasetoken',
  },
  {
    title: 'Trainintendo',
    description:
      'Object oriented backend-heavy application of a train booking system with features like signup/login, search trains, book train, cancel ticket, etc.',
    logo: '/logos/subtrackt.svg',
    link: 'https://github.com/Ra9huvansh/IRCTC-Train-Booking-System',
    slug: 'train-booking-system',
  },
  {
    title: 'ThreadThiel',
    description:
      "Single-threaded and Multi-threaded web server with full-fledged testing using Apache's JMeter.",
    logo: '/logos/coolify.svg',
    link: 'https://github.com/Ra9huvansh/Multithreaded-Web-Server',
    slug: 'multithreaded-web-server',
  },
];
