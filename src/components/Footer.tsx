
const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4 font-comfortaa">KALEMBU MASIRIKA Constantin</h3>
            <p className="text-gray-300 font-comfortaa">
              Développeur Web & Mobile passionné, transformant vos idées en solutions digitales innovantes.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4 font-comfortaa">Contact</h4>
            <div className="space-y-2 text-gray-300 font-comfortaa">
              <p>📞 +243 976 075 391</p>
              <p>✉️ elconstant73@gmail.com</p>
              <p>📍 Kinshasa, RDC</p>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4 font-comfortaa">Suivez-moi</h4>
            <div className="flex gap-4 flex-wrap">
              <a 
                href="https://www.facebook.com/mascodeproduct" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors"
              >
                💼 LinkedIn
              </a>
              <a 
                href="https://github.com/MasirikaConstantin" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors"
              >
                🐱 GitHub
              </a>
              <a 
                href="https://youtube.com/@masproduct360" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors"
              >
                📺 YouTube
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300">
          <p className="font-comfortaa">
            © 2024 KALEMBU MASIRIKA Constantin. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
