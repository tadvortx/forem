import { initializeCommentDate } from './initializers/initializeCommentDate';
import { initializeCommentPreview } from './initializers/initializeCommentPreview';
import { initializeNotifications } from './initializers/initializeNotifications';
import {
  showUserAlertModal,
  showModalAfterError,
} from '@utilities/showUserAlertModal';

initializeCommentDate();
initializeCommentPreview();
initializeNotifications();

window.showUserAlertModal = showUserAlertModal;
window.showModalAfterError = showModalAfterError;
