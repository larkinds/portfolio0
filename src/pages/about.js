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
          alt="A photo of Larkin Smith - a short redheaded lady wearing a half smile and some big funky earings"
        />
        </div>
  
        <p className="about-p">
        Larkin contains multitudes (although this paragraph is mostly about software engineering). She's a fullstack engineer passionate about making websites fun, elegant, and accessible. With a previous career in film, Larkin is particularly well equiped to translate creative requirements into pixels. After learning a Javascript stack at coding bootcamp in 2019, she took a break from the working world to deal with a whole menty b situation and then re-taught herself to code with Java. Larkin is most proud of bringing herself back from that low point, and gave a well-received talk 'You're Going to Be Disabled Soon, and other fun stuff' at Lesbians Who Tech in 2022 which used that experience as a jumping off point to advocate for disability rights. Larkin is currently a solo developer on an Angular/Typescript/Java project, and an individual contributor to a React/Javascript/Java project.
        <br></br>
        <br></br>
        Larkin believes in and prioritizes kindness. She surrounds herself with people who give a damn. She's a voracious reader and lifelong student whose favorite question is a tie between ‘why’ and ‘how'. She has been called a ‘human yelp’ and is known for having spot-on recommendations for pretty much anything one might need, from dimsum in San Francisco to the warmest drysuit for filming in the waters of the Ashokan Reserve during winter. All Black Lives Matter. Unsurprisingly for a Brooklynite who was raised in the Bay Area, Larkin lives in an intentional community and makes her own shrubs. 
        <br></br>
        <br></br>
        After a brief stint of eating haggis and (successfully) willing herself to like whisky at the University of St. Andrews, Larkin transfered to Sarah Lawrence where she got the most liberal arts-y of educations. She then spent a few years bouncing around the film industry before finding out that solving puzzles with code brings excellent health insurance AND personal satisfaction. That being said, Larkin believes that <a className="about-link" href="https://workwontloveyouback.org/" target="_blank" rel="noreferrer">work won’t love you back</a> and the fact that she likes what she does is just a lucky coincidence and a solid example of a dialectic.
        </p>
        <p className="about-p"></p>
      </div>
    </Layout>
  );
};

export default AboutPage;
