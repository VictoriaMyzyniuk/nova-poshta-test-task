import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://api.novaposhta.ua/v2.0/json/';
const API_KEY = 'b1ac4750f63cc9669e40fc1a4dabec54';
const num = '20450672143416';

export const fetchInfo = createAsyncThunk(
  'info/fetchInfo',

  async (number, thunkAPI) => {
    const data = {
      apiKey: API_KEY,
      modelName: 'TrackingDocument',
      calledMethod: 'getStatusDocuments',
      methodProperties: {
        Documents: [
          {
            DocumentNumber: number,
          },
        ],
      },
    };
    try {
      const response = await axios.post(axios.defaults.baseURL, data);
      // console.log(response.data);

      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
