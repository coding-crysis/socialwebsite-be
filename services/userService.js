import Sequelize, { Error } from 'sequelize'
import { MESSAGE_CONSTANTS, NOT_FOUND, SERVER_ERROR } from '../constants'
import { getAllUsers, getUserDetail } from '../dao'
import { getUserFriendsList } from '../dao/usersFriendsDao'
import { CustomError } from '../utils/customError'

export const getAllUsersList = async (params) => {
  try {
    const {rows, count} = await getAllUsers(params)

    return {
      data: rows,
      count,
      message: MESSAGE_CONSTANTS.SUCCESS,
    }
  } catch (error) {
    throw new CustomError(error.status || SERVER_ERROR, error.message)
  }
}

export const getUserFriendsListData = async (params) => {
  try {

    const userData = await getUserDetail({id: params.id})

    console.log(userData)
    if (!userData) {
      throw new CustomError(NOT_FOUND, MESSAGE_CONSTANTS.NO_USER) 
    }
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
    const {rows,count} = await getUserFriendsList(filters)

    return {
      data: { profile: userData, friends: rows},
      count,
      message: MESSAGE_CONSTANTS.SUCCESS,
    }
  } catch (error) {
    throw new CustomError(error.status || SERVER_ERROR, error.message)
  }
}
