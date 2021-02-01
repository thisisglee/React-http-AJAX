import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
});

instance.defaults.headers.common['Authorization'] = 'AUTH TOKEN FROM INSTANCE';

// instance.interceptors.request...

export default instance;

// Fetch data from a JSON API, and present it on the screen (no styling). You should review how to fetch data using Javascript. We are not picky on how you decide to fetch the data.
// Style the app using HTML and CSS.
// Create a text field, and filter the list of data.
// Display more information about the data fetched and create expandable views.
// Create text inputs for each item in the list, and be able to save information inputted data. Add more filtering capabilities.
