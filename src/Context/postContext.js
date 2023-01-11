import React from 'react'

const postContext = React.createContext({
  postsData: [],
  onClickLikeIncreaseButton: () => {},
})

export default postContext
