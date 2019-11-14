import { updateComment, deleteComment } from "../../actions/comment_actions";
import { connect } from "react-redux";
import Comment from "./comment";

const mSTP = (state, ownProps) => {
    return {
        comment: ownProps.comment,
        currentUser: state.entities.users[state.session.id],
        owner: state.entities.users[ownProps.comment.authorId],
        post: state.entites.posts[ownProps.comment.postId]
    }
}

const mDTP = dispatch => {
    return {
        updateComment: comment => dispatch(updateComment(comment)),
        deleteComment: commentId => dispatch(deleteComment(commentId))
    }
}

export default connect(mSTP, mDTP)(Comment)