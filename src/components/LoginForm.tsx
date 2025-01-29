import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import InputsForm from "../components/InputsForm";
import Error from "./Error";
import db, { usuariosDB } from "../data/db";

// Definimos la estructura de los datos del formulario
interface FormData {
  email: string;
  password: string;
}

function LoginForm() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>(); // Se especifica el tipo de los datos

  // Función de autenticación
  const onSubmit = (data: FormData) => {
    const user = usuariosDB.find(
      (user) => user.email === data.email && user.password === data.password
    );

    if (user) {
      alert("Inicio de sesión exitoso");
      navigate("/dashboard"); // Redirigir al dashboard
    } else {
      alert("Credenciales incorrectas");
    }
  };

  return (
    <div className="grid md:h-screen md:grid-cols-2">
      <div className="flex flex-col items-center justify-center bg-white">
        <div className="max-w-lg px-5 py-16 text-center md:px-10 md:py-24 lg:py-32">
          <h2 className="mb-8 text-3xl font-bold md:mb-12 md:text-5xl">
            North House Panel de Control
          </h2>
          <form
            className="mx-auto mb-4 max-w-sm pb-4"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="relative">
              <img
                alt=""
                src="https://assets.website-files.com/6357722e2a5f19121d37f84d/6357722e2a5f190b7e37f878_EnvelopeSimple.svg"
                className="absolute bottom-0 left-[5%] right-auto top-[26%] inline-block"
              />
              <InputsForm
                type="text"
                placeholder="Correo Electrónico"
                className="mb-4 block h-9 w-full border border-black bg-[#f2f2f7] px-3 py-6 pl-14 text-sm text-[#333333]"
                id="email"
                {...register("email", {
                  required: "El campo Email es obligatorio",
                })}
              />
              {errors.email && <Error>{errors.email.message}</Error>}
            </div>
            <div className="relative mb-4">
              <img
                alt=""
                src="https://assets.website-files.com/6357722e2a5f19121d37f84d/6357722e2a5f19601037f879_Lock-2.svg"
                className="absolute bottom-0 left-[5%] right-auto top-[26%] inline-block"
              />
              <InputsForm
                type="password"
                placeholder="Contraseña"
                className="mb-4 block h-9 w-full border border-black bg-[#f2f2f7] px-3 py-6 pl-14 text-sm text-[#333333]"
                id="password"
                {...register("password", {
                  required: "El campo Contraseña es obligatorio",
                })}
              />
              {errors.password && <Error>{errors.password.message}</Error>}
            </div>
            <button
              type="submit"
              className="flex items-center justify-center bg-[#276ef1] px-8 py-4 text-center font-semibold text-white transition [box-shadow:rgb(171,_196,_245)_-8px_8px] hover:[box-shadow:rgb(171,_196,_245)_0px_0px]"
            >
              <p className="mr-6 font-bold">Iniciar Sesión</p>
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
          <p className="text-sm text-[#636262]">
            Olvidaste tu contraseña?{" "}
            <Link
              to="/forgot-password"
              className="text-sm font-bold text-black"
            >
              Recupérala ahora!
            </Link>
          </p>
          <p className="text-sm text-[#636262]">
            No tienes cuenta?{" "}
            <Link to="/create-account" className="text-sm font-bold text-black">
              Crea tu cuenta ahora!
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default LoginForm;
