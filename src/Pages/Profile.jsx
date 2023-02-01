import React from 'react';
import { useSelector } from 'react-redux';
import { selectMissions } from '../redux/missions/missions';
import { selectRockets } from '../redux/rockets/rocketsSlice';

const Profile = () => {
  const missions = useSelector(selectMissions);
  const rockets = useSelector(selectRockets);

  const reservedRockets = rockets.filter((rocket) => rocket.reserved);

  return (
    <div>
      <h1>My Profile</h1>
      <h2>My Missions</h2>
      <ul>
        {missions.map((mission) => (
          <li key={mission.id}>{mission.name}</li>
        ))}
      </ul>
      <h2>My Rockets</h2>
      <ul>
        {reservedRockets.map((rocket) => (
          <li key={rocket.id}>{rocket.rocketName}</li>
        ))}
      </ul>
    </div>
  );
};

export default Profile;
