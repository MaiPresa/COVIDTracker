
import "./newsfeedComponent.scss";
import commentImg from "../../assets/images/img-comment.png"
import clockImg from "../../assets/images/img-clock.png"

const NewsfeedAtom = (props) => {
    return (
      <div className="newsfeedContainer">
        <img src={props.newsImage} className="newsImg" alt="" />
        <div className="newsText">
          <div className="newsTextInfo">
            <span className="newsTextInfoIconText">
              <img src={commentImg} alt="" className="newsTextInfoIcon" />
              {props.date}
            </span>
            <span className="newsTextInfoIconText">
              <img src={clockImg} alt="" className="newsTextInfoIcon" />
              {props.comments}
            </span>
          </div>

          <p className="newsfeedTitle">{props.newsTitle}</p>
        </div>
        <a className="newsfeedLink" href={props.link}>
          Continue
        </a>
      </div>
    );
};

export default NewsfeedAtom