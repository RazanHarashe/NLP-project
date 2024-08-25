import { handleSubmit } from './js/formHandler';
import { checkForName } from './js/checkForName';

import './styles/base.scss';
import './styles/resets.scss';
import './styles/footer.scss';
import './styles/form.scss';
import './styles/header.scss';

window.addEventListener('DOMContentLoaded', () => {
    document.getElementById('form').addEventListener('submit', handleSubmit);
});
