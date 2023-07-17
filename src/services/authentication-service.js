const errorCode = {
  'auth/wrong-password':
    'Incorrect password, please check or click forgot password',
  'auth/invalid-email': 'That email address is invalid!',
  'auth/user-not-found':
    'There is no user record corresponding to this email address, Please create a new account.',
  'auth/unknown': 'Unknown error occurred, please try again later',
  'auth/network-request-failed': 'Please check your internet connection',
};

export const signInRequest = error => {
  return errorCode[error.code];
};

export const forgotRequest = error => {
  errorCode.forEach(data => {
    if (error.code === data.code) {
      return data.message;
    }
  });
};
