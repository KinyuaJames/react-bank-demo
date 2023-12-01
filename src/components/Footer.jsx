import styles from "../styles";
import { logo } from "../assets";
import { footerLinks, socialMedia } from "../constants";

const Footer = () => (
  <section className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
    <div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full`}>
      <div className="flex-1 flex flex-col justify-start mr-10">
        <img
          src={logo}
          alt="gniasbank"
          className="w-[266px] h-[72px] object-contain "
        />
        <p className={`${styles.paragraph} mt-4 max-w-[320px]`}>
          A new way to make payments easily, reliably and securely
        </p>
      </div>
      <div className="flex-[1.5] w-full flex flex-row justify-between flex-wrap md:mt-0 mt-10 ">
        {footerLinks.map((footers) => (
          <div
            key={footers.title}
            className="flex flex-col ss:my-0 my-4 min-w-[150px]"
          >
            <h4 className="uppercase font-glacialbold font-medium text-[18px] leading-[27px] text-white">
              {footers.title}
            </h4>
            <ul className="">
              {footers.links.map((link, index) => (
                <li
                  key={link.name}
                  className={`capitalize font-glacialindiff font-normal text-[16px] leading-[24px]
                   text-dimWhite transition-all ease-in-out duration-300 hover:text-[18px] hover:leading-[26px] hover:text-white hover:brightness-200  cursor-pointer ${
                     index == footers.links.lenght - 1 ? "mb-4" : "mb-0"
                   }`}
                >
                  {link.name}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
    <div className="w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3f3r45]">
      <p className=" font-glacialbold font-medium text-center text-[18px] leadning-[27px] text-white ">
        2023 GniasBanks &copy; All Rights Reserved
      </p>
      <div className="flex flex-row md:mt-0 mt-6 ">
        {socialMedia.map((social, index) => (
          <img
            key={social.id}
            src={social.icon}
            alt={social.id}
            className={`w-[21px] h-[21px] object-contain cursor-pointer brightness-75 hover:brightness-200 ${
              index !== socialMedia.length - 1 ? "mr-6" : "mr-0"
            }`}
          />
        ))}
      </div>
    </div>
  </section>
);

export default Footer;
