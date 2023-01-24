import { useParams } from 'react-router-dom';

function ProductScreen() {
  const params = useParams();
  const { slug } = params;
  return (
    <div>
      <h1>5SLUG</h1>
    </div>
  );
}

export default ProductScreen;
