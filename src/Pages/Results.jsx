import React from 'react';
import HospitalCard from '../component/HospitalCard'; 
import Footer from '../component/Footer'; 
import Header from '../component/Header';

const hospitals = {
  recommended: [
    {
      name: 'Hospital A',
      address: '70 Pleasant Valley Street, Methuen MA 1844',
      phone: '+108093497609',
      distance: '0.6 km',
      time: '5 mins',
      rating: 4.5,
      image: 'hospital-image-url',
    },
    {
      name: 'Hospital B',
      address: '742 Main Street, North Oxford MA 1537',
      phone: '+600350042877',
      distance: '1.6 km',
      time: '8 mins',
      rating: 4.0,
      image: 'hospital-image-url',
    },
    {
      name: 'Hospital C',
      address: '1000 State Route 36, Hornell NY 14843',
      phone: '+287964864321',
      distance: '1.4 km',
      time: '12 mins',
      rating: 3.5,
      image: 'hospital-image-url',
    },
    {
      name: 'Hospital D',
      address: '58 Brooklawn Village Way, Danvers MA 1923',
      phone: '+425769178448',
      distance: '1.2 km',
      time: '10 mins',
      rating: 4.8,
      image: 'hospital-image-url',
    },
  ],
  other: [
    {
      name: 'Hospital X',
      address: '279 Troy Road, East Greenbush NY 12061',
      phone: '+492431926059',
      distance: '3 km',
      time: '20 mins',
      rating: 4.2,
      image: 'hospital-image-url',
    },
    {
      name: 'Hospital Y',
      address: '425 Route 34, Macedon NY 14502',
      phone: '+509344018021',
      distance: '5 km',
      time: '25 mins',
      rating: 3.8,
      image: 'hospital-image-url',
    },
  ],
};

const HealthcareAccess = () => {
  return (
    <div className="min-h-screen bg-blue-50 p-4 md:p-8 flex flex-col ustify-center items-center">
      {/* <Header /> */}

      <section className="mt-6">
        <h2 className="text-xl font-semibold text-blue-700 mb-4">
          Recommended Healthcare Centres
        </h2>
        <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
          {hospitals.recommended.map((hospital) => (
            <HospitalCard key={hospital.name} hospital={hospital} />
          ))}
        </div>
      </section>

      <section className="mt-12">
        <h2 className="text-xl font-semibold text-blue-700 mb-4">
          Other Healthcare Centres
        </h2>
        <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
          {hospitals.other.map((hospital) => (
            <HospitalCard key={hospital.name} hospital={hospital} />
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default HealthcareAccess;
