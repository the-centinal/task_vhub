import React from 'react';

class NITHamirpurInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "National Institute of Technology, Hamirpur",
      location: "Hamirpur, Himachal Pradesh, India",
      website: "https://nith.ac.in/",
      description: "National Institute of Technology Hamirpur is one of the thirty NITs of the country, established in 1986 as Regional Engineering College. It is fully funded by the Government of India. It offers undergraduate, postgraduate, and doctoral programs in various disciplines of Engineering, Architecture, Sciences, Humanities, and Management.",
      contact: {
        email: "info@nith.ac.in",
        phone: "+91-1972-254001",
      }
    };
  }

  render() {
    return (
      <div>
        <h1>{this.state.name}</h1>
        <p><strong>Location:</strong> {this.state.location}</p>
        <p><strong>Website:</strong> <a href={this.state.website}>{this.state.website}</a></p>
        <p><strong>Description:</strong> {this.state.description}</p>
        <p><strong>Contact Email:</strong> {this.state.contact.email}</p>
        <p><strong>Contact Phone:</strong> {this.state.contact.phone}</p>
      </div>
    );
  }
}

export default NITHamirpurInfo;
