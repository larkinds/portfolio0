import React from 'react';
import Layout from '../components/layout';
import Img from 'gatsby-image';

const AboutPage = ({ data }) => {
  return (
    <Layout>
      <div className="about">
        <Img
          className="about-img"
          fluid={data.file.childImageSharp.fluid}
          alt="Larkin"
        />
        <p className="aboutp">
          A woman without a man is like a fish without a bicycle. -Gloria
          Steinem I only know that people call me a feminist whenever I express
          sentiments that differentiate me from a doormat. -Rebecca West
          Feminism is the radical notion that women are human beings. -Cheris
          Kramarae There is no female mind. The brain is not an organ of sex. As
          well speak of a female liver. -Charlotte Perkins Gilman Men are from
          Earth, women are from Earth. Deal with it. -George Carlin
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

export const data = graphql`
  query About {
    file(relativePath: { eq: "bronzeCardBackground.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;

export default AboutPage;
