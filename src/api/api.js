const apiUrl =
  "https://27275390-03ad-42b6-8717-548404d8a098.mock.pstmn.io/courses";

const api = {
  getCourses: async () => {
    try {
      const response = await fetch(apiUrl);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error fetching courses:", error);
      throw error;
    }
  },
};

export default api;
