/**
 * ACTION TYPES
 */

export const INCREMENT_QUESTION = 'INCREMENT_QUESTION'
export const DECREMENT_QUESTION = 'DECREMENT_QUESTION'

/**
 * ACTION CREATORS
 */

export const incrementQuestion = (resp) => ({
  type: INCREMENT_QUESTION,
  payload: resp
});

export const decrementQuestion = () => ({
  type: DECREMENT_QUESTION,
});
