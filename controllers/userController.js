import { OK, SERVER_ERROR } from '../constants'
import { getAllUsersList, getUserFriendsListData } from '../services'

export const getUsersList = (req, res) => {
  const { query } = req
  getAllUsersList(query)
    .then((result) => {
      return res.status(OK).json(result)
    })
    .catch((err) => {
      return res.status(err.status || SERVER_ERROR).json(err)
    })
}

export const getUserFriendsList = (req, res) => {
  const { params } = req
  getUserFriendsListData(params)
    .then((result) => {
      return res.status(OK).json(result)
    })
    .catch((err) => {
      console.log(err)
      return res.status(err.status || SERVER_ERROR).json(err)
    })
}
