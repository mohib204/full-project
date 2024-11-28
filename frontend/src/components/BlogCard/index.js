import { Button, Card } from "antd";
import "./index.css";
import moment from "moment";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const BlogCard = (props) => {
  const blog = props.blog;
  const { user } = useSelector((s) => s.userReducer);
  const navigate = useNavigate();
  const handleEdit = () => {
    navigate(`/create-blog?blogId=${blog?._id}`);
  };
  return (
    <Card
      className="blog-card"
      style={{
        width: 500,
      }}
      hoverable
      cover={<img src={blog.image} />}
    >
      <h2>{blog.title}</h2>
      <p>{blog.description} </p>

      <div className="creator-profile">
        <img src={blog.author.profile || "/user-icon.png"} />
        <div>
          <p className="creator-name">{blog.author.name}</p>
          <p className="created-at">{moment(blog.createdAt).fromNow()}</p>
        </div>
      </div>
      {blog.author._id === user._id ? (
        <div className="action-button">
          <Button onClick={handleEdit}>Edit</Button>
          <Button type="primary" onClick={props.onDelete}>Delete</Button>
        </div>
      ) : null}
    </Card>
  );
};

export default BlogCard;
