import { useState } from "react";
import InputsForm from "../components/InputsForm";

function ForgotPassword() {
  const [email, setEmail] = useState("");
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Email", email);
  };
  return (
    <section>
      <div className="grid md:h-screen md:grid-cols-2">
        <div className="flex flex-col items-center justify-center bg-white">
          <div className="max-w-lg px-5 py-16 text-center md:px-10 md:py-24 lg:py-32">
            <h2 className="mb-8 text-3xl font-bold md:mb-12 md:text-5xl">
              Recuperar Contraseña
            </h2>
            <form
              className="mx-auto mb-4 max-w-sm pb-4"
              name="wf-form-password"
              method="get"
              onSubmit={handleSubmit}
            >
              <div className="relative">
                <img
                  alt=""
                  src="https://assets.website-files.com/6357722e2a5f19121d37f84d/6357722e2a5f190b7e37f878_EnvelopeSimple.svg"
                  className="absolute bottom-0 left-[5%] right-auto top-[26%] inline-block"
                />
                <InputsForm
                  type="email"
                  placeholder="Correo Electronico"
                  onChange={(e) => setEmail(e.target.value)}
                  className="mb-4 block h-9 w-full border border-black bg-[#f2f2f7] px-3 py-6 pl-14 text-sm text-[#333333]"
                />
              </div>

              <button
                type="submit"
                className="flex items-center justify-center bg-[#d1ee2d] px-8 py-4 text-center font-semibold text-black transition [box-shadow:rgb(171,_196,_245)_-8px_8px] hover:[box-shadow:rgb(171,_196,_245)_0px_0px]"
              >
                <p className="mr-6 font-bold">Recuperar Contraseña</p>
                <svg
                  className="h-4 w-4 flex-none"
                  fill="currentColor"
                  viewBox="0 0 20 21"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>Arrow Right</title>
                  <polygon points="16.172 9 10.101 2.929 11.515 1.515 20 10 19.293 10.707 11.515 18.485 10.101 17.071 16.172 11 0 11 0 9"></polygon>
                </svg>
              </button>
            </form>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center bg-[#f2f2f7]">
          <div className="max-w-lg px-5 py-16 md:px-10 md:py-24 lg:py-32">
            <div className="mb-6 ml-2 flex h-25 w-50 items-center justify-center bg-[#ffffff] [box-shadow:rgb(171,_196,_245)_-8px_8px]">
              <img
                src="\logo_wolf_horizontal.png"
                alt="Logo North House"
                className="inline-block"
              />
            </div>
            <p className="text-xl text-center font-bold">
              Te enviaremos un E-Mail!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ForgotPassword;
