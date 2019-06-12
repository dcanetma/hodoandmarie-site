// A custom helper to be able to pass a color variable inside the <p> tag
// To make contrast to the background the text is placed
hexo.extend.helper.register('myMarkdown', function(text, color) {
	text = '<span style="color: ' + color + '! important">' + text + '</span>';
	const markdown = hexo.extend.helper.get('markdown').bind(this)
  return markdown(text);
});