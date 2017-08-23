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
    fontSize: 12,
    lineHeight: 2,
    fontFamily: 'Open Sans',
    color: '#ffffff',
    fontWeight: '300',
  }
};

const Skills = props => {
    const getSkills = props.skillsData[0].keywords.map(function(item, index) {
      return (<li key={index}><span style={styles.body} className="label label-success">{item}</span></li>)
    });

  	return (
  	  <section className="skills">
        <h2 style={styles.hStyle} className="text-uppercase"><i className="fa fa-lg fa-code"></i> Skills</h2>
        <ul style={styles.body} className="skills-list list-inline">{getSkills}</ul>
      </section>
  	)
};

export default Skills;
