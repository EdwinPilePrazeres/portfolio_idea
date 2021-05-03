import React from "react";
import { Link } from "react-router-dom";
import './Contact.css'

const ContactCard = () => {

  const toggle = () => {
    document.querySelector('.container').classList.toggle('active');
    document.querySelector('.SectionContact').classList.toggle('active');
  }
  
  return (
    <div className='SectionContact'>
      <div className='container'>
        <div className='user signinBx'>
          <div className='imgBx'>
            <img src={require('../Images/door_looked.jpg').default} alt="Door Looked"/>
          </div>
          <div className='formBx'>
            <form>
              <h2>Sign In</h2>
              <input type="text" placeholder="UserName" />
              <input type="password" placeholder="Password" />
              <input type="submit" value="Login" />
              <p className="signup">
                don't have an account? <Link onClick={toggle}>Sing up</Link>
              </p>
            </form>
          </div>
        </div>
        {/*  */}
        <div className='user signupBx'>
          <div className='formBx'>
            <form>
              <h2>Create Account</h2>
              <input type="text" placeholder="UserName" />
              <input type="email" placeholder="Email Address" />
              <input type="password" placeholder="Create Password" />
              <input type="password" placeholder="Confirm Password" />
              <input type="submit" value="Sign Up" />
              <p className="signup">
                Already have an account? <Link onClick={toggle}>Sing in</Link>
              </p>
            </form>
          </div>
          <div className='imgBx'>
            <img src={require('../Images/keys.jpg').default} alt="Door Looked"/>
          </div>
        </div>
      </div>

      {/* <div className='back_button'>
        <Link to='/up_project'>Logo</Link>
      </div> */}
    </div>
  );
};

export default ContactCard;
