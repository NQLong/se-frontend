import axios from 'axios'

// Xử lí đăng nhập: lấy data từ API -> gọi đến UserReducer-> xử lý action 
export const login = (user) => async (dispatch) => {
    try {
      const {data} = await axios.get('http://localhost:3000/user/1', user)
      console.log(data)
      dispatch({ type: 'USER_LOGIN_SUCCESS', payload: data });
      localStorage.setItem('userInfo', JSON.stringify(data));
    } catch (error) {
      console.log(error.response.data.message)
      dispatch({ type: 'USER_LOGIN_FAIL', payload: error.response.data.message });
    }
};

// Xử lí đăng ký
export const SignupUser = (user) => async (dispatch) => {
    try {
      const {data} = await axios.post('http://localhost:3000/user', user)
      console.log(data)
      localStorage.setItem('userInfo', JSON.stringify(data));
      dispatch({ type: 'USER_SIGNUP_SUCCESS', payload: data });
      document.location.href = '/';
    } catch (error) {
       console.log(error)
    }
};

// Xử lí đăng xuất
export const SignoutUser = (user) => async (dispatch) => {
  localStorage.removeItem('userInfo')
  dispatch({type: 'USER_SIGNOUT_SUCCESS', payload: {} })
  document.location.href = '/';
};

//Admin: lấy tất cả người dùng
export const getAllUser = () => async (dispatch, getState) => {
  const {
    userSignin: {userInfo},
  } = getState()
  try {
    const {data} = await  axios.get('http://localhost:3000/user')
    console.log(data)
    dispatch({type: 'GET_ALL_USER', payload: data})
  } catch (error) {
    dispatch({type: 'GET_ALL_USER_FAIL', payload: error.message})
  }
}

export const deleteUser = (userId) => async (dispatch, getState) => {
  const {
    userSignin: {userInfo},
  } = getState()
  try {
    const {data} = await axios.delete(`http://localhost:3000/user/delete/${userId}`)
    dispatch({type: 'DELETE_USER', payload: data})
  } catch (error) {
    dispatch({type: 'DELETE_USER_FAIL', error: error.message})
  }
}


