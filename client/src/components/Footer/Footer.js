import React, {Component} from 'react';
import './Footer.css';

class Footer extends Component {
    render() {
      return (
        <footer className="footer">
            <div className="content has-text-centered">
                <p>Copyright &copy; {new Date().getFullYear()} Pontus Särland</p>
            </div>
        </footer>
      ) 
    }
}
export default Footer;