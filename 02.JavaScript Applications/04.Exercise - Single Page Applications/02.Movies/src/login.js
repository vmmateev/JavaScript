//initialization
// - find relevant section
import { showView } from './dom.js'
// - detach section
const section = document.getElementById('form-login');
section.remove();


// display logic
export function showLogin() {
    showView(section);
}