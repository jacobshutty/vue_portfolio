export function resumeTransform(data) {
  return data.results[0].data.resume_doc.url;
}

export function particleColorTransform(data) {
  return data.results[0].data.body[0].items.map(function(color) {
    return {
      name: color.name[0].text,
      bgColor: color.background_color,
      dotColor: color.dot_color,
      lineColor: color.line_color,
      textColor: color.text_color,
    };
  });
}
