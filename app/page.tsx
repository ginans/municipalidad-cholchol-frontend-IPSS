import { SiteNavbar } from "../components/layout/site-navbar";
import { HomeInteractive } from "../components/sections/home-interactive";

export default function Home() {
  return (
    <div id="inicio" className="relative flex-1 municipal-bg">
      <SiteNavbar />
      <HomeInteractive />
    </div>
  );
}
