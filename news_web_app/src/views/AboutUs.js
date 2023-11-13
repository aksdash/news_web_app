// AboutUs.js

import React from 'react';
import HeaderView from './template/header';
import Footer from './template/footer';
//import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';

//As ... Google Map APi needs subscription so skipping the maps functionality...

const containerStyle = {
  width: '100%',
  height: '400px',
};

const center = {
  lat: 37.7749, // Replace with your latitude
  lng: -122.4194, // Replace with your longitude
};

const AboutUs = () => {
//   const { isLoaded } = useJsApiLoader({
//     id: 'google-map-script',
//     googleMapsApiKey: 'your_google_maps_api_key', // Replace with your Google Maps API key
//   });

  return (
    <>
        <HeaderView />
         <div style={{ display: 'flex', justifyContent: 'space-between' }}>
      {/* {isLoaded ? (
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={15}
        >
          <Marker position={center} />
        </GoogleMap>
      ) : (
        <div>Loading Map...</div>
      )} */}

<div style={{ width: '750%', padding: '20px' }}>
        <h2>About Our News Company</h2>
        <p>
          Welcome to Update 24X7, your trusted source for up-to-the-minute news and information.
          We are committed to delivering accurate, unbiased, and timely news coverage across a wide range of
          topics, including politics, business, technology, sports, and more.
        </p>
        <p>
          Our team of experienced journalists and reporters work tirelessly to keep you informed about the latest
          events and developments around the world. Whether it's breaking news, in-depth analysis, or exclusive
          interviews, we strive to bring you comprehensive coverage that matters.
        </p>
        <p>
         Update 24X7 was founded on the principles of journalistic integrity, transparency, and
          a dedication to serving our community. We believe in the power of information to empower individuals
          and shape a better society.
        </p>
        <p>
          Visit our website daily to stay informed and engaged. Thank you for choosing [Your News Company Name] as
          your go-to source for news. We appreciate your trust and support.
        </p>
        <p>
          Contact Us:<br />
          Update 24X7<br />
          Address: Bangalore<br />
          Phone: +123456678<br />
          Email: news@update24X7mail.com
        </p>
      </div>
    </div>
    <Footer />
    </>
   
  );
};

export default AboutUs;
