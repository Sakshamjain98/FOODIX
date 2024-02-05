const Footer = () => {
    const currYear = new Date().getFullYear();
    return (
      <footer className=" bg-white px-[30px] py-[10px] h-16 pt-4 mt-[50px] text-center shadow-lg shadow-[rgba(0, 0, 0, 0.075)] "  >
        <p className="">
          Copyright &copy; {currYear}, Made with 💗 by <strong>Saksham</strong>
        </p>
      </footer>
    );
  };
  export default Footer;