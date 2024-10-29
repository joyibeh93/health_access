import React from 'react';
import Footer from '../component/Footer';
import HospitalInfoCard from '../component/HospitalInfoCard';
import Header from '../component/Header';
import GoogleMapEmbed from '../component/GoogleMap';

const HospitalDetails = () => {
  return (
    <>
    <div>
        <Header />
    </div>

    <section className="flex flex-col lg:flex-row justify-center items-center lg:items-start mt-6 w-full lg:max-w-6xl px-4 space-y-6 lg:space-y-0 lg:space-x-8">
        {/* Hospital Card */}
        <div>
            <HospitalInfoCard />
        </div>

        {/* Map */}
        <div>
          <GoogleMapEmbed /> 
        </div>
      </section>

    <div>
        <Footer />
    </div>
    </>
  );
};

export default HospitalDetails;
