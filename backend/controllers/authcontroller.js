export const signup = async (req, res) => {
  try {
    const { fullName, username, password, confirmPassword, gender } = req.body;
  } catch {}
};

export const login = async (req, res) => {
    console.log("login");
};

export const logout = (req, res) => {
  res.send("logout");
  console.log("logout");
};


