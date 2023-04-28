import CardTheme from "../components/CardTheme";

function HomePage() {
  const themes = [
    {
      id: "",
      name: "Populaire",
      img: "./assets/themes/img_general.jpg",
    },
    {
      id: 12,
      name: "Aventure",
      img: "./assets/themes/img_aventure.jpg",
    },
    {
      id: 18,
      name: "Drame",
      img: "./assets/themes/img_drame.jpg",
    },
    {
      id: 14,
      name: "Fantastique",
      img: "./assets/themes/img_fantasy.jpg",
    },
    {
      id: 27,
      name: "Horreur",
      img: "./assets/themes/img_horror.jpg",
    },
    {
      id: 10749,
      name: "Romance",
      img: "./assets/themes/img_romance.jpg",
    },
  ];
  return (
    <div className="mt-[150px] md:mt-[70px] h-[60%] xl:ml-[191px]">
      <h2 className="text-2xl text-center mb-16 text-secondary">
        Le 7ème art comme vous ne l'avez jamais{" "}
        <span className="blur-xs">VU</span> !
      </h2>
      <div className="w-full xl:w-auto flex flex-wrap justify-center gap-6 mb-6 self-center">
        {themes.map((theme) => {
          return <CardTheme key={theme.id} theme={theme} />;
        })}
      </div>
    </div>
  );
}
export default HomePage;
