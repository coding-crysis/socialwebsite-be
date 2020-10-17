import DB from '../models'

export const getUserFriendsList = async (filters) => {
  return DB.UsersFriends.findAndCountAll({
    where: filters,
    include: [
      {
        model: DB.Users,
        as: 'user_1',
        attributes: ['first_name', 'last_name', 'avatar'],
        required: false,
      },
      {
        model: DB.Users,
        as: 'user_2',
        attributes: ['first_name', 'last_name', 'avatar'],
        required: false,
      },
    ],
  })
}
