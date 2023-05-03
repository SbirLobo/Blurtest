import React from "react";

function ContactPage() {
  return (
    <main className="flex flex-col justify-center my-auto xl:ml-[191px] h-screen">
      <div className="infoBlockXl">
        <h1 className="cardfilmTitle h-8 md:text-2xl mb-14">
          Formulaire de contact
        </h1>
      </div>

      <section id="contact">
        <form id="contactForm" className="flex flex-col justify-center">
          <label
            className="w-full text-secondary flex justify-center"
            htmlFor="name"
            placeholder="Votre Nom"
          >
            Prénom, Nom :
          </label>
          <input
            className="rounded px-2 h-8 mb-8"
            type="text"
            id="name"
            name="name"
            placeholder="Votre Prenom et Nom"
            autoComplete
            required
          />

          <label
            className="w-full text-secondary flex justify-center"
            htmlFor="lastname"
          >
            Objet :
          </label>
          <input
            className="rounded px-2 h-8 mb-8"
            type="text"
            id="lastname"
            name="lname"
            placeholder="Objet"
            autoComplete
            required
          />

          <label
            className="w-full text-secondary flex justify-center"
            htmlFor="email"
            autoComplete
            required
          >
            Adresse Email :
          </label>
          <input
            className="rounded px-2 h-8 mb-8"
            type="email"
            id="email"
            name="email"
            placeholder="exemple@email.com"
            required
          />

          <label
            className="w-full text-secondary flex justify-center"
            htmlFor="message"
          >
            Message :
          </label>
          <textarea
            className="rounded px-2 mb-8"
            id="message"
            name="message"
            rows="5"
            required
          />

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
