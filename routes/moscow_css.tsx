import { Head } from "$fresh/runtime.ts";
import { Link } from "../components/Link.tsx";

export default function Greet() {
  return <>
    <Head>
      <title>Линки для moscow-css 22.03.23</title>
    </Head>
    <div class="flex justify-center md:p-20 p-0">

      <div class="m-auto overflow-hidden rounded-lg shadow-lg cursor-pointer h-90 md:w-80 w-full">
        <div class="block w-full h-full">
          <img alt="blog photo" src="/me.jpg" class="object-cover w-full max-h-40" />
          <div class="w-full p-4 bg-white dark:bg-gray-800">
            <p class="font-medium text-indigo-500 text-md">
            </p>
            <Link title="Телега" href="https://t.me/vodolazskikh" className="mb-2 text-xl font-medium text-gray-800 dark:text-white" />
            <br />
            <Link title="гитхаб" href="https://github.com/vodolazskikh" className="font-light text-gray-400 dark:text-gray-300 text-md" />
          </div>

          <div class="max-w-2xl overflow-hidden bg-white shadow sm:rounded-lg">
            <div class="border-t border-gray-200">
              <dl>
                <div class="px-4 py-5 bg-gray-50 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt class="text-sm font-medium text-gray-500">
                    Базовое
                  </dt>
                  <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    <Link title="тейлвинд" href="https://github.com/tailwindlabs/tailwindcss" className="pr-2 pb-2" />
                    <Link title="экстеншн" href="https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss" className="pr-2 pb-2" />


                  </dd>

                </div>
                <div class="px-4 py-5 bg-white sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt class="text-sm font-medium text-gray-500">
                    Кук-бук
                  </dt>
                  <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    <Link title="classnames" href="https://github.com/JedWatson/classnames" className="pr-2 pb-2" />
                    <Link title="eslint" href="https://github.com/francoismassart/eslint-plugin-tailwindcss" className="pr-2 pb-2" />
                  </dd>
                </div>
                <div class="px-4 py-5 bg-gray-50 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt class="text-sm font-medium text-gray-500">
                    Комьюнити
                  </dt>
                  <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    <Link title="RTL" href="https://github.com/20lives/tailwindcss-rtl" className="pr-2 pb-2" />
                    <Link title="кит" href="https://www.tailwind-kit.com/components" className="pr-2 pb-2" />
                  </dd>
                </div>
                <div class="px-4 py-5 bg-white sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt class="text-sm font-medium text-gray-500">
                    Бета
                  </dt>
                  <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    <Link title="v3.2 Beta 2" href="https://github.com/tailwindlabs/tailwindcss/discussions/9574" className="pr-2 pb-2" />
                  </dd>
                </div>
                <div class="px-4 py-5 bg-gray-50 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt class="text-sm font-medium text-gray-500">
                    Про A11y
                  </dt>
                  <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    <Link title="Классная статья" href="https://abatickaya.medium.com/9032d7b64fb2" className="pr-2 pb-2" />
                  </dd>
                </div>
                <div class="px-4 py-5 bg-gray-50 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt class="text-sm font-medium text-gray-500">
                    React Native
                  </dt>
                  <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    <Link title="раз" href="https://github.com/marklawlor/nativewind" className="pr-2 pb-2" />
                    <Link title="два" href="https://github.com/vadimdemedes/tailwind-rn" className="pr-2 pb-2" />
                  </dd>
                </div>
              </dl>
            </div>
          </div>

        </div>
      </div>

    </div>
  </>
}
