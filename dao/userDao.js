import DB from '../models'

export const getAllUsers = async ({ limit = null, offset = null }) => {
  return DB.Users.findAndCountAll({
    limit: limit,
    offset: offset,
  })
}

export const getUserDetail = async (filters) => {
  return DB.Users.findOne({
    where: filters
  })
}