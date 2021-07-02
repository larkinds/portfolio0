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
        Larkin is less online than having a personal website would lead you to believe. She gave up her last social network in the fall of 2020, and now experiences a lot less existential dread. Like, ok, the accounts still exist but none are on her phone and she goes months at a time without checking them. Yes, at their best social networks can build community and spread information in ways that can spark positive systemic change. The dark patterns and designed addictiveness are seriously strong though, so Larkin remains engaged through other means.
        <br></br>
        <br></br>
        Larkin believes in and prioritizes kindness. She surrounds herself with people who give a damn. She's a voracious reader and eternal student whose favorite question is a tie between ‘why’ and ‘how'. She has been called a ‘human yelp’ and is known for having spot-on recommendations for pretty much anything one might need. Unsurprisingly for a Brooklynite who was raised in the Bay Area, Larkin lives in an intentional community and makes her own kombucha. 
        <br></br>
        <br></br>
        After a brief stint of eating haggis and (successfully) willing herself to like whisky at the University of St. Andrews, Larkin transfered to Sarah Lawrence where she got the most liberal arts-y of educations. She then spent a few years bouncing around the film industry and feeling unfulfilled before finding out that solving puzzles with code brings her great satisfaction. That being said, Larkin believes that <a className="about-link" href="https://workwontloveyouback.org/" target="_blank">work won’t love you back</a> and the fact that she likes what she does is just a lucky coincidence and a solid example of a dialectic.
        </p>
        <p className="aboutp"></p>
      </div>
    </Layout>
  );
};

export default AboutPage;
