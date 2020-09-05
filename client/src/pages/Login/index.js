import React, { Component } from 'react';

class Login extends Component {

  render(){
    return(
      <>
      <h1>Login</h1>

      <form className="col s12">
        <div className="input-field">
          <input id="email" type="email" className="validate" />
          <label for="email">Email</label>
        </div>
        <div className="input-field">
          <input id="password" type="password" className="validate" />
          <label for="password">Password</label>
        </div>

        <button class="btn waves-effect waves-light" type="submit" name="action">Login
          <i class="material-icons right">send</i>
        </button>
        <button class="btn waves-effect waves-light" type="submit" name="action">Cancel
        </button>
      </form>


      </>
    );
  }
}

export default Login;
