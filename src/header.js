import React, { Component } from 'react';

class	Header extends Component{
render(){
	return(
		<div>
	    <header className="intro-header headerImage">
	        <div className="container">
	            <div className="row">
	                <div className="col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1">
	                    <div className="site-heading">
	                        <h1>Clean Blog</h1>
	                        <hr className="small" />
	                        <span className="subheading">A Clean Blog Theme by Start Bootstrap</span>
	                    </div>
	                </div>
	            </div>
	        </div>
	    </header>
		</div>
		);
	}
}

export default Header;