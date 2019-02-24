import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <div className='nav-header-container'>
            <img  className='logo-header' src={require('./images/logo-header.png')} alt=''/>
            <input />
            <nav className='nav-header'>
              <a href='#'>Pull Requests</a>
              <a href='#'>Issues</a>
              <a href='#'>Marketplace</a>
              <a href='#'>Explore</a>
            </nav>
          </div>

          <div className='nav-header-right-container'>
            <nav className='nav-right'>
              <img className='bell' src={require('./images/bell.png')} alt=''/>
              <img className='plus' src={require('./images/plus.png')} alt=''/>
              <img className='profile-pic-small' src={require('./images/profile-pic-small.png')} alt=''/>
            </nav>
          </div>
        </header>

        <main>
          <section className='left-sidebar'>
            <div className='profile-pic-container'>
              <img className='profile-pic'/>
            </div>

            <div className='about-container'>
              <img className='about' />
              <button>Edit</button>
            </div>
          </section>

          <section className='main-content'>
            <div className='nav-main-container'>
              <nav className='nav-main'>
                <a href='#/'>Overview</a>
                <a href='#/'>Repositories</a>
                <a href='#/'>Stars</a>
                <a href='#/'>Followers</a>
                <a href='#/'>Following</a>
              </nav>
            </div>

            <div className='repository-container'>
              <div className='repository-top'>
                <h3>Popular Repositories</h3>
                <p>Customize your pinned repositories</p>
              </div>

              <div className='repository-main'>
                <div className='repo-1'></div>
                <div className='repo-2'></div>
                <div className='repo-3'></div>
                <div className='repo-4'></div>
                <div className='repo-5'></div>
                <div className='repo-6'></div>
              </div>
            </div>

            <div className='contributions-container'>
              <div className='contributions-top'>
                <h3>16 contributions in the last year</h3>
                <p>Contribution settings</p>
              </div>

              <img className='contributions'/>
            </div>
          </section>
        </main>

        <footer>
          <div className='nav-footer-left-container'>
            <p>© 2019 GitHub, Inc.</p>
            <a href='#/'>Terms</a>
            <a href='#/'>Privacy</a>
            <a href='#/'>Security</a>
            <a href='#/'>Status</a>
            <a href='#/'>Help</a>
          </div>
          
          <div className='logo-footer-container'>
            <img className='logo-footer'/>
          </div>

          <div className='nav-footer-right-container'>
            <a href='#'>Contact</a>
            <a href='#'>Github</a>
            <a href='#'>Pricing</a>
            <a href='#'>API</a>
            <a href='#'>Training</a>
            <a href='#'>Blog</a>
            <a href='#'>About</a>
          </div>
        </footer>
      </div>


    );
  }
}

export default App;
