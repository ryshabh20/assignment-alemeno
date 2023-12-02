
export const fetchUser = async () => {
    try {
      const response = await fetch('https://fa8f2db2-529b-46d2-b64d-135c4beb7279.mock.pstmn.io/user');
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
  
      const user = await response.json();
      return user;
    } catch (error) {
      console.error('Error fetching user:', error.message || error);
      throw error;
    }
  };
  