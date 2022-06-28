
import { Container } from "reactstrap";
import SubHeader from "../components/SubHeader";

import CampsitesList from "../features/campsites/CampsitesList";


const CampSiteDirectoryPage = () => {
    return (
        <Container>
            <SubHeader current=' Directory ' />
            <CampsitesList />
        </Container>
    )

}

export default CampSiteDirectoryPage