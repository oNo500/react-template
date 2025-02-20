import { Link } from "react-router";

const Register = () => {
  return (
    <div>
      <h2>注册</h2>
      <Link to={"/login"}>登录</Link>
    </div>
  );
};

export default Register;
