import {useParams} from "react-router-dom";

export default function Product() {
  const {id} = useParams();

  return <div>{id}</div>;
}
