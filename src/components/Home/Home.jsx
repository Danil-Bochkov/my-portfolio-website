import Style from "./Home.module.scss";
import me from "../../images/me.png";
import classNames from "classnames";
import EmojiList from "./EmojiList";
import SocialIcon from "./SocialIcon";
import { Box } from "@mui/material";
import { data } from "../../Data/data";

export default function Home() {
  return (
    <Box
      component={"main"}
      display={"flex"}
      flexDirection={{ xs: "column", md: "row" }}
      alignItems={"center"}
      justifyContent={"center"}
      minHeight={"calc(100vh - 175px)"}
    >
      <Box
        className={classNames(Style.avatar, Style.shadowed)}
        alt={"image of developer"}
        style={{ background: data.gradient }}
        component={"img"}
        src={me}
        width={{ xs: "35vh", md: "40vh" }}
        height={{ xs: "35vh", md: "40vh" }}
        borderRadius={"50%"}
        p={"0.75rem"}
        mb={{ xs: "1rem", sm: 0 }}
        mr={{ xs: 0, md: "2rem" }}
      />
      <Box className={Style.wrapperInfo}>
        <h1>
          Hi, I'm{" "}
          <span
            style={{
              background: data.gradient,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            {data.firstName}
          </span>
          <span className={Style.hand}>✋</span>
        </h1>
        <h2>I'm {data.position}.</h2>
        <Box component={"ul"} p={"0.8rem"}>
          {data.miniBio.map((bio, index) => (
            <EmojiList key={index} emoji={bio.emoji} text={bio.text} />
          ))}
        </Box>
        <Box
          display={"flex"}
          gap={"1.5rem"}
          justifyContent={"center"}
          fontSize={{ xs: "2rem", md: "2.5rem" }}
        >
          {data.socials.map((social, index) => (
            <SocialIcon
              key={index}
              link={social.link}
              icon={social.icon}
              label={social.label}
            />
          ))}
        </Box>
      </Box>
    </Box>
  );
}
