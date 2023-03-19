import http from '@/http-common';

const generateToken = async (): Promise<string> => {
  try {
    const { data } = await http.get(import.meta.env.VITE_APP_AUTH_URL);
    return data.token;
  } catch (e: unknown) {
    const typedError = e as Error;
    return typedError.message;
  }
};

/*
When App is first initiated, the generateToken function fires and returns a token, which will be used thoughout the App lifecycle. This token is going to be used to send http requests to the API.
*/
const token = await generateToken();

const config = {
  headers: { Authorization: `Bearer ${token}` },
  'Access-Control-Allow-Origin': 'DELETE',
};

class CourseDataService {
  getAll(): Promise<any> {
    return http.get(import.meta.env.VITE_APP_COURSES_URL, config);
  }

  getCourseById(id: string): Promise<any> {
    return http.get(`${import.meta.env.VITE_APP_COURSES_URL}/${id}`, config);
  }
}

export default new CourseDataService();
