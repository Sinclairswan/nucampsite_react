import { useSelector } from "react-redux"
import { selectAllPartners } from "./partnersSlice"
import { Col } from "reactstrap"
import Partner from "./Partner"

const PartnersList = () => {
    const partners = useSelector(selectAllPartners)
    return (
        <Col>
            {partners.map((partner) => {
                return (
                    <div className='d-flex mb-5' and key={partner.id}>
                        <Partner partner={partner} />
                    </div>
                )
            })}
        </Col>
    )
}



export default PartnersList