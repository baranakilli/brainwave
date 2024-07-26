import { socials } from "../constants";
import Section from "./Section";

const Footer = () => {
  return (
    <Section crosses className="!px-0 !py-10 ">
      <div className="container flex justify-center items-center gap-10 sm:justify-between max-sm:flex-col">
        <p className="caption text-n-4 lg:block">
          Developed by{" "}
          <strong>
            <p className="uppercase font-code text-base text-n-3">
              Baran Akıllı
            </p>
          </strong>
        </p>
        <div className="flex gap-5 flex-wrap">
          {socials.map((item) => (
            <a
              key={item.id}
              href={item.url}
              target="_blank"
              className="flex items-center justify-center w-12 h-12 bg-n-7 rounded-full transition-colors hover:bg-n-6 [&>img]:odd:size-[1.6rem]"
            >
              <img src={item.iconUrl} width={21} height={21} alt={item.title} />
            </a>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Footer;
