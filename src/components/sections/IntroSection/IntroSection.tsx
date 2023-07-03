import React from 'react';

import './IntroSection.module.scss';
import { BodyText } from '../../typography/BodyText';
import { Heading } from '../../typography/Heading';

type Props = {};

const IntroSection: React.FC<Props> = (props) => {
  return (
    <section className="is-container py-4">
      <Heading variant="md"></Heading>
      <BodyText className="md:w-2/3">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
        provident quisquam, optio asperiores voluptates, perspiciatis similique
        eos laudantium quidem est rerum quae ratione consequuntur a dolorum
        corrupti ab? Delectus, officia.
      </BodyText>
    </section>
  );
};

export default IntroSection;
