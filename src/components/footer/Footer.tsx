import { VITE_URL, REACT_URL, README_URL } from "@/common/constants";
import reactLogo from "@/assets/react.svg";
import viteLogo from "@/assets/vite.svg";

const Footer = () => {
  return (
    <footer className="flex flex-col items-center gap-4 mt-8 mb-8">
      <label htmlFor="footer-logos">Built with</label>
      <div id="footer-logos" className="flex gap-4">
        <a href={VITE_URL} target="_blank">
          <img src={viteLogo} className="h-8" alt="Vite logo" />
        </a>
        <a href={REACT_URL} target="_blank">
          <img src={reactLogo} className="h-8" alt="React logo" />
        </a>
      </div>
      <a
        href={README_URL}
        target="_blank"
        className="text-gray-500 hover:text-gray-300"
      >
        readme.md
      </a>
    </footer>
  );
};

export default Footer;
