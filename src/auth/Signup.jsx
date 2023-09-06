import React from "react";

function Signup() {
  return (
    <div class="w-full h-screen flex justify-center items-center  bg-gray-200">
      <div class="w-[450px] bg-white p-10 rounded-lg shadow-md ">
        <div className="back p-3 shadow-sm w-[60px]">back</div>
        <form action="">
          <div class="sm:col-span-3">
            <div class="mt-2">
              <input
                type="text"
                name="username"
                id="username"
                autocomplete="given-name"
                placeholder="Nom d'utilisateur"
                class="block w-full text-center rounded-md border-0 px-5 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div class="sm:col-span-3">
            <div class="mt-2">
              <input
                type="text"
                name="username"
                id="username"
                autocomplete="given-name"
                placeholder="Nom d'utilisateur"
                class="block w-full text-center rounded-md border-0 px-5 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div class="sm:col-span-3">
            <div class="mt-2">
              <input
                type="text"
                name="username"
                id="username"
                autocomplete="given-name"
                placeholder="Nom d'utilisateur"
                class="block w-full text-center rounded-md border-0 px-5 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div class="sm:col-span-4">
            <div class="mt-2">
              <input
                id="email"
                name="email"
                type="email"
                autocomplete="email"
                placeholder="Mot de passe"
                class="block w-full text-center rounded-md border-0 px-5 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div class="sm:col-span-4">
            <div class="mt-2">
              <p
                class="block w-full text-center rounded-md  px-5 py-3 text-[#036EFF] font-bold  sm:text-sm sm:leading-6"
              >
               S'inscrire en tant que
              </p>
            </div>
          </div>

          <div class="sm:col-span-4">
            <div class="mt-2 flex space-x-4">
              <input
                id="login_submit"
                name="login_submit"
                type="submit"
                value="Assistant"
                class="bg-[#BADF5B] px-5 py-3 w-full font-bold text-[#036EFF] rounded-md shadow-md"
              />
              <input
                id="login_submit"
                name="login_submit"
                type="submit"
                value="Client"
                class="bg-[#BADF5B] px-5 py-3 w-full font-bold text-[#036EFF] rounded-md shadow-md"
              />
            </div>
          </div>

          <div class="sm:col-span-4">
            <div class="mt-2">
              <p className="flex items-center justify-center">
                <input
                  class="mx-2 text-center rounded-md   text-gray-400  sm:text-sm sm:leading-6"
                  type="checkbox"
                  name=""
                  id=""
                />
                <p class="mx-1 mb-[2px] text-center rounded-md   text-gray-400  sm:text-sm sm:leading-6">
                  Se souvenir de moi
                </p>
              </p>
            </div>
            <hr class="my-10" />
            <div class="sm:col-span-4">
              <div class="mt-2">
                <p
                  href="#"
                  class="block w-full text-center rounded-md  px-5 py-3 text-gray-400  sm:text-sm sm:leading-6"
                >
                  Vous n'avez pas de compte ?
                </p>
              </div>
            </div>
            <div class="sm:col-span-4">
              <div class="mt-2">
                <input
                  id="login_submit"
                  name="login_submit"
                  type="submit"
                  value="Se connecter"
                  class="bg-[#036EFF] px-5 py-3 w-full font-bold text-white rounded-md  shadow-md"
                />
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Signup;
