import axios from 'axios';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const MISSIONS_URL = 'https://api.spacexdata.com/v3/missions';

export const fetchMissions = createAsyncThunk(
  'rockets/fetchMissions',
  async () => {
    const response = await axios.get(MISSIONS_URL);
    if (response.status !== 200) {
      throw new Error('Failed to fetch missions');
    }
    const missions = response.data.map((mission) => ({
      id: mission.mission_id,
      name: mission.mission_name,
      description: mission.description,
    }));
    return missions;
  },
);

const initialState = {
  missions: [],
};

const missionsReducer = createSlice({
  name: 'missions',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchMissions.fulfilled, (state, { payload }) => ({
      ...state,
      missions: [...payload],
    }));
  },
});

export const selectMissions = (state) => state.missions.missions;

export default missionsReducer.reducer;
