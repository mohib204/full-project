import { useEffect, useState } from "react";
import BlogCard from "../../../components/BlogCard";
import axios from "axios";
import { baseUrl } from "../../../shared/constant";
import { Modal, Spin } from "antd";
import { ExclamationCircleFilled } from "@ant-design/icons";

const { confirm } = Modal;

const BlogsList = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get(`${baseUrl}/blog/get-blogs`)
      .then((res) => {
        console.log("🚀 ~ .then ~ res:", res);
        setBlogs(res.data);
      })
      .catch((err) => {})
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const onDelete = (blog) => {
    confirm({
      title: "Delete this blog?",
      icon: <ExclamationCircleFilled />,
      content: "Are you sure you want to delete this blog?",
      onOk() {
        console.log("OK");
        return axios
          .delete(`${baseUrl}/blog/delete/${blog?._id}`)
          .then((res) => {
            console.log("🚀 ~ .then ~ res:", res);
            if (res.data?.error) {
              alert(res.data?.message);
            } else {
              const filteredData = blogs.filter((bl) => bl?._id !== blog?._id);
              setBlogs(filteredData);
            }
          })
          .catch((err) => {
            console.log("🚀 ~ onOk ~ err:", err);
            alert(err?.message);
          });
      },
      onCancel() {
        console.log("Cancel");
      },
    });
  };

  return (
    <div className="blog-list">
      {loading ? (
        <Spin size="large" />
      ) : blogs.length ? (
        blogs.map((blog) => (
          <BlogCard blog={blog} onDelete={() => onDelete(blog)} />
        ))
      ) : (
        <h3>No Blogs Yet</h3>
      )}
    </div>
  );
};

export default BlogsList;
