//We have in AsyncStorage [users, ids, userIds, userLogins, usernames, usersIds, films]
import AsyncStorage from '@react-native-community/async-storage';
import _ from 'lodash';

export const generateId = () => '_' + Math.random().toString(36).substr(2, 9);

export const getToken = async () => {
  const token = await AsyncStorage.getItem('token');

  return token ? JSON.parse(token) : null;
};

export const setToken = async (token) => await AsyncStorage.setItem('token', JSON.stringify(token));

export const clearToken = async () => await AsyncStorage.removeItem('token');

export const getItemFromAsyncStorage = async (item) => {
  const list = await AsyncStorage.getItem(item);

  return list ? JSON.parse(list) : item === 'films' ? {} : [];
};

export const setItemToAsyncStorage = async (item, value) => await AsyncStorage.setItem(item, JSON.stringify(value));

export const addItemToExistingAsyncStorage = async (item, value) => {
  const list = await getItemFromAsyncStorage(item);
  
  const updatedList = [...list, value];
  await setItemToAsyncStorage(item, updatedList);
};

const getUserFilms = async (id) => {
  const films = await getItemFromAsyncStorage('films');

  return films[id];
};

export const getUserById = async (id) => {
  const ids = await getItemFromAsyncStorage('ids');
  const users = await getItemFromAsyncStorage('users');

  if (!ids.includes(id)) return { status: 404, message: 'User not found!' };

  const index = ids.indexOf(id);
  const user = users[index];

  if (user) {
    const films = await getUserFilms(user._id);
    return { status: 200, user: { ..._.omit(user, 'password'), ...films } };
  }

  return { status: 404, message: 'User not found!' };
}; 

export const loginController = async (login, password) => {
  const users = await getItemFromAsyncStorage('users');

  if (users.length === 0) return { status: 404, message: 'User was not found. Please, create your account!' };

  let user = null;
  let emailExists = false;
  let wrongPassword = false;

  users?.map(_ => {
    if (_.login === login) {
      emailExists = true;
      password === _.password ? user = _ : wrongPassword = true
    };
  });

  if (!emailExists) return { status: 404, message: 'User was not found. Please, create your account!' };

  if (wrongPassword) return { status: 401, message: 'Wrong username or password. Please, try again!' }

  if (user) {
    const { user: constuctorUser } = await getUserById(user._id);
    return { status: 200, user: { ...constuctorUser } };
  }

  return { status: 400, message: 'Unknown error. Try again later.' };
};

export const registerController = async (login, password, displayName) => {
  const userLogins = await getItemFromAsyncStorage('userLogins');
  const usernames = await getItemFromAsyncStorage('usernames');

  if (userLogins.includes(login)) {
    return { status: 400, message: 'Your username is already taken.' }
  };

  if (usernames.includes(displayName)) {
    return { status: 400, message: 'Your display name is already taken.' }
  };

  const user = {
    _id: generateId(),
    login,
    password,
    displayName,
  };

  const defaultFilms = await createFilms(user._id);
  await addItemToExistingAsyncStorage('users', user);
  await addItemToExistingAsyncStorage('ids', user._id);
  await addItemToExistingAsyncStorage('userLogins', login);
  await addItemToExistingAsyncStorage('usernames', displayName);

  return { status: 200, user: { ..._.omit(user, 'password'), ...defaultFilms} };

  //lists: all, favourite, anons, viewed, want to view(wishes)
};

export const createFilms = async (id) => {
  const newList = {
    favourites: [],
    announcements: [],
    viewed: [],
    toWatch: [],
  };
  const films = await getItemFromAsyncStorage('films');
  films[id] = { ...newList };

  await setItemToAsyncStorage('films', films);
  
  return newList;
};

export const addAnnouncements = async (announcement) => {
  const id = await getToken();
  const films = await getItemFromAsyncStorage('films');

  films[id].announcements = [ ...films[id].announcements, announcement ];
  await setItemToAsyncStorage('films', films);

  return films[id];
};

export const deleteAnnouncements = async (_id) => {
  const id = await getToken();
  const films = await getItemFromAsyncStorage('films');

  films[id].announcements = films[id].announcements.filter(_ => _._id !== _id);
  await setItemToAsyncStorage('films', films);

  return { status: 200, success: true };
};

export const moveToViewed = async (film) => {
  const id = await getToken();
  const films = await getItemFromAsyncStorage('films');

  films[id].viewed = [...films[id].viewed, _.omit(film, 'release')];
  await setItemToAsyncStorage('films', films);
  await deleteAnnouncements(film._id);

  return { status: 200, success: true };
};

export const deleteViewed = async (_id) => {
  const id = await getToken();
  const films = await getItemFromAsyncStorage('films');

  films[id].viewed = films[id].viewed.filter(_ => _._id !== _id);
  await setItemToAsyncStorage('films', films);

  return { status: 200, success: true };
};

export const moveToFavourites = async (film) => {
  const id = await getToken();
  const films = await getItemFromAsyncStorage('films');

  films[id].favourites = [...films[id].favourites, _.omit(film, 'release')];
  await setItemToAsyncStorage('films', films);
  await deleteAnnouncements(film._id);

  return { status: 200, success: true };
};

export const deleteFavourites = async (_id) => {
  const id = await getToken();
  const films = await getItemFromAsyncStorage('films');

  films[id].favourites = films[id].favourites.filter(_ => _._id !== _id);
  await setItemToAsyncStorage('films', films);

  return { status: 200, success: true };
};
