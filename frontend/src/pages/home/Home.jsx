import Sidebar from "../../components/sidebar/Sidebar";
import MessageBox from "../../components/messages/MessageBox";

import { styles } from "../../styles";

const Home = () => {
  return (
    <>
        <div
          className={`flex sm:h-[450px] md:h-[550px] rounded-lg overflow-hidden ${styles.primary} `}
        >
          <Sidebar />
          <MessageBox />
        </div>
    </>
  );
};

export default Home;
