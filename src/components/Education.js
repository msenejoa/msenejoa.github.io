import React from 'react';
import moment from 'moment';
import FontAwesome from 'react-fontawesome';

const styles = {
  hStyle: {
    fontSize: 20,
    fontFamily: 'Open Sans',
    color: '#636363',
    //paddingTop: 35,
    //paddingBottom: 12
  },
  title: {
    fontSize: 28,
    fontFamily: 'Open Sans',
    color: '#636363',
    paddingTop: 25,
    //paddingBottom: 12
  },
  body: {
    fontSize: 14,
    fontFamily: 'Open Sans',
    color: '#636363',
    fontWeight: '300',
  },
  date: {
    fontSize: 16,
    fontFamily: 'Open Sans',
    fontStyle: 'italic',
    color: '#A5A5A5'
  },
  school: {
    fontSize: 16,
    fontFamily: 'Open Sans',
    //fontStyle: 'italic',
    color: '#000000'
  }
};


const Education = props => {
    const getEducation = props.educationData.map(function(item, index) {
  		const startdate = moment(item.startDate).format('MMM, YYYY');
  		const enddate = moment(item.endDate).format('MMM, YYYY');
  		return (
          <div key={index}>
            <h3 style={styles.hStyle}>{item.studyType} {item.area}</h3>
  				  <h4 style={styles.school}>{item.institution}</h4>
  				  <p style={styles.date}>Studied: {startdate} - {enddate}</p>
  				</div>
        )
  	});

  	return (
  	  <section className="education">
        <h2 style={styles.title} className="text-uppercase"> Education</h2>
        {getEducation}
      </section>
  	)
};

export default Education;
