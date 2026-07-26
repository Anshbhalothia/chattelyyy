import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setUserData } from '../redux/userSlice.js';
import axios from 'axios';
import { serverUrl } from '../main.jsx';
import { useSelector } from 'react-redux';



const getCurrentUser =() => {
    let dispatch = useDispatch();
    let userData = useSelector((state) => state.user);
    useEffect(() => {
        const fetchCurrentUser = async () => {
            try {
                const response = await axios.post(`${serverUrl}/api/user/current`, { withCredentials: true });
                if (response.data) {
                    dispatch(setUserData(response.data));
                }
            } catch (error) {
                console.error('Error fetching current user:', error);
            }
        };

        fetchCurrentUser();
    }, [userData]);

}
export default getCurrentUser;