import { useState, useContext, createContext, useEffect } from "react";
import {
  getToken,
  login,
  getUserData,
  getAccess,
  logout,
} from "../utils/handleAuth";
import { useSnackbar } from "notistack";
import API from "../utils/api";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext({});

export function AuthProvider({ children }) {
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState({});
  const [MyToken, setMyToken] = useState("");
  const [access, setAccess] = useState(false);
  const [books, setBooks] = useState({});
  const [error, setError] = useState(false);
  const [userList, setUserList] = useState([]);
  const [adminHomeData, setAdminHomeData] = useState({
    users: 5,
    books: 5,
    rbooks: 6,
    online: 10,
  });

  useEffect(() => {
    const myToken = getToken();
    if (true) {
      setIsAuthenticated(true);
      setMyToken("jhfghfidsgujgy");
      setUser({
        name: "ajayos",
        email: "ajayos@gmail.com",
        id: "sfdghfd68498965",
        pic: "https://github.com/Ajayos.png",
        token: "jhgfdbjhfduuygyvu",
        phone: "123456789",
        dob: "2000-10-05",
        age: "23",
        education: "Your Education",
        address: "Your Address",
      }); //getUserData());
      setAccess(false); //getAccess());
    }
  }, []);

  async function SignIn(email, password) {
    try {
      const response = await API.get("/users", {
        params: { email, password },
      });

      if (response.status === 200) {
        const { token, name, email, id, pic } = response.data;
        login(token, name, email, id, pic, "user");
        setIsAuthenticated(true);
        setMyToken(token);
        setAccess(false);
        return { message: "Logged In successfully", status: 200 };
      } else {
        return { message: response.data.message, status: response.status };
      }
    } catch (error) {
      if (error.response) {
        return {
          message: error.response.data.message,
          status: error.response.status,
        };
      } else {
        return { message: "An error occurred", status: 500 };
      }
    }
  }
  async function Forgot(email, dob, password) {
    try {
      const response = await API.post("/forgot", {
        dob,
        email,
        password,
      });

      if (response.status === 201) {
        const { message } = response.data;
        return { message: message, status: 201 };
      } else {
        return { message: response.data.message, status: response.status };
      }
    } catch (error) {
      if (error.response) {
        return {
          message: error.response.data.message,
          status: error.response.status,
        };
      } else {
        return { message: "An error occurred", status: 500 };
      }
    }
  }
  async function SignUp(data) {
    try {
      const response = await API.post("/users", data);

      if (response.status === 201) {
        const { token, name, email, id, pic } = response.data;
        login(token, name, email, id, pic, "user");
        setIsAuthenticated(true);
        setAccess(false);
        setMyToken(token);
        return { message: "Signed up successfully", status: 201 };
      } else {
        return { message: response.data.message, status: response.status };
      }
    } catch (error) {
      if (error.response) {
        return {
          message: error.response.data.message,
          status: error.response.status,
        };
      } else {
        return { message: "An error occurred", status: 500 };
      }
    }
  }

  async function AdminLogin(email, password) {
    try {
      const response = await API.get("/admins", {
        params: { email, password },
      });

      if (response.status === 200) {
        const { token, name, email, id, pic } = response.data;
        login(token, name, email, id, pic, "admin");
        setIsAuthenticated(true);
        setMyToken(token);
        setAccess(true);
        return { message: "Signed up successfully", status: 200 };
      } else {
        return { message: response.data.message, status: response.status };
      }
    } catch (error) {
      if (error.response) {
        return {
          message: error.response.data.message,
          status: error.response.status,
        };
      } else {
        return { message: "An error occurred", status: 500 };
      }
    }
  }

  async function GetBooks() {
    try {
      const response = await API.get("/books");

      if (response.status === 200) {
        const data = response.data;
        setBooks(data);
      } else {
        setError(response.status);
      }
    } catch (error) {
      if (error.response) {
        setError({
          message: error.response.data.message,
          status: error.response.status,
        });
      } else {
        setError("An error occurred");
      }
    }
  }

  async function GetDashboradData() {
    try {
      const response = await API.get("/admin/dashboard");

      if (response.status === 200) {
        const data = response.data;
        setAdminHomeData(data);
      } else {
        setError(response.status);
      }
    } catch (error) {
      if (error.response) {
        setError({
          message: error.response.data.message,
          status: error.response.status,
        });
      } else {
        setError("An error occurred");
      }
    }
  }
  async function GetUsersData() {
    try {
      const response = await API.get("/admin/users");

      if (response.status === 200) {
        const data = response.data;
        setUserList(data);
      } else {
        setError(response.status);
      }
    } catch (error) {
      if (error.response) {
        setError({
          message: error.response.data.message,
          status: error.response.status,
        });
      } else {
        setError("An error occurred");
      }
    }
  }

  async function UpdateUserPermition(select) {
    try {
      const response = await API.put(`/user/access:${select.id}`, {
        access: select.access,
      });

      if (response.status === 200) {
        await GetUsersData();
      } else {
        setError(response.status);
      }
    } catch (error) {
      if (error.response) {
        setError({
          message: error.response.data.message,
          status: error.response.status,
        });
      } else {
        setError("An error occurred");
      }
    }
  }

  async function IsPermit(user) {
    if (isAuthenticated) {
      if (access) {
        if (!user) {
          navigate("/dashboard", { replace: true });
        }
      } else {
        if (user) {
          navigate("/home", { replace: true });
        }
      }
    } else {
      navigate("/login", { replace: true });
    }
  }

  async function createBook() {}

  const LogOutUser = () => {
    enqueueSnackbar("Logout successfully", { variant: "success" });
    setTimeout(() => {
      setIsAuthenticated(false);
      setMyToken("");
      setUser({});
      setAccess(false);
      logout();
    }, 500);
  };

  return (
    <AuthContext.Provider
      value={{
        SignIn,
        SignUp,
        API,
        user,
        Forgot,
        createBook,
        GetDashboradData,
        adminHomeData,
        GetBooks,
        IsPermit,
        USERLIST: userList,
        GetUsersData,
        logout: LogOutUser,
        AdminLogin,
        isAuthenticated,
        access,
        MyToken,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
