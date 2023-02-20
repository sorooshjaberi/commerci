import AppsOutage from "@mui/icons-material/AppsOutage";
const Outage = ({ children , size}) => {
  return (
    <div
      className="center"
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <AppsOutage sx={{ fontSize: size ||"20rem" }} />
      <p style={{ fontSize: "2rem" }}>{children || "No history found!"}</p>
    </div>
  );
};

export default Outage;
