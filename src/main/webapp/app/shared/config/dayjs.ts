import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import duration from 'dayjs/plugin/duration';
import relativeTime from 'dayjs/plugin/relativeTime';

// jhipster-needle-i18n-language-dayjs-imports - JHipster will import languages from dayjs here
import 'dayjs/locale/fr';
import 'dayjs/locale/cs';
import 'dayjs/locale/en';
import 'dayjs/locale/de';
import 'dayjs/locale/el';
import 'dayjs/locale/pl';
import 'dayjs/locale/pt-br';
import 'dayjs/locale/ro';
import 'dayjs/locale/ru';
import 'dayjs/locale/sk';
import 'dayjs/locale/sr';
import 'dayjs/locale/es';
import 'dayjs/locale/uk';

// DAYJS CONFIGURATION
dayjs.extend(customParseFormat);
dayjs.extend(duration);
dayjs.extend(relativeTime);
