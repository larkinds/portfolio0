import React from 'React';

const creativeSection = () => {
  return (
    <section>
      <div className="creativeSectionImg">
        <div style={{ padding: '56.25% 0 0 0', position: 'relative' }}>
          <iframe
            src="https://player.vimeo.com/video/128698619?byline=0&portrait=0"
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
            }}
            frameborder="0"
            allow="autoplay; fullscreen"
            allowfullscreen
          ></iframe>
        </div>
        <script src="https://player.vimeo.com/api/player.js"></script>
      </div>
      <div className="creativeSectionInfo">
        <h4>Creative Title</h4>
        <p>
          There is no female mind. The brain is not an organ of sex. As well
          speak of a female liver. -Charlotte Perkins Gilman Men are from Earth,
          women are from Earth. Deal with it. -George Carlin No woman can call
          herself free who does not control her own body. -Margaret Sanger
        </p>
      </div>
    </section>
  );
};

export default creativeSection;
