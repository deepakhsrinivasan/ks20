import React, {Component} from 'react';

class Navbar extends Component {
	render() {
		return (
			<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
			  <button class="navbar-toggler ml-auto" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
			    <span class="navbar-toggler-icon"></span>
			  </button>
			  <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
			    <a class="navbar-brand" href="#">Hidden brand</a>
			    <ul class="navbar-nav ml-auto mt-2 mt-lg-0">
			      <li class="nav-item active">
			        <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
			      </li>
			      <li class="nav-item">
			        <a class="nav-link" href="#">Link</a>
			      </li>
			      <li class="nav-item">
			        <a class="nav-link disabled" href="#">Disabled</a>
			      </li>
			    </ul>
			  </div>
			</nav>
		)
	}
}

export default Navbar;