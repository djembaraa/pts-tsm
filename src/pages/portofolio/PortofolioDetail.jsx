import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { portfolios } from '../../data/mockData_portfolios';
import PortofolioTemplate from '../../components/templates/PortofolioTemplate';

const PortofolioDetail = () => {
  const { slug } = useParams();
  const data = portfolios.find(p => p.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!data) {
    return (
      <div className="py-32 text-center min-h-[60vh] flex flex-col items-center justify-center">
        <h2 className="text-3xl font-condensed font-bold text-navy mb-4">Portofolio Tidak Ditemukan</h2>
        <p className="text-muted mb-6">Maaf, halaman untuk '{slug}' belum tersedia di data kami.</p>
        <Link to="/portofolio" className="px-6 py-2 bg-blue text-white rounded-md font-bold hover:bg-navy transition-colors">Kembali ke Portofolio</Link>
      </div>
    );
  }

  return <PortofolioTemplate data={data} />;
};

export default PortofolioDetail;
