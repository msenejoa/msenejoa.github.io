import React from 'react';
import moment from 'moment';
import s from '../stylesheet.css';

const styles = {
  hStyle: {
    fontSize: 18,
    fontFamily: 'Open Sans',
    fontWeight: 'bold',
    color: '#636363'
  },
  date: {
    fontSize: 16,
    fontFamily: 'Open Sans',
    fontStyle: 'italic',
    color: '#A5A5A5'
  },
  body: {
    fontSize: 14,
    fontFamily: 'Open Sans',
    color: '#636363',
    fontWeight: '300',
  link: {
    fontSize: 14,
    fontFamily: 'Open Sans'
  }
  }
}





const WorkItem = props => {
    const getWorkDates = () => {
        const startdate = moment(props.workItemData.startDate).format('MMM, YYYY');
        let enddate = null;
        if (props.workItemData.endDate !== '') {
          enddate = moment(props.workItemData.endDate).format('MMM, YYYY');
        } else {
          enddate = 'Present';
        }

        return <span className='startdate'>{startdate} - {enddate}</span>
    }

    const getHighlights = props.workItemData.highlights.map(function(item, index) {
        return (<li key={index}>{item}</li>)
    });

    return (
        <div className="workItem">
          <a href={props.workItemData.website}><h3 style={styles.hStyle}>{props.workItemData.position}, <span>{props.workItemData.company}</span></h3></a>
          <p className="workDates" style = {styles.date}>{getWorkDates()}</p>
          <p style={styles.body}>{props.workItemData.summary}</p>
          <ul>{getHighlights}</ul>
        </div>
    )
};

export default WorkItem;







