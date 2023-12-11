import * as React from 'react';

export default function AIprofilepage(props) {
  return (
    <div className="bg-white flex flex-col pb-12">
      <div className="bg-sky-300 self-stretch flex w-full justify-between gap-5 pl-5 pr-20 py-5 items-start max-md:max-w-full max-md:flex-wrap max-md:px-5">
        <div className="text-black text-4xl italic grow whitespace-nowrap">
          REapp
        </div>
        <div className="flex items-stretch justify-between gap-5 max-md:max-w-full max-md:flex-wrap max-md:justify-center">
          <div className="justify-center text-black text-center text-xl italic bg-white grow items-stretch px-6 py-2.5 max-md:px-5">
            Ressourcer
          </div>
          <div className="justify-center text-black text-center text-xl italic bg-white grow items-stretch px-10 py-2.5 max-md:px-5">
            Forside
          </div>
          <div className="justify-center text-black text-center text-xl italic bg-white grow items-stretch px-5 py-2.5 max-md:px-5">
            Fællesskab
          </div>
        </div>
      </div>
      <div className="justify-center text-black text-center text-8xl self-center whitespace-nowrap mt-10 max-md:max-w-full max-md:text-4xl">
        Brugerprofil
      </div>
      <div className="self-center w-full max-w-[982px] mt-7 px-5 max-md:max-w-full">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
          <div className="flex flex-col items-stretch w-[30%] max-md:w-full max-md:ml-0">
            <img
              loading="lazy"
              srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/2b6017f901476ba56865b575956b64f09d0ec29d5fdf7b241a6cd7d16cfa6261?apiKey=e0c67a2aaffa4b4fa475213d30af4a48&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/2b6017f901476ba56865b575956b64f09d0ec29d5fdf7b241a6cd7d16cfa6261?apiKey=e0c67a2aaffa4b4fa475213d30af4a48&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/2b6017f901476ba56865b575956b64f09d0ec29d5fdf7b241a6cd7d16cfa6261?apiKey=e0c67a2aaffa4b4fa475213d30af4a48&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/2b6017f901476ba56865b575956b64f09d0ec29d5fdf7b241a6cd7d16cfa6261?apiKey=e0c67a2aaffa4b4fa475213d30af4a48&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/2b6017f901476ba56865b575956b64f09d0ec29d5fdf7b241a6cd7d16cfa6261?apiKey=e0c67a2aaffa4b4fa475213d30af4a48&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/2b6017f901476ba56865b575956b64f09d0ec29d5fdf7b241a6cd7d16cfa6261?apiKey=e0c67a2aaffa4b4fa475213d30af4a48&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/2b6017f901476ba56865b575956b64f09d0ec29d5fdf7b241a6cd7d16cfa6261?apiKey=e0c67a2aaffa4b4fa475213d30af4a48&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/2b6017f901476ba56865b575956b64f09d0ec29d5fdf7b241a6cd7d16cfa6261?apiKey=e0c67a2aaffa4b4fa475213d30af4a48&"
              className="aspect-square object-contain object-center w-full overflow-hidden max-md:mt-9"
            />
          </div>
          <div className="flex flex-col items-stretch w-[36%] ml-5 max-md:w-full max-md:ml-0">
            <div className="flex flex-col items-stretch max-md:mt-9">
              <div className="bg-zinc-300 flex flex-col items-center px-3.5 py-2">
                <div className="text-black text-center text-xl italic max-w-[307px]">
                  Fulde navn
                </div>
                <div className="justify-center text-black text-center text-xl italic bg-white self-stretch items-stretch mt-2 px-10 py-2.5 max-md:px-5">
                  Luna Eveline Skygaard
                </div>
              </div>
              <div className="bg-zinc-300 flex flex-col items-center mt-8 pt-1.5 pb-3.5 px-3.5">
                <div className="text-black text-center text-xl italic max-w-[308px]">
                  Alder
                </div>
                <div className="justify-center text-black text-center text-xl italic bg-white self-stretch items-center mt-2 px-16 py-2.5 max-md:px-5">
                  27 år
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-stretch w-[34%] ml-5 max-md:w-full max-md:ml-0">
            <div className="flex grow flex-col items-stretch max-md:mt-9">
              <div className="bg-zinc-300 flex flex-col items-center px-3.5 py-2">
                <div className="text-black text-center text-xl italic max-w-[308px]">
                  E-mail
                </div>
                <div className="justify-center text-black text-center text-xl italic bg-white self-stretch items-stretch mt-2 pl-2.5 pr-1.5 py-2.5">
                  navn.efternavn@example.com
                </div>
              </div>
              <div className="bg-zinc-300 flex flex-col mt-8 pt-1.5 pb-3.5 px-3.5">
                <div className="text-black text-center text-xl italic self-center max-w-[308px]">
                  Interesser & hobby
                </div>
                <div className="justify-center text-black text-center text-xl italic max-w-[303px] bg-white self-stretch items-center px-16 py-2.5 max-md:px-5">
                  Fuglekigning
                </div>
                <div className="justify-center text-black text-center text-xl italic bg-white self-stretch items-center mt-3.5 px-16 py-2.5 max-md:px-5">
                  Dykning
                </div>
                <div className="justify-center text-black text-center text-xl italic bg-white self-stretch items-stretch mt-3.5 px-4 py-2.5">
                  Romantiske poesioplevelser
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="self-center w-full max-w-[982px] mt-10 mb-28 max-md:max-w-full max-md:mb-10">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
          <div className="flex flex-col items-stretch w-[67%] max-md:w-full max-md:ml-0">
            <div className="bg-zinc-300 flex grow flex-col items-center w-full pt-2 pb-5 px-6 max-md:max-w-full max-md:mt-10 max-md:px-5">
              <div className="justify-center text-black text-center text-xl italic whitespace-nowrap">
                Om mig
              </div>
              <div className="text-black text-sm italic bg-white self-stretch items-stretch mt-1 pt-3 pb-20 px-3 max-md:max-w-full">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy text
                ever since the 1500s, when an unknown printer took a galley of type
                and scrambled it to make a type specimen book. It has survived not
                only five centuries, but also the leap into electronic typesetting,
                remaining essentially unchanged. It was popularised in the 1960s with
                the release of Letraset sheets containing Lorem Ipsum passages, and
                more recently with desktop publishing software like Aldus PageMaker
                including versions of Lorem Ipsum.
              </div>
            </div>
          </div>{' '}
          <div className="flex flex-col items-stretch w-[33%] ml-5 max-md:w-full max-md:ml-0">
            <div className="bg-zinc-300 flex w-full grow flex-col mx-auto pt-1.5 pb-4 px-4 max-md:mt-10">
              <div className="text-black text-center text-xl italic self-center max-w-[308px]">
                Afhængighed
              </div>{' '}
              <div className="justify-center text-black text-center text-xl italic max-w-[297px] bg-white self-stretch items-center px-16 py-3 max-md:px-5">
                Alkohol
              </div>{' '}
              <div className="justify-center text-black text-center text-xl italic max-w-[297px] bg-white self-stretch items-center mt-3.5 px-16 py-2.5 max-md:px-5">
                Cigaretter
              </div>{' '}
              <div className="justify-center text-black text-center text-xl italic max-w-[297px] bg-white self-stretch items-center mt-3.5 px-16 py-3 max-md:px-5">
                Koffein
              </div>{' '}
              <div className="justify-center text-black text-center text-xl italic max-w-[297px] bg-white self-stretch items-center mt-3.5 px-16 py-3 max-md:px-5">
                Lim
              </div>{' '}
              <div className="self-stretch flex items-center justify-between gap-5 mt-4 px-px">
                <div className="text-black text-center text-xl italic grow whitespace-nowrap my-auto">
                  Skjul?
                </div>{' '}
                <div className="border bg-green-600 self-stretch flex aspect-[1.7096774193548387] flex-col justify-center items-center pl-6 rounded-3xl border-solid border-black max-md:pl-5">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/1ae011909ef3858b6954b0052ee5049423e224677dc31f491872888e6ff36734?apiKey=e0c67a2aaffa4b4fa475213d30af4a48&"
                    className="aspect-square object-contain object-center w-[31px] fill-white stroke-[1px] stroke-black overflow-hidden"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
