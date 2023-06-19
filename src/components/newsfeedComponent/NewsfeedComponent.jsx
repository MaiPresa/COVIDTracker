
import "./newsfeedComponent.css";
import commentImg from "../../assets/images/img-comment.png"
import clockImg from "../../assets/images/img-clock.png"

const NewsfeedComponent = (props) => {
    return (
      <div className="newsfeedContainer">
       
        <img src={props.newsImage} className="newsImg" alt="" />
        
        <div className="newsText">
          <div className="newsTextInfo">
            <span>
              <img src={commentImg} alt="" className="newsTextInfoIcon" />
              {props.date}
            </span>
            <span>
              <img src={clockImg} alt="" className="newsTextInfoIcon" />
              {props.comments}
            </span>
          </div>

          <h5>{props.newsTitle}</h5>
        </div>

        <a href={props.link}>Continue</a>
        
      </div>
    );
};

export default NewsfeedComponent