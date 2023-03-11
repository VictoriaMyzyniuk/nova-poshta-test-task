import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://api.novaposhta.ua/v2.0/json/';
const API_KEY = 'b1ac4750f63cc9669e40fc1a4dabec54';

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
      if (response.data.success) {
        return response.data.data[0];
      } else {
        return thunkAPI.rejectWithValue(response.data.errors);
      }
    } catch (e) {
      console.log(e.message);
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const fetchDepartments = createAsyncThunk(
  'department/fetchDepartment',

  async (city, thunkAPI) => {
    const data = {
      apiKey: API_KEY,
      modelName: 'Address',
      calledMethod: 'getWarehouses',
      methodProperties: {
        CityName: city,
        Page: '1',
        Limit: '20',
        Language: 'UA',
      },
    };
    try {
      const response = await axios.post(axios.defaults.baseURL, data);

      if (response.data.data.length) {
        return response.data.data;
      } else {
        return thunkAPI.rejectWithValue('Такого міста немає у списку');
      }
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
