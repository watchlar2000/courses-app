import http from '@/http-common';

const COURSES_URL = '/core/preview-courses';
const AUTH_URL = '/auth/anonymous?platform=subscriptions';

const generateToken = async (): Promise<string> => {
  const { data } = await http.get(AUTH_URL);
  return data.token;
};

const token = await generateToken();

const config = {
  headers: { Authorization: `Bearer ${token}` },
};

class CourseDataService {
  getAll(): Promise<any> {
    return http.get(COURSES_URL, config);
  }

  getCourse(id: string) {
    return http.get(`${COURSES_URL}/${id}`, config);
  }
}

export default new CourseDataService();
