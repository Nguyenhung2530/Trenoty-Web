import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import SvgIcon from "@mui/material/SvgIcon";

function App() {
  return (
    <>
      <Button variant="text">Text</Button>
      <Button variant="contained">Contained</Button>
      <Button variant="outlined">Outlined</Button>
      <IconButton aria-label="delete">
        <SvgIcon>
          <path d="M20 12l-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8 8-8z" />
        </SvgIcon>
      </IconButton>
    </>
  );
}

export default App;
