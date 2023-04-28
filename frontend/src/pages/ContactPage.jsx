import React from "react";

function ContactPage() {
  return (
    <main>
      <div className="infoBlockXl">
        <h1 className="cardfilmTitle h-7 md:text-2xl mb-[5rem] max-xl:hidden">
          Formulaire de conctact
        </h1>
      </div>

      <section id="contact">
        <form id="contactForm">
          <label htmlFor="name" placeholder="Votre Nom">
            Prenom,Nom
          </label>
          <br />
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Votre Prenom et Nom"
            autoComplete
            required
          />
          <br />

          <label htmlFor="lastname">Objet:</label>
          <br />
          <input
            type="text"
            id="lastname"
            name="lname"
            placeholder="Objet"
            autoComplete
            required
          />
          <br />
          <br />

          <label htmlFor="email" autoComplete required>
            Adresse Email:
          </label>
          <br />
          <input
            width="500px"
            type="email"
            id="email"
            name="email"
            placeholder="example@seamail.com"
            required
          />
          <br />

          <label htmlFor="message">Message:</label>
          <br />
          <textarea id="message" name="message" required />
          <br />
          <br />

          <button
            type="submit"
            className="okButton hover:okButtonHover md:okButtonDesktop md:text-xl"
          >
            Envoyer
          </button>
        </form>
      </section>
    </main>
  );
}

export default ContactPage;
