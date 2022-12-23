import React from 'react';
import { motion } from 'framer-motion';
import me from '../../assets/jinuAbout3.jpg';
const Founder = () => {
  const options = {
    initial: {
      x: '-100%',
      opacity: 0,
    },
    whileInView: {
      x: 0,
      opacity: 1,
    },
  };

  return (
    <section className="founder">
      <motion.div {...options}>
        <img src={me} alt="Founder" height={200} width={200} />
        <h3>Jignesh Sharma</h3>
        <p>
          Hey, Everyone I am Jignesh Sharma, the founder Your Big Burger .{' '}
          <br />
          Our aim is to make your diet fullfill.
        </p>
      </motion.div>
    </section>
  );
};

export default Founder;
