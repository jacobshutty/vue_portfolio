import Prismic from "prismic-javascript";
import {
  artworkTransform,
  skillsTransform,
  particleColorTransform,
  workTransform,
} from "@/transforms";

const endpoint = "https://shuttyja-portfolio.cdn.prismic.io/api/v2";

async function getApi() {
  const api = await Prismic.getApi(endpoint);
  return api;
}

export async function getSkills() {
  const api = await getApi();
  const response = await api.query(Prismic.Predicates.at("document.type", "skill"), {
    orderings: "[my.skill.index]",
  });
  return skillsTransform(response);
}

export async function getParticles() {
  const api = await getApi();
  const response = await api.query(Prismic.Predicates.at("document.type", "particle_colors"));
  return particleColorTransform(response);
}

export async function getWork() {
  const api = await getApi();
  const response = await api.query(Prismic.Predicates.at("document.type", "work"), {
    orderings: "[my.work.order]",
  });
  return workTransform(response);
}

export async function getArtwork() {
  const api = await getApi();
  const response = await api.query(Prismic.Predicates.at("document.type", "art"), {
    orderings: "[my.art.index]",
  });
  return artworkTransform(response);
}
