import React from 'react';

const styles = {
  hStyle: {
    fontSize: 28,
    fontFamily: 'Open Sans',
    color: '#636363',
    //paddingTop: 35,
    paddingBottom: 12
  },
  body: {
    fontSize: 14,
    fontFamily: 'Open Sans',
    color: '#636363',
    fontWeight: '300',
  }
};

const About = props => {
    return (
      <section className="about">
        <h2 style={styles.hStyle} className="text-uppercase"> About</h2>
        <div style={styles.body}>{props.aboutData}</div>
      </section>
    );
};

export default About;
