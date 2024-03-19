import TopBarNav from "./Components/TopBarNav";
import Card from "./Components/Card";
import InviteCard from "./Components/InviteCard";
import FooterCard from "./Components/FooterCard";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
} from "@remix-run/react";

import mobile from "./images/image-mockups.png";
import { cssBundleHref } from "@remix-run/css-bundle";
import iconAPI from "./images/icon-api.svg";
import iconBuget from "./images/icon-budgeting.svg";
import iconOnboard from "./images/icon-onboarding.svg";
import iconOnline from "./images/icon-online.svg";
import FeatureCard from "./Components/FeatureCard";
import PictureCard from "./Components/PictureCard";
import imageMoney from "./images/image-currency.jpg";
import imageRest from "./images/image-restaurant.jpg";
import imagePlane from "./images/image-plane.jpg";
import imageConf from "./images/image-confetti.jpg";

export const links = () => {
  return [
    ...(cssBundleHref ? [{ rel: "stylesheet", href: cssBundleHref }] : []),
  ];
};

export default function App() {

  const cardInformation = {
    title: "Why choose Easybank?",
    description: "We leverage Open Banking to turn your bank account into your financial hub. Control you finances like never before."
  }
  const atricles= [
    {
      title: "Receive money in any currency with no fees",
      author: "Claire Robinson",
      image: imageMoney,
      description: "The world is getting smaller and we’re becoming more mobile. So why should you be forced to only receive money in a single …"
    },
    {
      title: "Treat yourself without worrying about money",
      author: "Wilson Hutton",
      image: imageRest,
      description: "Our simple budgeting feature allows you to separate out your spending and set realistic limits each month. That means you …"
    },
    {
      title: "Take your easybank card wherever you go",
      author: "Wilson Hutton",
      image: imagePlane,
      description: "We want you to enjoy your travels. This is why we don’t charge any fees on purchases while you’re abroad. We’ll even show you …"
    },
    {
      title: "Our invite-only Beta accounts are now live!",
      author: "Claire Robinson",
      image: imageConf,
      description: "After a lot of hard work by the whole team, we’re excited to launch our closed beta. It’s easy to request an invite through the site ..."
    },
  ]
  const features = [
    {
      title: "Online Banking",
      icon: iconOnline,
      description: "Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world."
    },
    {
      title: "Simple Budgeting",
      icon: iconBuget,
      description: "See exactly where your money goes each month. Receive notifications when you’re close to hitting your limits."
    },
    {
      title: "Fast Onboarding",
      icon: iconOnboard,
      description: "We don’t do branches. Open your account in minutes online and start taking control of your finances right away."
    },
    {
      title: "Open API",
      icon: iconAPI,
      description: "Manage your savings, investments, pension, and much more from one account. Tracking your money has never been easier."
    },
  ]
  return (
    <html>
      <head>
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Public+Sans:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet" />
        <link
          rel="icon"
          href="data:image/x-icon;base64,AA"
        />
        <Meta />
        <Links />
      </head>
      <body>
        <TopBarNav></TopBarNav>
        <div className="banner-card-container">
          <InviteCard></InviteCard>
          <div className="banner">
            <div className="mobile">
              <img src={mobile} alt="mobile image" />
            </div>
          </div>

        </div>
        <div className="layout">
        <Card
          title={cardInformation.title}
          description={cardInformation.description}
          color="#f3f4f6"
          rest={features.map(feature =>
            <FeatureCard
              title={feature.title}
              icon={feature.icon}
              description={feature.description}
            />)}
        />
        <Card
          title={"Latest Articles"}
          color="#fafafa"
          rest={atricles.map(atricle =>
            <PictureCard
              title={atricle.title}
              author={atricle.author}
              description={atricle.description}
              image={atricle.image}
            ></PictureCard>)}
        />
        </div>
        <FooterCard></FooterCard>
        <Outlet />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
