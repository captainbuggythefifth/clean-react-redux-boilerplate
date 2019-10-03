import React, { useEffect } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {counterActionIncrement, counterActionDecrement} from '../../actions/counter/counter.actions';
import { IRootReducerInterface } from '../../interfaces/root.interface';
import { profileActionGet } from '../../actions/profile/profile.actions';


const Profile: React.FC = () => {

    const profile = useSelector(({profile}: IRootReducerInterface) => {
        return profile
      });
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(profileActionGet())
    }, [])

    console.log("profile: ", profile);

  return (
    <div>
      ALALALLAH!
    </div>
  );
}

export default Profile;