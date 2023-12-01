import React from "react";
import styles from "../styles";
import { stats } from "../constants";

const Stats = () => (
  <section className={`${styles.flexCenter} flex-row flex-wrap sm:mb-20 mb-6`}>
    {stats.map((stat) => (
      <div
        key={stat.id}
        className={`flex flex-1 justify-start items-center flex-row m-3 `}
      >
        <h4 className="font-glacialbold font-semibold xs:text-[40px] text=[30px] xs:leading-[43px] text-white ">
          {stat.value}
        </h4>
        <p className="font-glacialindiff font-normal xs:text-[20px] text-[15px] xs:leading-[26px] leading-[21px] text-gradient uppercase ml-3 ">
          {stat.title}{" "}
        </p>
      </div>
    ))}
  </section>
);

export default Stats;
