function IconLink({ link, title, icon }) {
  //   const { link, title, icon } = props;
  return (
    <a href={link} target={"_blank"} rel="noopener noreferrer">
      <i className={icon} /> {title}
    </a>
  );
}

export default IconLink;
