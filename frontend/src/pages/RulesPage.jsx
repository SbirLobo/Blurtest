import React from "react";

function RulesPage() {
  return (
    <div className="h-screen rulesPage md:rulesPageMd xl:rulesPageXl">
      <div className="rulesTexts md:rulesTextsMd">
        <h2 className="rulesTitle">Règles du jeu</h2>
        <div className="rulesParag md:rulesParagMd">
          <p>Alors, voilà comment ça marche le Blurtest en ligne !</p>
          <p>
            Tu as des affiches de films floutées qui se dé-floutent petit à
            petit pendant 45 secondes. Ton but ? Deviner le titre, l'année, le
            réalisateur et les acteurs principaux du film. Pas facile, mais ça
            rend le jeu super fun !
          </p>
          <p>
            Tu as juste à saisir tes réponses dans les champs prévus à cet effet
            et à valider en appuyant sur le bouton "OK" ou la touche "Entrée" de
            ton clavier. Chaque réponse correcte te rapporte des points et il y
            a 7 affiches à deviner.
          </p>
          <p>
            Et voilà, tu as toutes les cartes en main pour jouer au Blurtest
            comme un pro !
          </p>
        </div>
      </div>
      <img
        src="../assets/film-reel.png"
        alt="Bobine de film"
        className="rulesImg1 md:rulesImgMd1"
      />
      <img
        src="../assets/film-negatives2.png"
        alt="Film négatifs"
        className="rulesImg2 md:rulesImgMd2"
      />
    </div>
  );
}
export default RulesPage;
