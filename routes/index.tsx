import { Head } from "$fresh/runtime.ts";

export default function Home() {
  return (
    <>
      <Head>
        <title>Инфа для конференций</title>
      </Head>
      <div class="flex items-center justify-center p-20">
        <a href="/moscow_css" class="hover:text-blue-400">moscow css 22.03.2023</a>
      </div>
    </>
  );
}
