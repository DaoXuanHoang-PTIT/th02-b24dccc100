import React, { useEffect, useState } from "react";
import axios from "axios";
import { Routes, Route, Link, useParams, useNavigate } from "react-router-dom";

interface SV {
  id: number;
  name: string;
  email: string;
  phone: string;
  website: string;
  company: { name: string };
  address: { city: string };
}

const List: React.FC = () => {
  const [ds, setDs] = useState<SV[]>([]);
  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users").then(r => setDs(r.data));
  }, []);
  return (
    <div style={{ padding: 20 }}>
      <h2>Danh sách sinh viên</h2>
      {ds.map(sv => (
        <p key={sv.id}>
          <Link to={`/students/${sv.id}`} style={{ textDecoration: "none" }}>
            {sv.name}
          </Link> - {sv.email}
        </p>
      ))}
    </div>
  );
};

const Detail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const nav = useNavigate();
  const [sv, setSv] = useState<SV>();
  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/users/${id}`).then(r => setSv(r.data));
  }, [id]);
  if (!sv) return <p>Đang tải...</p>;
  return (
    <div style={{ padding: 20 }}>
      <h3>Chi tiết sinh viên</h3>
      <p>Họ tên: {sv.name}</p>
      <p>Email: {sv.email}</p>
      <p>Điện thoại: {sv.phone}</p>
      <p>Thành phố: {sv.address.city}</p>
      <p>Công ty: {sv.company.name}</p>
      <p>Website: {sv.website}</p>
      <button onClick={() => nav("/students")}>← Quay lại</button>
    </div>
  );
};

const Bai2: React.FC = () => (
  <Routes>
    <Route path="/" element={<List />} />
    <Route path=":id" element={<Detail />} />
  </Routes>
);

export default Bai2;
