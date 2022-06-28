import { Container, Row } from "reactstrap";
import { useParams } from "react-router-dom";
import { selectAllCampsiteById } from "../features/campsites/campsitesSlice";
import CampsiteDetail from "../features/campsites/CampsiteDetail";
import CommentsList from "../features/comments/CommentList";
import SubHeader from "../components/SubHeader";

const CampsiteDetailPage = () => {
    const { campsiteId } = useParams();
    const campsite = selectAllCampsiteById(campsiteId)

    return (
        <Container>
            <SubHeader current={campsite.name} detail={true} />
            <Row>
                <CampsiteDetail campsite={campsite} />
                <CommentsList campsiteId={campsiteId} />
            </Row>
        </Container>
    )
};

export default CampsiteDetailPage;