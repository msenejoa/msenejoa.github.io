import React from 'react';

const styles = {
  hStyle: {
    fontSize: 28,
    fontFamily: 'Open Sans',
    color: '#000000',
    //paddingTop: 35,
    //paddingBottom: 12
  },
  picture: {
    paddingTop: 20
  },
  body: {
    fontSize: 18,
    fontFamily: 'Open Sans',
    color: '#868686',
    fontWeight: '300',
  },
  location: {
    fontSize: 16,
    fontFamily: 'Open Sans',
    color: '#868686',
    fontWeight: '300',
  },
  bodyInfo: {
    fontSize: 14,
    fontFamily: 'Open Sans',
    color: '#868686',
    fontWeight: '300',
  },
};

const Profile = props => {
    const profileObj = props.profileData;
    return  <div>
                  <div style={styles.picture} className="profileImg"><img role="presentation" className="img-circle center-block" src={profileObj.picture} width="200" /></div>
                  <h1 style={styles.hStyle} className="text-center">{profileObj.name}</h1>
                  <h2 style={styles.body} className="text-center">{profileObj.label}</h2>
                  <div className="divider"></div>
                  <ul className="list-unstyled contact-links text-center">
                    <li style={styles.location}>{profileObj.location.city},{profileObj.location.countryCode}</li>
                    <li><a style={styles.location} href={`mailto:${profileObj.email}`}>{profileObj.email}</a></li>
                  </ul>
                  <div className="divider"></div>
                  <ul className="profileLinks list-inline text-center">
                    <li><a className="fa fa-linkedin-square fa-2x" href={'https://www.linkedin.com/in/senejoa/'}></a></li>
                    <li><a className="fa fa-instagram fa-2x" href={'https://instagram.com/mikeatworld'}></a></li>
                    <li><a className="fa fa-github fa-2x" href={'https://github.com/'+profileObj.profiles[1].username}></a></li>
                  </ul>
                  <div className="divider"></div>
                  <p style ={styles.bodyInfo}>This site was built with <a href="https://facebook.github.io/react/">React</a> components and a <a href="https://jsonresume.org/schema/">JSON Resume Schema</a>. The full source code can be found in <a href="https://github.com/msenejoa/msenejoa.github.io">my Github repo</a>.</p>
            </div>
};

export default Profile;
