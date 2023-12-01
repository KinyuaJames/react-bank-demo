import styles from "../styles";
import { clients } from "../constants";

const Clients = () => (
  <section className={`${styles.flexCenter} my-4`}>
    <div className={`${styles.flexCenter} flex-wrap w-full `}>
      {clients.map((client) => (
        <div
          key={client.id}
          className={`flex-1 ${styles.flexCenter} sm:min-w-[192px] min-w-[120px]`}
        >
          <img
            src={client.logo}
            alt="client"
            className="sm:min-w-[192px] w-[100px] object-contain brightness-90 transition-all ease-in-out duration-200 hover:brightness-200"
          />
        </div>
      ))}
    </div>
  </section>
);

export default Clients;
