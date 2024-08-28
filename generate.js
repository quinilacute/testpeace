function generatePassword(length, strength) {
    if (length < 1) {
      throw new Error('Password length must be greater than 0');
    }
  
    const chars = {
      low: 'abcdefghijklmnopqrstuvwxyz',
      medium: 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ',
      high: 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()'
    };
  
    const characterSet = chars[strength];
  
    if (!characterSet) {
      throw new Error('Invalid strength level');
    }
  
    let password = '';
  
    for (let i = 0; i < length; i++) {
      password += characterSet.charAt(Math.floor(Math.random() * characterSet.length));
    }
  
    return password;
  }
  
  export default generatePassword;
  