const API_URL = import.meta.env.VITE_API_URL;
export async function signupUser(userData) {
  const response = await fetch(`${API_URL}/api/auth/signup`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userData),
  });
  const data = await response.json();
  if (!response.ok) {
    throw new Error(data.message || "Signup failed");
  }
  return data
}
export async function loginUser(credentials) {
	const response = await fetch(`${API_URL}/api/auth/login` , {
		method : "POST",
		headers : {
			"Content-Type" : "applicaiton/json"
		},
		body : JSON.stringify(credentials)
	})
	const data = await response.json()
	if(!response.ok){
		throw new Error(data.message || "Login failed");
	}
	return data
}
