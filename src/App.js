import "./App.css";
import Header from "./components/Header/Header";
import Productstatus from "./components/Productstatus/Productstatus";
import Search from "./components/Search/Search";
import Productdeatis from "./components/Productdeatis/Productdeatis";
import { useEffect } from "react";
import data from "./data/db";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "./redux/action";
import EditProductModalContent from "./components/EditProductModalContent/EditProductModalContent";
function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    console.log(data);
    dispatch(addItem(data));
  }, []);
  return (
    <div>
      <Header />
      <Productstatus />
      <Productdeatis />
    </div>
  );
}

export default App;
