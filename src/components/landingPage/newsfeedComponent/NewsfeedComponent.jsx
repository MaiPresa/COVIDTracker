import NewsfeedAtom from './NewsfeedAtom'
import './newsfeedComponent.scss'
import blog1 from "../../assets/images/blog-1.jpg";
import blog2 from "../../assets/images/blog-2.jpg";
import blog3 from "../../assets/images/blog-3.jpg";

const NewsfeedComponent = () => {
    return (
      <div className="newsfeedSectionContainer">
        
        <NewsfeedAtom
          newsImage={blog1}
          date={"9 Sept 2020"}
          comments={"21 Comments"}
          newsTitle={"Con COVID-19 be caught from a person who has no symptoms?"}
        />
        <NewsfeedAtom
          newsImage={blog2}
          date={"9 Sept 2020"}
          comments={"21 Comments"}
          newsTitle={"What you need to know about novel Corona virus Covid 19"}
        />

        <NewsfeedAtom
          newsImage={blog3}
          date={"9 Sept 2020"}
          comments={"21 Comments"}
          newsTitle={"What can I do to protect myself and prevent the spread of disease?"}
        />
      </div>
    );
};

export default NewsfeedComponent

