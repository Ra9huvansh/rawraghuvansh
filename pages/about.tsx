import styles from '@/styles/AboutPage.module.css';

const AboutPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Raghuvansh Rastogi</h1>
        <div className={styles.subtitle}>Smart Contract Developer</div>

        <div className={styles.aboutContent}>
          <section className={styles.section}>
            <p className={styles.paragraph}>
              Hey! I&apos;m a core backend engineer from Delhi, India. I primarily
              work with Spring Boot and EVM-compatible smart contracts.
            </p>
            <p className={styles.paragraph}>
              I&apos;m focused on smart contract development with Foundry, but
              you&apos;ll also find me working with Spring Boot, Microservices and Docker
              while building the backend for my personal projects.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Experience</h2>
            <p className={styles.paragraph}>
            Currently enhancing my smart contract infrastructure and implementing decentralized workflows as a Smart Contract Developer, collaborating with a lean team of front-end engineers to build a next-gent DEX-Aggregator.
            </p>
            <p className={styles.paragraph}>
            Meanwhile, I build and manage backend systems with Java and Spring Boot, leveraging microservices architecture and performant, reliable APIs.
            </p>
          </section>

          <section className={styles.section}>
  <h2 className={styles.sectionTitle}>Tech Stack & Skills</h2>
  <p className={styles.paragraph}>
    I actively work with React, Next.js, TypeScript, Java, Spring Boot, Microservices Architecture, Docker, Solidity, Foundry, Node.js, Express, and MongoDB.
  </p>
</section>


          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Beyond Code</h2>
            <p className={styles.paragraph}>
              Aside from programming and writing, I like to read a good
              dystopian novel, listen to calm piano music or just laze around.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export async function getStaticProps() {
  return {
    props: { title: 'About' },
  };
}

export default AboutPage;
