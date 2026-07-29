import React from 'react';

const ClientMarquee = () => {
  const clients = [
    { src: 'logo-ritzcarlton.png', name: 'The Ritz-Carlton' },
    { src: 'logo-pelindo.png', name: 'PT Pelindo' },
    { src: 'logo-sosro.png', name: 'PT Sosro' },
    { src: 'logo-wintermar.png', name: 'Wintermar Offshore Marine' },
    { src: 'logo-app.png', name: 'APP (Asia Pulp & Paper)' },
    { src: 'logo-sasa.png', name: 'PT Sasa Inti' },
    { src: 'logo-ekahospital.png', name: 'Eka Hospital' },
    { src: 'logo-suryahutanijaya.png', name: 'PT Surya Hutani Jaya' },
    { src: 'logo-hillcon.png', name: 'Hillcon' },
    { src: 'logo-triton.png', name: 'Triton Offshore' },
    { src: 'logo-suryainternusa.png', name: 'Surya Internusa' },
    { src: 'logo-noahtu.png', name: 'Noahtu Shipyard' },
    { src: 'logo-mako.png', name: 'Mako Cake & Bakery' },
    { src: 'logo-liziz.png', name: 'Liziz Indoliziz Marine' },
    { src: 'logo-melinda.png', name: 'RS Melinda' },
    { src: 'logo-adani.png', name: 'Adani' },
    { src: 'logo-atmajaya.png', name: 'Universitas Atma Jaya' },
    { src: 'logo-ijsm.png', name: 'PT Indojaya Sukses Makmur' },
    { src: 'logo-klh.png', name: 'Kementerian Lingkungan Hidup' },
    { src: 'logo-unair.png', name: 'Universitas Airlangga' }
  ];

  return (
    <div className="relative overflow-hidden py-2 before:absolute before:inset-y-0 before:left-0 before:w-20 before:bg-gradient-to-r before:from-gray before:to-transparent before:z-[2] before:pointer-events-none after:absolute after:inset-y-0 after:right-0 after:w-20 after:bg-gradient-to-l after:from-gray after:to-transparent after:z-[2] after:pointer-events-none">
      <div className="flex items-center gap-[1.2rem] w-max animate-marquee">
        {/* Render twice for infinite scrolling effect */}
        {[...clients, ...clients].map((client, idx) => (
          <div key={idx} className="bg-white border border-border rounded-[10px] py-3 px-5 flex items-center justify-center shrink-0 w-[200px] h-[90px] transition-all duration-300 hover:-translate-y-[3px] hover:shadow-[0_4px_28px_rgba(10,34,64,0.11)] hover:border-blue group">
            <img 
              src={`/images/${client.src}`} 
              alt={client.name} 
              title={client.name}
              className="max-w-[160px] max-h-[58px] w-auto h-auto object-contain grayscale-[20%] opacity-85 transition-all duration-300 group-hover:grayscale-0 group-hover:opacity-100" 
              loading="lazy" 
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ClientMarquee;
