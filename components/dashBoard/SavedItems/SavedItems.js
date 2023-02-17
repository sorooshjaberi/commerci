import ProductItem from "../../products/productItems/ProductItem";
import { Unstable_Grid2 as Grid } from "@mui/material";
import Unstable_Grid2 from "@mui/material/Unstable_Grid2";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { userAction } from "@/store/user";
import { useEffect } from "react";
const SavedItems = ({ user, data }) => {
  console.log("user..", user);
  console.log("data..", data);
  const userStore = useSelector((store) => store.user);
  const isSavedFirstTime = userStore.firstTime.saved;
  console.log('isFirstTime' ,isSavedFirstTime);
  const dispatch = useDispatch();
  const [savedData, setSavedData] = useState([]);
  console.log("usersaved", user.body.saved);
  console.log("data", data);
  useEffect(() => {
    //if it's the first time saved is mounted, fetch products from the database
    if (isSavedFirstTime) {
      fetch("api/products/getSavedProducts", {
        method: "POST",
        body: JSON.stringify({ saved: user.body.saved }),
      })
        .then((res) => res.json())
        .then((res) => {
          console.log("resp", res);
          setSavedData(res.savedItemsData);
          res && dispatch(userAction.createSavedData(res.savedItemsData));
          dispatch(userAction.firstTimeDone("saved"));
        });
    }
    //else set the saved items regarding to redux
    else {
      console.log("not first time", data);
      setSavedData(data);
    }
  }, [data]);
  const products = savedData.map((savedItem) => {
    return (
      <Unstable_Grid2 xs={3} key={savedItem.id}>
        <ProductItem data={savedItem} />
      </Unstable_Grid2>
    );
  });

  return (
    <Grid container spacing="10rem">
      {products}
    </Grid>
  );
};

export default SavedItems;
