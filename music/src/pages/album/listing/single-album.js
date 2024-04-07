import React, { useState } from "react";
import { useParams } from "react-router-dom";

export default function SingleAlbum() {
  const { id } = useParams();
  return <div>asd {id}</div>;
}
