import { Box } from "@mui/material";

export default function ThemeSwitcher({ darkMode, handleClick }) {
  const transition = "all 250ms ease-in-out";

  return (
    <Box
      fontSize={"1.5rem"}
      sx={{
        cursor: "pointer",
        ":hover": { transform: "translateY(-3px)", transition: transition },
      }}
    >
      {darkMode ? (
        <span onClick={handleClick} aria-label="Full Moon" role="img">
          🌕
        </span>
      ) : (
        <span onClick={handleClick} aria-label="New Moon" role="img">
          🌑
        </span>
      )}
    </Box>
  );
}
