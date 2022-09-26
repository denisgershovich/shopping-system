import { Col, Row } from 'react-bootstrap'
import storeItems from '../data/items.json'
import StoreItem from '../components/StoreItem'

const Store = () => {
    return <>
        <h1>Store Items</h1>
        <Row xs={1} md={2} lg={3} className="g-3 mb-5">
            {storeItems.map(item => (
                <Col key={item.id}>
                    <StoreItem {...item} />
                </Col>
            ))}
        </Row>
    </>

}

export default Store