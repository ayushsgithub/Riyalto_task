import React from 'react'
import { useParams } from 'react-router-dom';

const ShowApi = () => {

  const { title } = useParams();
console.log(title);
  return (
    <div>test ${title}</div>
  )
}

export default ShowApi