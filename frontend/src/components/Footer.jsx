function Footer() {
  return (
    <footer className="bg-secondary w-full h-12 flex justify-around items-center fixed bottom-0">
      <div className="absolute left-10">
        <img src="./src/assets/copyright.svg" alt="Copyright" className="h-2" />
      </div>
      <div className="flex justify-center w-3/4 space-x-12 md:space-x-20 xl:gap-12">
        <img
          src="./src/assets/facebook.svg"
          alt="Facebook"
          className="h-4 md:h-6"
        />
        <img
          src="./src/assets/instagram.svg"
          alt="Instagram"
          className="h-4 md:h-6"
        />
        <img
          src="./src/assets/twitter.svg"
          alt="Twitter"
          className="h-4 md:h-6"
        />
      </div>
    </footer>
  );
}
export default Footer;
