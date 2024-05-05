import { Link } from "react-router-dom";
import homeStyles from '../styles/home.css';

export const meta = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <main id="content">
      <h1> Better way of keeping track of your notes! </h1>
      <p> Try our early beta and never lose the track of your notes again! </p>
      <p id="cta">
        <Link to="/notes">Try Now!</Link>
      </p>
    </main>
  );
}

export function links() {
  return [{ rel: 'stylesheet' , href: homeStyles }];
} 