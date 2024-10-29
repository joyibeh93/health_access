import React from 'react';
import Footer from '../component/Footer';
import HospitalInfoCard from '../component/HospitalInfoCard';
import Header from '../component/Header';
import GoogleMapEmbed from '../component/GoogleMap';

const HospitalDetails = () => {
  return (
    <>
      <Header />

      <section className="flex flex-col lg:flex-row justify-center items-start mt-6 w-full lg:max-w-6xl px-4 space-y-6 lg:space-y-0 lg:space-x-8">
        {/* Hospital Info Card */}
        <div className="w-full lg:w-1/2">
          <HospitalInfoCard />
        </div>

        {/* Google Map Embed */}
        <div className="w-full lg:w-1/2">
          <GoogleMapEmbed />
        </div>
      </section>

      <Footer />
    </>
  );
};

export default HospitalDetails;
