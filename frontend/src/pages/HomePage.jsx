import { useEffect, useState } from 'react';
import axios from 'axios';
import { Col, Row } from 'react-bootstrap';
import Product from '../components/Product';

export default function HomePage() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            const { data } = await axios.get('/api/products');
            setProducts(data);
            console.log(data);
        };
        fetchProducts();
    }, []);
    return (
        <>
            <h1>Latest Products</h1>
            <Row>
                {products.map((product) => (
                    <Col
                        sm={12}
                        md={6}
                        lg={4}
                        xl={3}
                        key={product._id}
                    >
                        <Product product={product} />
                    </Col>
                ))}
            </Row>
        </>
    );
}
