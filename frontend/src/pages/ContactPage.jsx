import React from "react";

function ContactPage() {
  return (
    <main className="flex flex-col justify-center my-auto xl:ml-[191px] min-h-[666px] h-screen mt-[66px]">
      <div className="infoBlockXl">
        <h1 className="cardfilmTitle h-8 md:text-2xl mb-12">
          Formulaire de contact
        </h1>
      </div>

      <section id="contact">
        <form id="contactForm" className="flex flex-col justify-center">
          <label
            className="w-full text-secondary flex ml-2"
            htmlFor="name"
            placeholder="Votre Nom"
          >
            Prénom, Nom :
          </label>
          <input
            className="rounded px-2 h-8 mb-6"
            type="text"
            id="name"
            name="name"
            placeholder="Votre Prenom et Nom"
            required
          />

          <label className="w-full text-secondary flex ml-2" htmlFor="lastname">
            Objet :
          </label>
          <input
            className="rounded px-2 h-8 mb-6"
            type="text"
            id="lastname"
            name="lname"
            placeholder="Objet"
            required
          />

          <label
            className="w-full text-secondary flex ml-2"
            htmlFor="email"
            required
          >
            Adresse Email :
          </label>
          <input
            className="rounded px-2 h-8 mb-6"
            type="email"
            id="email"
            name="email"
            placeholder="exemple@email.com"
            required
          />
          <label className="w-full text-secondary flex ml-2" htmlFor="message">
            Message :
          </label>
          <textarea
            className="rounded px-2 mb-6"
            id="message"
            name="message"
            rows="5"
            required
          />
          <button
            type="submit"
            className="okButton hover:okButtonHover md:h-[2.7rem] md:text-xl mb-6"
          >
            Envoyer
          </button>
        </form>
      </section>
    </main>
  );
}

export default ContactPage;
