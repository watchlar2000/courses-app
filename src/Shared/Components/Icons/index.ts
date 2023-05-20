import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faArrowLeft,
  faCheck,
  faLock,
  faMoon,
  faPlay,
  faSun,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

library.add(faPlay, faArrowLeft, faLock, faCheck, faMoon, faSun);

export default FontAwesomeIcon;
