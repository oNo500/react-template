import { useNavigate } from "react-router";

const Login = () => {
  const navigate = useNavigate();
  const handleLogin = () => {
    localStorage.setItem("token", "123");
    navigate("/");
  };
  return (
    <div>
      <h2>登录</h2>
      <button onClick={handleLogin}>登录</button>
    </div>
  );
};
export default Login;
