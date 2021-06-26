import React from 'react';
import Layout from '../components/layout';
import { StaticImage } from 'gatsby-plugin-image';

const AboutPage = () => {
  return (
    <Layout>
      <div className="about">
        <div className="about-img-div">
        <StaticImage
          className="about-img"
          src="../images/larkinA.jpg"
          aspectRatio={3/4}
          alt="Photo of Larkin"
        />
        </div>
  
        <p className="aboutp">
          Larkin is a queer cis woman who has lived in Brooklyn since 2016.
          <br></br>
          <br></br>
          No woman can call herself free who does not control her own body.
          -Margaret Sanger I cannot understand anti-abortion arguments that
          centre on the sanctity of life. As a species we’ve fairly
          comprehensively demonstrated that we don’t believe in the sanctity of
          life. The shrugging acceptance of war, famine, epidemic, pain and
          life-long poverty shows us that, whatever we tell ourselves, we’ve
          made only the most feeble of efforts to really treat human life as
          sacred. -Caitlin Moran
        </p>
        <p className="aboutp"></p>
      </div>
    </Layout>
  );
};

export default AboutPage;
