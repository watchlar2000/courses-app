import http from '@/http-common';

const generateToken = async (): Promise<string> => {
  const { data } = await http.get(import.meta.env.VITE_APP_AUTH_URL);
  return data.token;
};

/*
When App is first initiated, the generateToken function fires and returns a token, which will be used throught the App lifecycle to send http requests to the API
*/
const token = await generateToken();

const config = {
  headers: { Authorization: `Bearer ${token}` },
};

class CourseDataService {
  getAll(): Promise<any> {
    return http.get(import.meta.env.VITE_APP_COURSES_URL, config);
  }

  getCourse(id: string) {
    return http.get(`${import.meta.env.VITE_APP_COURSES_URL}/${id}`, config);
  }
}

export default new CourseDataService();
