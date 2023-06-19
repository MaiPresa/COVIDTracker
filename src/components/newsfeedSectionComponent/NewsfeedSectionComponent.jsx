import NewsfeedComponent from '../newsfeedSectionComponent/NewsfeedSectionComponent'
import blog1 from "../../assets/images/blog-1.jpg"

const NewsfeedSectionComponent = () => {
    return(
        <div className='newsfeedContainer'>
            <NewsfeedComponent newsImage={blog1} date="9 Sept 2020" comments="21 Comments" newsTitle="Con COVID-19 be caught from a person who has no symptoms?" />
            
        </div>
    )
};

export default NewsfeedSectionComponent

