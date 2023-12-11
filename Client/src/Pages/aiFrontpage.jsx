import * as React from 'react';

export default function AIfrontpage(props) {
  return (
    <div className="bg-white flex flex-col items-stretch pb-12">
      <div className="flex-col overflow-hidden relative flex min-h-[532px] w-full justify-center items-stretch pl-10 pr-5 py-12 max-md:max-w-full max-md:pl-5">
        <img
          loading="lazy"
          srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/66fa58115c1e3e72c17b3eccd1117dc81f5bdbce9d7717e6967bbb361018a786?apiKey=e0c67a2aaffa4b4fa475213d30af4a48&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/66fa58115c1e3e72c17b3eccd1117dc81f5bdbce9d7717e6967bbb361018a786?apiKey=e0c67a2aaffa4b4fa475213d30af4a48&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/66fa58115c1e3e72c17b3eccd1117dc81f5bdbce9d7717e6967bbb361018a786?apiKey=e0c67a2aaffa4b4fa475213d30af4a48&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/66fa58115c1e3e72c17b3eccd1117dc81f5bdbce9d7717e6967bbb361018a786?apiKey=e0c67a2aaffa4b4fa475213d30af4a48&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/66fa58115c1e3e72c17b3eccd1117dc81f5bdbce9d7717e6967bbb361018a786?apiKey=e0c67a2aaffa4b4fa475213d30af4a48&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/66fa58115c1e3e72c17b3eccd1117dc81f5bdbce9d7717e6967bbb361018a786?apiKey=e0c67a2aaffa4b4fa475213d30af4a48&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/66fa58115c1e3e72c17b3eccd1117dc81f5bdbce9d7717e6967bbb361018a786?apiKey=e0c67a2aaffa4b4fa475213d30af4a48&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/66fa58115c1e3e72c17b3eccd1117dc81f5bdbce9d7717e6967bbb361018a786?apiKey=e0c67a2aaffa4b4fa475213d30af4a48&"
          className="absolute h-full w-full object-cover object-center inset-0"
        />
        <div className="relative flex justify-between gap-5 mt-16 mb-11 items-start max-md:max-w-full max-md:flex-wrap max-md:my-10">
          <div className="text-white text-9xl italic font-black grow whitespace-nowrap mt-9 max-md:max-w-full max-md:text-4xl">
            REapp
          </div>
          <div className="bg-sky-300 self-stretch flex grow basis-[0%] flex-col items-center pt-5 pb-10 px-12 rounded-xl max-md:max-w-full max-md:px-5">
            <div className="text-black text-4xl font-bold whitespace-nowrap">
              Tilmeld dig i dag.
            </div>
            <div className="justify-center text-black text-opacity-30 text-center text-base bg-white self-stretch items-center mt-5 px-16 py-2 rounded-3xl max-md:px-5">
              Brugernavn
            </div>
            <div className="justify-center text-black text-opacity-30 text-center text-base bg-white self-stretch items-center mt-3.5 px-16 py-2 rounded-3xl max-md:px-5">
              Adgangskode
            </div>
            <div className="justify-center text-black text-opacity-30 text-center text-base bg-white self-stretch items-center mt-3.5 px-16 py-2.5 rounded-3xl max-md:px-5">
              E-mail
            </div>
            <div className="text-black text-center text-base whitespace-nowrap mt-4">
              Har du allerede en konto?
            </div>
            <div className="justify-center text-black text-center text-base bg-white w-[182px] max-w-full items-center mt-5 px-16 py-1.5 rounded-3xl max-md:px-5">
              Log Ind
            </div>
          </div>
        </div>
      </div>
      <div className="self-center w-full max-w-[1148px] mt-10 mb-28 px-5 max-md:max-w-full max-md:mb-10">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
          <div className="flex flex-col items-stretch w-[38%] max-md:w-full max-md:ml-0">
            <div className="flex grow flex-col items-center max-md:mt-10">
              <img
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/10eed94d9cb7321201b18254dce10e291f86e9126f4a5341462ce70a4f338bf7?apiKey=e0c67a2aaffa4b4fa475213d30af4a48&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/10eed94d9cb7321201b18254dce10e291f86e9126f4a5341462ce70a4f338bf7?apiKey=e0c67a2aaffa4b4fa475213d30af4a48&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/10eed94d9cb7321201b18254dce10e291f86e9126f4a5341462ce70a4f338bf7?apiKey=e0c67a2aaffa4b4fa475213d30af4a48&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/10eed94d9cb7321201b18254dce10e291f86e9126f4a5341462ce70a4f338bf7?apiKey=e0c67a2aaffa4b4fa475213d30af4a48&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/10eed94d9cb7321201b18254dce10e291f86e9126f4a5341462ce70a4f338bf7?apiKey=e0c67a2aaffa4b4fa475213d30af4a48&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/10eed94d9cb7321201b18254dce10e291f86e9126f4a5341462ce70a4f338bf7?apiKey=e0c67a2aaffa4b4fa475213d30af4a48&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/10eed94d9cb7321201b18254dce10e291f86e9126f4a5341462ce70a4f338bf7?apiKey=e0c67a2aaffa4b4fa475213d30af4a48&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/10eed94d9cb7321201b18254dce10e291f86e9126f4a5341462ce70a4f338bf7?apiKey=e0c67a2aaffa4b4fa475213d30af4a48&"
                className="aspect-square object-contain object-center w-[199px] overflow-hidden max-w-full"
              />
              <div className="text-black text-center text-4xl self-stretch mt-7">
                Personlig støtte
              </div>
            </div>
          </div>
          <div className="flex flex-col items-stretch w-[39%] ml-5 max-md:w-full max-md:ml-0">
            <div className="flex grow flex-col items-center max-md:mt-10">
              <img
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/7ba98579b050f2bb5c4260fb81cf158218ab95c7df35e8c8f6ca371cd794c5c1?apiKey=e0c67a2aaffa4b4fa475213d30af4a48&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/7ba98579b050f2bb5c4260fb81cf158218ab95c7df35e8c8f6ca371cd794c5c1?apiKey=e0c67a2aaffa4b4fa475213d30af4a48&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/7ba98579b050f2bb5c4260fb81cf158218ab95c7df35e8c8f6ca371cd794c5c1?apiKey=e0c67a2aaffa4b4fa475213d30af4a48&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/7ba98579b050f2bb5c4260fb81cf158218ab95c7df35e8c8f6ca371cd794c5c1?apiKey=e0c67a2aaffa4b4fa475213d30af4a48&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/7ba98579b050f2bb5c4260fb81cf158218ab95c7df35e8c8f6ca371cd794c5c1?apiKey=e0c67a2aaffa4b4fa475213d30af4a48&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/7ba98579b050f2bb5c4260fb81cf158218ab95c7df35e8c8f6ca371cd794c5c1?apiKey=e0c67a2aaffa4b4fa475213d30af4a48&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/7ba98579b050f2bb5c4260fb81cf158218ab95c7df35e8c8f6ca371cd794c5c1?apiKey=e0c67a2aaffa4b4fa475213d30af4a48&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/7ba98579b050f2bb5c4260fb81cf158218ab95c7df35e8c8f6ca371cd794c5c1?apiKey=e0c67a2aaffa4b4fa475213d30af4a48&"
                className="aspect-square object-contain object-center w-[200px] overflow-hidden max-w-full"
              />
              <div className="text-black text-center text-4xl self-stretch mt-7">
                Daglige opgaver
              </div>
            </div>
          </div>
          <div className="flex flex-col items-stretch w-[23%] ml-5 max-md:w-full max-md:ml-0">
            <div className="flex flex-col items-center max-md:mt-10">
              <img
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/24f52afbb1fa98c90ff040ff284d1738a4421d46e90ae48c8115a77b00131195?apiKey=e0c67a2aaffa4b4fa475213d30af4a48&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/24f52afbb1fa98c90ff040ff284d1738a4421d46e90ae48c8115a77b00131195?apiKey=e0c67a2aaffa4b4fa475213d30af4a48&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/24f52afbb1fa98c90ff040ff284d1738a4421d46e90ae48c8115a77b00131195?apiKey=e0c67a2aaffa4b4fa475213d30af4a48&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/24f52afbb1fa98c90ff040ff284d1738a4421d46e90ae48c8115a77b00131195?apiKey=e0c67a2aaffa4b4fa475213d30af4a48&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/24f52afbb1fa98c90ff040ff284d1738a4421d46e90ae48c8115a77b00131195?apiKey=e0c67a2aaffa4b4fa475213d30af4a48&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/24f52afbb1fa98c90ff040ff284d1738a4421d46e90ae48c8115a77b00131195?apiKey=e0c67a2aaffa4b4fa475213d30af4a48&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/24f52afbb1fa98c90ff040ff284d1738a4421d46e90ae48c8115a77b00131195?apiKey=e0c67a2aaffa4b4fa475213d30af4a48&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/24f52afbb1fa98c90ff040ff284d1738a4421d46e90ae48c8115a77b00131195?apiKey=e0c67a2aaffa4b4fa475213d30af4a48&"
                className="aspect-[1.08] object-contain object-center w-[215px] overflow-hidden"
              />
              <div className="text-black text-center text-4xl mt-7">Fællesskab</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
