import Sidebar from "../../components/sidebar/Sidebar";
import MessageBox from "../../components/messages/MessageBox";

import { styles } from "../../styles";

const Home = () => {
  return (
    <>
      <div className="flex justify-center items-center h-[100vh]">
        <div
          className={`flex sm:h-[450px] md:h-[550px] rounded-lg overflow-hidden ${styles.primary} `}
        >
          <Sidebar />
          <MessageBox />
        </div>
      </div>
    </>
  );
};

export default Home;
