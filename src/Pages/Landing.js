import React from 'react';
import main from '../assets/images/main.svg'
import Wrapper from '../assets/wrappers/LandingPage';

// Setup an index file inside the component and export all the components there, so will not need multiple imports. //
import { Logo } from '../components/'

const Landing = () => {
  return(
    <Wrapper>
        <nav>
            <Logo/>
        </nav>
        <div className="container page">
            {/* info */}
            <div className="info">
                <h1>Job <span>tracking</span> app </h1>
                <p>
                    Lorem, ipsums dolor sit amet consectetur adipisicing elit. Vero dolorum velit corporis praesentium eum impedit autem architecto voluptas, eaque doloremque veniam odio sequi. Neque dolorem, amet eos iure facere veniam.
                </p>
                <button className="btn btn-hero">
                    Login/Register
                </button>
            </div>
            {/* image */}
            <img src={main} alt="job hunt" className="img main-img" />
        </div>
    </Wrapper>  
  ) 
};



export default Landing;
