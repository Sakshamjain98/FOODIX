const Footer = () => {
  const currYear = new Date().getFullYear();
  return (
    <footer className={`bg-white px-4 sm:px-6 md:px-8 py-4 sm:py-6 md:py-4 h-auto sm:h-16 pt-1 mt-4 sm:mt-12 text-center shadow-lg shadow-[rgba(0, 0, 0, 0.075)] ${window.innerWidth < 500 ? 'footer-sm-text-left' : ''}`}>
    <p className="text-sm sm:text-base whitespace-nowrap sm:whitespace-normal">
      Copyright &copy; {currYear}, 
    </p>
    <p className="text-sm sm:text-base whitespace-nowrap sm:whitespace-normal">
      Made with 💗 by <strong>Saksham</strong>
    </p>
  </footer>
  
  );
};

export default Footer;
