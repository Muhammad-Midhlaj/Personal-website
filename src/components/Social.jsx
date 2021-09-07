import React from "react";

const SocialShare = [
  {
    iconName: "instagram",
    link: "https://www.instagram.com/midhlaj.4/",
  },
  {
    iconName: "facebook",
    link: "https://www.facebook.com/midlaj.zxz",
  },
  { iconName: "twitter", link: "https://twitter.com/MidlajZxz" },
  
 
  {
    iconName: "tik-tok",
    link: "https://www.tiktok.com/@muhd_midlaj?lang=en",
  },
];
const Social = () => {
  return (
    <>
      <ul className="social">
        {SocialShare.map((val, i) => (
          <li key={i}>
            <a href={`${val.link}`} target="_blank" rel="noreferrer">
              <img
                className="svg"
                src={`/assets/img/svg/social/${val.iconName}.svg`}
                alt="social"
              ></img>
            </a>
          </li>
        ))}
      </ul>
      {/* END SOCIAL */}
    </>
  );
};

export default Social;
