import React, { useEffect, useState } from 'react';

const COOKIE_KEY = 'hokma_cookies_accepted';

const AlertaCookies = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Mostrar la alerta solo si no hay decisión previa
    const accepted = localStorage.getItem(COOKIE_KEY);
    if (!accepted) {
      setVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem(COOKIE_KEY, 'true');
    setVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem(COOKIE_KEY, 'false');
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 w-full z-[9999] flex justify-center items-end">
      <div className="m-4 p-6 rounded-xl shadow-lg flex flex-col md:flex-row items-center gap-4" style={{ background: '#2A2D3B' }}>
        <span className="text-white text-base md:text-lg" style={{ fontFamily: 'Caviar Dreams' }}>
          Utilizamos cookies para mejorar tu experiencia. ¿Aceptas el almacenamiento de cookies?
        </span>
        <div className="flex gap-2 mt-2 md:mt-0">
          <button
            onClick={handleAccept}
            className="px-6 py-2 rounded-lg font-semibold text-white bg-[#A6C138] hover:bg-[#8bb02e] transition-colors shadow"
            style={{ fontFamily: 'Caviar Dreams' }}
          >
            ::: Acepto :::
          </button>
          <button
            onClick={handleDecline}
            className="px-6 py-2 rounded-lg font-semibold text-white bg-transparent border border-white hover:bg-white hover:text-[#2A2D3B] transition-colors shadow"
            style={{ fontFamily: 'Caviar Dreams' }}
          >
            ::: No Acepto :::
          </button>
        </div>
      </div>
    </div>
  );
};

export default AlertaCookies;
