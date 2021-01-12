const getUsersBlogs = async userId => {
  const requests = userId.map(name => fetch(`https://api.github.com/users/${name}`));
  try {
    const dataUsers = await Promise.all(requests)
      .then(responses => Promise.all(responses.map(r => r.json())))
      .then(users => users.map(user => user.blog));

    return dataUsers;
  } catch (err) {
    throw new Error('Failed to fetch user');
  }
};

getUsersBlogs(['google', 'facebook', 'gaearon'])
  .then(linksList => console.log(linksList))
  .catch(err => alert(err.message));
