import React from "react";

const SocialShare = [
  {
    iconName: "instagram",
    link: "https://www.instagram.com/mdhlaj.me/",
  },
  {
    iconName: "github2",
    link: "https://github.com/Muhammad-Midhlaj",
  },
  { iconName: "twitter", 
  link: "https://twitter.com/Midhlaj_Rasheed" },
  
 
  {
    iconName: "Discord",
    link: "https://discord.gg/hf2vZrqvUC",
  },
  {
    iconName: "reddit",
    link: "https://www.reddit.com/user/proc0der",
  },
  {
    iconName: "linkedin",
    link: "https://www.linkedin.com/in/muhammad-midhlaj/",
  },
  {
    iconName: "whatsapp2",
    link: "https://wa.me/+919020323000",
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
