import React from 'react';

 class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userInfo: {
        name: 'Dummy',
        location: 'Default',
      },
    };
  }

  async componentDidMount() {
    const data = await fetch(
      'https://api.github.com/users/Sakshamjain98'
    );
    const json = await data.json();

    this.setState({
      userInfo: json,
    });

    console.log(json);
  }

  componentDidUpdate() {
    console.log('Component Did Update');
  }

  componentWillUnmount() {
    console.log('Component Will Unmount');
  }

  render() {
    const { name, location, avatar_url } = this.state.userInfo;

    return (  
      <div className="user-card shadow-lg w-1/2 h-auto flex flex-col items-center m-10 border-black z-50 shadow-gray-500 p-10" >
        <img src={avatar_url} alt={name} className='rounded-full w-44 h-44 ' />
        <h2 className='text-2xl m-[25px] font-bold'>Name: {name}</h2>
        <h3>Location: {location}</h3>
        <h4>Contact: @SakshamJain</h4>
      </div>
    );
  }
}
export default  UserClass;
