import Sequelize, { Error } from 'sequelize'
import { MESSAGE_CONSTANTS, SERVER_ERROR } from '../constants'
import { getAllUsers } from '../dao'
import { getUserFriendsList } from '../dao/usersFriendsDao'

export const getAllUsersList = async (params) => {
  try {
    const usersList = await getAllUsers(params)

    return {
      data: usersList,
      message: MESSAGE_CONSTANTS.SUCCESS,
    }
  } catch (error) {
    throw new Error(error.status || SERVER_ERROR, error.message)
  }
}

export const getUserFriendsListData = async (params) => {
  try {
    const filters = {
      [Sequelize.Op.or]: [
        {
          user_id1: params.id,
        },
        {
          user_id2: params.id,
        },
      ],
    }
    const userFriendsList = await getUserFriendsList(filters)

    return {
      data: userFriendsList,
      message: MESSAGE_CONSTANTS.SUCCESS,
    }
  } catch (error) {
    throw new Error(error.status || SERVER_ERROR, error.message)
  }
}
