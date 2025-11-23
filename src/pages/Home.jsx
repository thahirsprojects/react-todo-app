import TodoCard from "../components/TodoCard";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col bg-linear-to-r from-blue-300 to-white">
      
      <main className="grow flex items-center justify-center">
        <TodoCard />
      </main>

      <Footer />
    </div>
  );
};

export default Home;
