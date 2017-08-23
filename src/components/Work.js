import React from 'react';
import WorkItem from './WorkItem';

const styles = {
  hStyle: {
    fontSize: 28,
    fontFamily: 'Open Sans',
    color: '#636363',
    paddingTop: 35
  }
};


const Work = props => {
    const getWorkExperience = () => {
        const workItems = [];
        props.workData.forEach((val, index) => {
          workItems.push(<WorkItem key={index} workItemData={val}/>);
        })
        return workItems;
    }

    return (
      <section className="work">
        <h2 style={styles.hStyle} className="text-uppercase">Work experience</h2>
        {getWorkExperience()}
      </section>
    );
};

export default Work;
