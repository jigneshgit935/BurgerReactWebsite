import React from 'react';
import { Link } from 'react-router-dom';
import { RiFindReplaceLine } from 'react-icons/ri';
import me from '../../assets/jinuAbout3.jpg';

const About = () => {
  return (
    <section className="about">
      <main>
        <h1>About Us</h1>

        <article>
          <h4>Your Burger Webite</h4>
          <p>
            We are here to make your taste more good, with this awesome burger
          </p>
          <p>
            Explore the various type of food and burger. Click below to see the
            menu
          </p>

          <Link to="/">
            <RiFindReplaceLine />
          </Link>
        </article>

        <div>
          <h2>Founder</h2>
          <article>
            <div>
              <img src={me} alt="Founder" />
              <h3>Jignesh Sharma</h3>
            </div>

            <p>
              I am Jignesh Sharma, the founder of Your Burger. Affiliated to
              Good Taste ...
            </p>
          </article>
        </div>
      </main>
    </section>
  );
};

export default About;
