import HttpAuthService from './Auth';
import HttpCourseService from './Course';
import { http } from './Lib/http-common';

export const authService = new HttpAuthService(http);

const authenticatedHttpClient = authService.getAuthenticatedHttpClient();

export const courseService = new HttpCourseService(authenticatedHttpClient);
