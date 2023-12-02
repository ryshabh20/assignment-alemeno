const apiUrl =
  "https://fa8f2db2-529b-46d2-b64d-135c4beb7279.mock.pstmn.io/courses";

const api = {
  getCourses: async () => {
    try {
      const response = await fetch(apiUrl);
      const data = await response.json();
      console.log('Courses:', data);
      return data;
    } catch (error) {
      console.error("Error fetching courses:", error);
      
      throw error;
    }
  },
};

export default api;
