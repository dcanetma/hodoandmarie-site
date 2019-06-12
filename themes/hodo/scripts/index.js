hexo.extend.helper.register('myMarkdown', function(text, color) {
	text = '<span style="color: ' + color + '! important">' + text + '</span>';
	const markdown = hexo.extend.helper.get('markdown').bind(this)
  return markdown(text);
});