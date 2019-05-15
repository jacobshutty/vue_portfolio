import serializer from "@/api/serializer";

export function skillsTransform(data) {
  return data.results.map(function(skill) {
    return {
      logoUrl: skill.data.logo.url,
      name: skill.data.skill_name[0].text,
      info: serializer(skill.data.skill_info),
    };
  });
}

export function particleColorTransform(data) {
  return data.results[0].data.body[0].items.map(function(color) {
    return {
      name: color.name[0].text,
      bgColor: color.background_color,
      dotColor: color.dot_color,
      lineColor: color.line_color,
      textColor: color.text_color,
      order: color.order,
    };
  });
}

export function artworkTransform(data) {
  return data.results.map(function(art) {
    return {
      imageUrl: art.data.art_image.url,
      info: serializer(art.data.info),
    };
  });
}

export function workTransform(data) {
  return data.results[0].data.body[0].items.map(function(item) {
    return {
      imageUrl: item.image.url,
      link: item.link.url,
      description: serializer(item.description),
      name: item.name[0].text,
    };
  });
}

export function resumeTransform(data) {
  return data.results[0].data.resume_doc.url;
}
