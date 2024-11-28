import { Button } from "antd";
import { Link } from "react-router-dom";

const Jumboturn = () => {
  return (
    <div className="jumbotun-container">
      <div className="jumbotun-left">
        <h1>Blog Posts</h1>
        <h3>I think so, this is it. </h3>
        <p>
          In publishing and graphic design, Lorem ipsum is a placeholder text
          commonly used to demonstrate the visual form of a document or a
          typeface without relying on meaningful content. Lorem ipsum may be
          used as a placeholder before the final copy is available{" "}
        </p>
        <Link to="/signup">
          <Button type="primary" size="large">
            Create Account
          </Button>
        </Link>
      </div>
      <div className="jumbotun-right">
        <img src="user.png" />
      </div>
    </div>
  );
};

export default Jumboturn;
