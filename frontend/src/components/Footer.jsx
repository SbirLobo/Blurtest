function Footer() {
  return (
    <footer className="bg-secondary w-full h-12 justify-around items-center absolute bottom-0 hidden md:flex">
      <div className="absolute left-10">
        <img src="./src/assets/copyright.svg" alt="Copyright" className="h-2" />
      </div>
      <div className="flex justify-center w-3/4 space-x-12 md:space-x-20 xl:gap-12">
        <a href="." className="flex justify-center items-center w-10 h-10">
          <img
            src="./src/assets/facebook.svg"
            alt="Facebook"
            className="h-4 md:h-6"
          />
        </a>
        <a href="." className="flex justify-center items-center w-10 h-10">
          <img
            src="./src/assets/instagram.svg"
            alt="Instagram"
            className="h-4 md:h-6"
          />
        </a>
        <a href="." className="flex justify-center items-center w-10 h-10">
          <img
            src="./src/assets/twitter.svg"
            alt="Twitter"
            className="h-4 md:h-6"
          />
        </a>
      </div>
    </footer>
  );
}
export default Footer;
