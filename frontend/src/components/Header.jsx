function Header() {
  return (
    <header className="w-full h-16 bg-secondary p-2 flex items-center absolute top-0">
      <a href=".">
        <img
          src="./src/assets/Blogo.png"
          alt="Blur Logo"
          className="h-16 mr-2 p-1"
        />
      </a>
      <h1 className="text-5xl font-playfair">
        <span className="blur-xs">Blur</span>test
      </h1>
      <label className="absolute right-5">
        <input type="checkbox" />
        <span>{}</span>
        <span>{}</span>
        <span>{}</span>
      </label>
    </header>
  );
}

export default Header;
