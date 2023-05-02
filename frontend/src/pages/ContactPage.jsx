import React from "react";

function ContactPage() {
  return (
    <main className="flex flex-col justify-center">
      <div className="infoBlockXl">
        <h1 className="cardfilmTitle h-7 md:text-2xl  mb-[1rem]">
          Formulaire de contact
        </h1>
      </div>

      <section id="contact">
        <form id="contactForm" className="flex flex-col justify-center">
          <label className="w-full" htmlFor="name" placeholder="Votre Nom">
            Prénom, Nom :
          </label>
          <input
            className="rounded px-2"
            type="text"
            id="name"
            name="name"
            placeholder="Votre Prenom et Nom"
            autoComplete
            required
          />
          <br />

          <label className="w-full" htmlFor="lastname">
            Objet :
          </label>
          <input
            className="rounded px-2"
            type="text"
            id="lastname"
            name="lname"
            placeholder="Objet"
            autoComplete
            required
          />
          <br />

          <label className="w-full" htmlFor="email" autoComplete required>
            Adresse Email :
          </label>
          <input
            className="rounded px-2"
            type="email"
            id="email"
            name="email"
            placeholder="exemple@email.com"
            required
          />
          <br />

          <label className="w-full" htmlFor="message">
            Message :
          </label>
          <textarea
            className="rounded px-2"
            id="message"
            name="message"
            rows="5"
            required
          />
          <br />

          <button
            type="submit"
            className="okButton hover:okButtonHover md:h-[2.7rem] md:text-xl"
          >
            Envoyer
          </button>
        </form>
      </section>
    </main>
  );
}

export default ContactPage;
