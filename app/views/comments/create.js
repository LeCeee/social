var newComment = $('<%= escape_javascript render "comment", comment: @comment %>');

if ('<%= comment.parent_type %>' == 'Post') {
	$('#post<%= comment.parent_id %> . post-comments-container ul').prepend(newComment);
}
else{
	
}