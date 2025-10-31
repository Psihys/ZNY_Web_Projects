import './styles/App.scss'
import './styles/tw.css'
import './scripts/common/index.js'
import './scripts/app/aboutPage.js'

let cleanupFunction = () => {};
const page = document.body.dataset.page;

const routes = {
    About:    () => import('./scripts/app/aboutPage.js').then(m => m.initAbout()
        .then(abortFn => {
            cleanupFunction = abortFn;
            console.log('Ініціалізація About Page завершена. Функція скасування збережена.');
        })),
};

if (routes[page]) {
    routes[page]().catch(err => {
        console.error('Помилка ініціалізації сторінки:', err);
    });
}
