import DB from '../models'

export const getAllUsers = async ({ limit = null, offset = null }) => {
  return DB.Users.findAll({
    limit: limit,
    offset: offset,
  })
}
