//initialization
// - find relevant section
import { showView } from './dom.js'
// - detach section
const section = document.getElementById('movie-details');
section.remove();


// display logic
export function showDetails() {
    showView(section);
}