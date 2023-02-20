import ProductItem from "../../products/productItems/ProductItem";
import { Unstable_Grid2 as Grid } from "@mui/material";
import Unstable_Grid2 from "@mui/material/Unstable_Grid2";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { userAction } from "@/store/user";
import { useEffect } from "react";
import Outage from "@/components/ui/Outage";
const SavedItems = ({ user, data }) => {
  const isSavedFirstTime = useSelector((store) => store.user.firstTime.saved);
  const dispatch = useDispatch();
  const [savedData, setSavedData] = useState([]);
  useEffect(() => {
    //if it's the first time saved is mounted, fetch products from the database
    if (isSavedFirstTime) {
      fetch("api/products/getSavedProducts", {
        method: "POST",
        body: JSON.stringify({ saved: user.body.saved }),
      })
      .then((res) => res.json())
      .then((res) => {
        setSavedData(res.savedItemsData);
        res && dispatch(userAction.createSavedData(res.savedItemsData));
        dispatch(userAction.firstTimeDone("saved"));
      });
    }
    //else set the saved items regarding to redux
    else {
      setSavedData(data);
    }
  }, [data]);
  if(savedData.length==0){
    return <Outage>No Saved Item found</Outage>
  }
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
