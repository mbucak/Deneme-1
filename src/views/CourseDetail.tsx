import React from 'react';
import { useParams } from 'react-router-dom';

export default function CourseDetail() {

  const { id } = useParams();
  console.log(id);

  return <div></div>;
}
