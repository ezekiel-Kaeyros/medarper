import { Button } from "../../button/Button";

const Formfaq = () => {
    return (
      <form className="w-full">
        <div className="grid grid-cols-2 gap-5 mb-6">
          <div className="grid grid-rows-4 gap-6">
            <input
              type="text"
              className="w-full bg-[#D9D9D9A6]  py-2 sm:h-[70px] h-5 rounded-[5px] lg:text-3xl sm:texr-base text-xs sm:pl-5 pl-1 text-[#2F804A] placeholder:text-[#2F804A]"
              placeholder="Vorname*"
            />
            <input
              type="text"
              className="w-full bg-[#D9D9D9A6] py-2 sm:h-[70px] h-5 rounded-[5px] lg:text-3xl sm:texr-base text-xs sm:pl-5 pl-1 text-[#2F804A] placeholder:text-[#2F804A]"
              placeholder="Nachname*"
            />
            <input
              type="text"
              className="w-full bg-[#D9D9D9A6] py-2 sm:h-[70px] h-5 rounded-[5px] lg:text-3xl sm:texr-base text-xs sm:pl-5 pl-1 text-[#2F804A] placeholder:text-[#2F804A]"
              placeholder="Thema*"
            />
            <input
              type="text"
              className="w-full bg-[#D9D9D9A6] py-2 sm:h-[70px] h-5 rounded-[5px] lg:text-3xl sm:texr-base text-xs sm:pl-5 pl-1 text-[#2F804A] placeholder:text-[#2F804A] "
              placeholder="E-Mail*"
            />
          </div>
          <textarea
            className=" bg-[#D9D9D9A6] py-2 rounded-[5px] lg:text-3xl sm:texr-base text-xs sm:pl-5 pl-1 pt-2 text-[#2F804A] placeholder:text-[#2F804A]"
            name=""
            id=""
            cols={30}
            placeholder="Nachricht*"
          ></textarea>
        </div>
        <div className="flex justify-between">
          <div></div>
          <Button
            disabled
            className="text-end w-auto sm:text-base text-xs rounded-xl pl-4 pr-5 "
          >
            Senden
          </Button>
        </div>
      </form>
    );
}

export default Formfaq