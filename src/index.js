import { createRoot } from 'react-dom/client';
import HeroesApp from './HeroesApp';


const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<HeroesApp />);
