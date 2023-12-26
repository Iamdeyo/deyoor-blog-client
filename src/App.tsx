import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import useGetUser from "./hooks/useGetUser";

function App() {
  const { isLoading } = useGetUser();

  return (
    <>
      <Navbar />
      <main className="mx-auto max-w-2xl pt-6 pb-20 px-6 sm:px-4 md:px-0">
        <Outlet />
      </main>
    </>
  );
}

export default App;
