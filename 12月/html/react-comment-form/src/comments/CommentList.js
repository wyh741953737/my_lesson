import React, { Component,propTypes } from 'react'

import CommentItem from './CommentItem'
export default class CommentList extends Component {
    static propTypes={
//对comment来说必须是一个数组，数组中的每个元素都是object，object形状有id,data等，定义这些react会检查是否正确
        comments:propTypes.arrayOf(propTypes.shape({
            id:propTypes.string.isRequired,
            author:propTypes.string.isRequired,
            data:propTypes.object.isRequired,
            text:propTypes.string.isRequired,
        }))
    }
  render() {
    return (
      <div className="comment-list">
        {this.props.comments.map(comment=><CommentItem key={comment.id} comment={comment}></CommentItem>)}
      </div>
    )
  }
}
