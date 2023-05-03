function Footer() {
  return (
    <footer className="bg-secondary w-full h-12 justify-around items-center md:absolute bottom-0 flex">
      <div className="absolute left-10">
        <img src="./assets/copyright.svg" alt="Copyright" className="h-2" />
      </div>
      <div className="flex justify-center w-3/4 space-x-12 md:space-x-20 xl:gap-12">
        <a
          href="https://www.facebook.com/WildCodeSchool/"
          rel="noreferrer"
          target="_blank"
          className="flex justify-center items-center w-10 h-10"
        >
          <img
            src="./assets/facebook.svg"
            alt="Facebook"
            className="h-4 md:h-6"
          />
        </a>
        <a
          href="https://www.instagram.com/wildcodeschoolofficial/?hl=fr"
          rel="noreferrer"
          target="_blank"
          className="flex justify-center items-center w-10 h-10"
        >
          <img
            src="./assets/instagram.svg"
            alt="Instagram"
            className="h-4 md:h-6"
          />
        </a>
        <a
          href="https://twitter.com/WildCodeSchool?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor"
          rel="noreferrer"
          target="_blank"
          className="flex justify-center items-center w-10 h-10"
        >
          <img
            src="./assets/twitter.svg"
            alt="Twitter"
            className="h-4 md:h-6"
          />
        </a>
      </div>
    </footer>
  );
}
export default Footer;
