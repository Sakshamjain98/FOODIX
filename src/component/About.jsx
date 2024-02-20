import { Component } from 'react';
import UserClass from './UserClass';
import UserContext from '../utils/UserContext';

class About extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="about-page flex flex-col items-center justify-center z-0">
        <div className='mt-3 font-bold tracking-wide text-center'>
          LoggedInUser: 
          <UserContext.Consumer>
            {({ loggedInUser }) => <h1 className="mt-1">{loggedInUser}</h1>}
          </UserContext.Consumer>
        </div>
        <UserClass name={'First'} location={'Badvel class'} />
      </div>
    );
  }
}

export default About;
