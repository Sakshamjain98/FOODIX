import { Component } from 'react';
import UserClass from './UserClass';
import UserContext from '../utils/UserContext';


class About extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="about-page flex items-center flex-col">
        <div className='flex mt-3 font-bold tracking-wide'>
          LoggedInUser : 
          <UserContext.Consumer>
            {({ loggedInUser }) => <h1>{loggedInUser}</h1>}
          </UserContext.Consumer>
        </div>
        <UserClass name={'First'} location={'Badvel class'} />
      </div>
    );
  }
}


export default About;
