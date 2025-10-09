import styles from '@/styles/ContactCode.module.css';

const contactItems = [
  {
    social: 'website',
    link: 'ra9huvansh',
    href: 'https://nitinranganath.com',
  },
  {
    social: 'email',
    link: 'ra9huvansh@gmail.com',
    href: 'mailto:ra9huvansh@gmail.com',
  },
  {
    social: 'github',
    link: 'ra9huvansh',
    href: 'https://github.com/Ra9huvansh',
  },
  {
    social: 'linkedin',
    link: 'ra9huvansh',
    href: 'https://www.linkedin.com/in/raghuvansh-siddharth-98b5ab205/',
  },
  {
    social: 'twitter',
    link: 'Raghuvansh95',
    href: 'https://x.com/Raghuvansh95',
  },
  {
    social: 'telegram',
    link: 'dolandtrump92',
    href: 'https://t.me/dolandtrump92',
  },
  {
    social: 'peerlist',
    link: 'ra9huvansh',
    href: 'https://peerlist.io/ra9huvansh',
  },
];

const ContactCode = () => {
  return (
    <div className={styles.code}>
      <p className={styles.line}>
        <span className={styles.className}>.socials</span> &#123;
      </p>
      {contactItems.map((item, index) => (
        <p className={styles.line} key={index}>
          &nbsp;&nbsp;&nbsp;{item.social}:{' '}
          <a href={item.href} target="_blank" rel="noopener">
            {item.link}
          </a>
          ;
        </p>
      ))}
      <p className={styles.line}>&#125;</p>
    </div>
  );
};

export default ContactCode;
