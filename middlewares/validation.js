import Joi from 'joi'

export const usersValidations = {
  getUsersList: {
    query: {
      limit: Joi.number(),
      offset: Joi.number(),
    },
  },
  getUserFriendsList: {
    params: {
      id: Joi.number().required(),
    },
  },
}
