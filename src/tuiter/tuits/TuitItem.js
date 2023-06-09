import React from "react";
import '../../vendors/bootstrap-icons/font/bootstrap-icons.min.css';
import {useDispatch} from "react-redux";
import './tuit.css';
import TuitStates from "./tuit-states";
import {deleteTuit} from "../reducers/tuits-reducer";



const TuitItem = (
 {
   tuit = {"_id": 123, "topic": "Space", "userName": "SpaceX",
   "title": "Tesla CyberTruck lands on Mars and picks up the Curiosity rover on its 6' bed",
   "time": "2h",   "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Tesla_Motors.svg/1587px-Tesla_Motors.svg.png",
   "liked": true,
   "replies": 123,
   "retuits": 432,
   "likes": 2345,
   "handle": "@spacex",
   "tuit": "You want to wake up in the morning and think the future is going to be great - and that’s what being a spacefaring civilization is all about. It’s about believing in the future and thinking that the future will be better than the past. And I can’t think of anything more exciting than going out there and being among the stars"
  }
 }
) => {

  const dispatch = useDispatch();
  const deleteTuitHandler = (id) => {
    dispatch(deleteTuit(id));
}
 return(
  <li className="list-group-item">
   <div className="row">
    <div className="col-2">
       <img width={70} className="float-end rounded-circle" src={`${tuit.image}`}/>
     </div>
     <div className="col-10">
        
       <div><b>{tuit.userName}</b> <i className="bi bi-patch-check-fill lbluecolor"></i> {tuit.handle} . {tuit.time} <i className="bi bi-x-lg float-end"
            onClick={() => deleteTuitHandler(tuit._id)}></i>
        </div>
       <div>{tuit.tuit}</div>
       <br/>
       <div><TuitStates tuit_states={{"liked": tuit.liked,
        "replies": tuit.replies,
        "retuits": tuit.retuits,
        "likes": tuit.likes }} /></div> 
     </div>
   </div>
  </li>
 );
};
export default TuitItem;