import { useLocation } from "react-router";

const CastPage = () => {

const location = useLocation()

    return(
        <div>
            <img src={location.state.castMember.image.medium} alt=""/>
            {console.log(location.state.castMember)}
            {location.state.castMember.name}
            {location.state.castMember.country.name}
            {location.state.castMember.gender}
            {location.state.castMember.birthday}
        </div>
    )
    
}

export default CastPage